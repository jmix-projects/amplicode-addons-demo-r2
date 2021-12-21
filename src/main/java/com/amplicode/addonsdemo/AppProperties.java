package com.amplicode.addonsdemo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.cors.CorsConfiguration;

@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private final CorsConfiguration cors = new CorsConfiguration();
    private final FrontendProperties frontend = new FrontendProperties();
    private final CookieProperties cookie = new CookieProperties();
    private final UsersProperties users = new UsersProperties();

    public CorsConfiguration getCors() {
        return cors;
    }

    public FrontendProperties getFrontend() {
        return frontend;
    }

    public CookieProperties getCookie() {
        return cookie;
    }

    public UsersProperties getUsers() {
        return users;
    }

    public static class FrontendProperties {
        private String publicUrl = "front";

        public String getPublicUrl() {
            return publicUrl;
        }

        public void setPublicUrl(String publicUrl) {
            this.publicUrl = publicUrl;
        }
    }

    public static class CookieProperties {
        private String sameSite;

        public String getSameSite() {
            return sameSite;
        }

        public void setSameSite(String sameSite) {
            this.sameSite = sameSite;
        }
    }

    public static class UsersProperties {
        private final UserCredentials admin = new UserCredentials("admin", "{noop}admin");
        private final UserCredentials user = new UserCredentials("user", "{noop}user");

        public UserCredentials getAdmin() {
            return admin;
        }

        public UserCredentials getUser() {
            return user;
        }
    }

    public static class UserCredentials {
        private String username;
        private String password;

        public UserCredentials(String username, String password) {
            this.username = username;
            this.password = password;
        }

        public UserCredentials() {
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
