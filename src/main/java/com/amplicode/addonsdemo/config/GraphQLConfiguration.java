package com.amplicode.addonsdemo.config;

import com.amplicode.addonsdemo.graphql.ErrorType;
import graphql.GraphQLError;
import graphql.GraphqlErrorBuilder;
import graphql.execution.DataFetcherResult;
import io.leangen.graphql.ExtensionProvider;
import io.leangen.graphql.GeneratorConfiguration;
import io.leangen.graphql.execution.InvocationContext;
import io.leangen.graphql.execution.ResolverInterceptor;
import io.leangen.graphql.execution.ResolverInterceptorFactory;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.security.access.AccessDeniedException;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Configuration
public class GraphQLConfiguration {

    //TODO: access denied bugfix
    @Bean
    public ExtensionProvider<GeneratorConfiguration, ResolverInterceptorFactory> resolverInterceptorFactoryProvider(ApplicationContext applicationContext) {
        return (config, defaults) -> defaults.append(params -> getResolverInterceptors());
    }

    protected List<ResolverInterceptor> getResolverInterceptors() {
        return Arrays.asList(new AccessDeniedResolverInterceptor(), new ValidationInterceptor());
    }

    //TODO: access denied bugfix
    private static class AccessDeniedResolverInterceptor implements ResolverInterceptor {
        @Override
        public Object aroundInvoke(InvocationContext context, Continuation continuation) throws Exception {
            try {
                return continuation.proceed(context);
            } catch (AccessDeniedException e) {
                GraphQLError error = GraphqlErrorBuilder.newError()
                        .errorType(ErrorType.FORBIDDEN)
                        .message("Forbidden")
                        .build();
                return DataFetcherResult.newResult()
                        .error(error)
                        .build();
            }
        }
    }

    //TODO: Bean validation: Add constraints into GraphQL error (doesn't required for MVP)
    private static class ValidationInterceptor implements ResolverInterceptor {
        @Override
        public Object aroundInvoke(InvocationContext context, Continuation continuation) throws Exception {
            try {
                return continuation.proceed(context);
            } catch (ConstraintViolationException e) {
                GraphQLError error = GraphqlErrorBuilder.newError()
                        .errorType(graphql.ErrorType.ValidationError)
                        .extensions(getExtensions(e.getConstraintViolations()))
                        .message("Bean validation error")
                        .build();
                return DataFetcherResult.newResult()
                        .error(error)
                        .build();
            }
        }

        private Map<String, Object> getExtensions(Set<ConstraintViolation<?>> constraintViolations) {
            return Map.of("constraintViolations", constraintViolations.stream()
                    .map(this::composeErrorExtension)
                    .collect(Collectors.toList()));
        }

        private Map<String, Object> composeErrorExtension(ConstraintViolation<?> constraintViolation) {
            Map<String, Object> errorMap = new HashMap<>();

            errorMap.put("messageTemplate", constraintViolation.getMessageTemplate());
            errorMap.put("message", constraintViolation.getMessage());
            errorMap.put("path", composePath(constraintViolation));
            errorMap.put("invalidValue", constraintViolation.getInvalidValue().toString());

            return errorMap;
        }

        private String composePath(ConstraintViolation<?> constraintViolation) {
            GraphQLApi annotation = AnnotationUtils.findAnnotation(constraintViolation.getRootBeanClass(), GraphQLApi.class);
            if (annotation != null) {
                String propertyPath = constraintViolation.getPropertyPath().toString();
                return propertyPath.substring(propertyPath.indexOf(".") + 1);
            } else {
                return constraintViolation.getPropertyPath().toString();
            }
        }
    }
}
