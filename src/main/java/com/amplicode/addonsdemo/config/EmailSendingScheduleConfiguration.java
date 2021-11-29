package com.amplicode.addonsdemo.config;

import com.amplicode.addonsdemo.email.EmailSendingJob;
import org.quartz.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailSendingScheduleConfiguration {
    @Bean
    JobDetail emailSendingJob() {
        return JobBuilder.newJob()
                .ofType(EmailSendingJob.class)
                .storeDurably()
                .withIdentity("emailSending")
                .build();
    }

    @Bean
    Trigger emailSendingTrigger() {
        return TriggerBuilder.newTrigger()
                .forJob(emailSendingJob())
                .startNow()
                .withSchedule(CronScheduleBuilder.cronSchedule("0 * * * * ?"))
                .build();
    }
}
