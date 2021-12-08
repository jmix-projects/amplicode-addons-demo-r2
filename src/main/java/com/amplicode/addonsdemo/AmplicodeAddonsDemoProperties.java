package com.amplicode.addonsdemo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConfigurationProperties(prefix = "amplicode.addons.demo")
@ConstructorBinding
public class AmplicodeAddonsDemoProperties {

    private final UserCredentials admin = new UserCredentials("admin", "{noop}admin");
    private final UserCredentials user = new UserCredentials("user", "{noop}user");

    public UserCredentials getAdmin() {
        return admin;
    }

    public UserCredentials getUser() {
        return user;
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
