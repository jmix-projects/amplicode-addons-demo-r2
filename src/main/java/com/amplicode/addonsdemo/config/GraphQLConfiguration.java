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
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;

import java.util.Arrays;
import java.util.List;

@Configuration
public class GraphQLConfiguration {

    @Bean
    public ExtensionProvider<GeneratorConfiguration, ResolverInterceptorFactory> resolverInterceptorFactoryProvider() {
        return (config, defaults) -> defaults.append(params -> getResolverInterceptors());
    }

    protected List<ResolverInterceptor> getResolverInterceptors() {
        return Arrays.asList(new AccessDeniedResolverInterceptor());
    }

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
}
