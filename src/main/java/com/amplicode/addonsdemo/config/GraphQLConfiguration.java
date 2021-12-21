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
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.authentication.AuthenticationTrustResolverImpl;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
public class GraphQLConfiguration {

    @Bean
    public ExtensionProvider<GeneratorConfiguration, ResolverInterceptorFactory> resolverInterceptorFactoryProvider(ApplicationContext applicationContext) {
        return (config, defaults) -> defaults.append(params -> getResolverInterceptors(applicationContext));
    }

    protected List<ResolverInterceptor> getResolverInterceptors(ApplicationContext applicationContext) {
        return Collections.singletonList(new AccessDeniedResolverInterceptor(applicationContext));
    }

    private static class AccessDeniedResolverInterceptor implements ResolverInterceptor {
        private AuthenticationTrustResolver resolver;

        public AccessDeniedResolverInterceptor(ApplicationContext applicationContext) {
            try {
                this.resolver = applicationContext.getBean(AuthenticationTrustResolver.class);
            } catch (NoSuchBeanDefinitionException e) {
                this.resolver = new AuthenticationTrustResolverImpl();
            }
        }

        @Override
        public Object aroundInvoke(InvocationContext context, Continuation continuation) throws Exception {
            try {
                return continuation.proceed(context);
            } catch (AccessDeniedException e) {
                GraphQLError error;
                if (resolver.isAnonymous(SecurityContextHolder.getContext().getAuthentication())) {
                    error = GraphqlErrorBuilder.newError()
                            .errorType(ErrorType.UNAUTHORIZED)
                            .message("Unauthorized")
                            .build();
                } else {
                    error = GraphqlErrorBuilder.newError()
                            .errorType(ErrorType.FORBIDDEN)
                            .message("Forbidden")
                            .build();
                }
                return DataFetcherResult.newResult()
                        .error(error)
                        .build();
            }
        }
    }
}
