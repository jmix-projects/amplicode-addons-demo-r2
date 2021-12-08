package com.amplicode.addonsdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.data.envers.repository.config.EnableEnversRepositories;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableEnversRepositories({"com.amplicode"})
@SpringBootApplication
@EnableJpaAuditing
@ConfigurationPropertiesScan
public class AmplicodeAddonsDemoR2Application {

    public static void main(String[] args) {
        SpringApplication.run(AmplicodeAddonsDemoR2Application.class, args);
    }

}
