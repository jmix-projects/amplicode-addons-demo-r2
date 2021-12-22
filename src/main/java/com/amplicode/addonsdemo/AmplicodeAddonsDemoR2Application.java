package com.amplicode.addonsdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.event.EventListener;
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

    @EventListener(ApplicationStartedEvent.class)
    private void initData(ApplicationStartedEvent event) {
        ApplicationContext applicationContext = event.getApplicationContext();
        DataInitializer dataInitializer = applicationContext.getBean(DataInitializer.class);
        dataInitializer.initData();
    }

}
