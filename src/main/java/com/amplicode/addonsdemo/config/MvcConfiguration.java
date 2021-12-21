package com.amplicode.addonsdemo.config;

import com.amplicode.addonsdemo.AppProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.util.StringUtils.trimLeadingCharacter;
import static org.springframework.util.StringUtils.trimTrailingCharacter;

@Configuration
public class MvcConfiguration implements WebMvcConfigurer {
    @Autowired
    private AppProperties appProperties;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        CorsConfiguration corsConfiguration = appProperties.getCors();
        if (isConfigured(corsConfiguration)) {
            registry.addMapping("/**").combine(corsConfiguration);
        }
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        String publicUrl = normalizeUrl(appProperties.getFrontend().getPublicUrl());
        registry.addViewController("/" + publicUrl).setViewName("forward:/" + publicUrl + "/index.html");
    }

    private boolean isConfigured(CorsConfiguration corsConfiguration) {
        return corsConfiguration.getAllowedOrigins() != null && !corsConfiguration.getAllowedOrigins().isEmpty() || corsConfiguration.getAllowedOriginPatterns() != null && !corsConfiguration.getAllowedOriginPatterns().isEmpty();
    }

    private String normalizeUrl(String url) {
        return trimTrailingCharacter(trimLeadingCharacter(url, '/'), '/');
    }
}
