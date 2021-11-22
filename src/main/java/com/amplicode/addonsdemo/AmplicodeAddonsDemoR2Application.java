package com.amplicode.addonsdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.envers.repository.config.EnableEnversRepositories;

@EnableEnversRepositories({"com.amplicode"})
@SpringBootApplication
public class AmplicodeAddonsDemoR2Application {

    public static void main(String[] args) {
        SpringApplication.run(AmplicodeAddonsDemoR2Application.class, args);
    }

}
