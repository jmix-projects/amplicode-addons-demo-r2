package com.amplicode.addonsdemo.graphql;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }

    public static ResourceNotFoundException withId(Object id) {
        return new ResourceNotFoundException(String.format("Unable to find entity by id: %s ", id));
    }
}
