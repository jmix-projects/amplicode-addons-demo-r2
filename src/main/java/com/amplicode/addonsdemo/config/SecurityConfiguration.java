package com.amplicode.addonsdemo.config;

import com.amplicode.addonsdemo.AppProperties;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

import javax.servlet.http.HttpServletResponse;

import static com.amplicode.email.security.EmailAuthorities.EMAIL_ADMIN;
import static com.amplicode.emailtemplates.security.EmailTemplatesAuthorities.EMAIL_TEMPLATES_ADMIN;
import static com.amplicode.persistentmessages.security.PersistentMessagesAuthorities.PERSISTENT_MESSAGES_ADMIN;
import static com.amplicode.persistentparameters.security.PersistentParametersAuthorities.PERSISTENT_PARAMETERS_ADMIN;
import static com.amplicode.reports.security.ReportAuthorities.REPORT_ADMIN;
import static com.amplicode.reports.security.ReportAuthorities.REPORT_EXECUTOR;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    public static final String NOOP_PREFIX = "{noop}";

    @Autowired
    private AppProperties properties;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser(User.withUsername(properties.getUsers().getAdmin().getUsername())
                        .password(getPassword(properties.getUsers().getAdmin().getPassword()))
                        .authorities("ROLE_ADMIN", REPORT_ADMIN,
                                PERSISTENT_PARAMETERS_ADMIN,
                                EMAIL_ADMIN, PERSISTENT_MESSAGES_ADMIN, EMAIL_TEMPLATES_ADMIN).build())
                .withUser(User.withUsername(properties.getUsers().getUser().getUsername())
                        .password(getPassword(properties.getUsers().getUser().getPassword()))
                        .authorities("ROLE_USER", REPORT_EXECUTOR)
                        .build());
    }

    private String getPassword(String initialPassword) {
        return StringUtils.startsWith(initialPassword, NOOP_PREFIX) ? initialPassword : NOOP_PREFIX + initialPassword;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin()
                .successHandler((request, response, authentication) -> response.setStatus(HttpServletResponse.SC_OK))
                .failureHandler((request, response, exception) -> response.setStatus(HttpServletResponse.SC_UNAUTHORIZED))
                .permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .authorizeRequests()
                .antMatchers("/graphql").permitAll()
                .antMatchers("/graphql/**").permitAll()
                .and()
                .cors()
                .and()
                .csrf().disable();
    }
}
