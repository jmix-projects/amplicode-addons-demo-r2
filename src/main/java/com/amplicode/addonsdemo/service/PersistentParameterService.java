package com.amplicode.addonsdemo.service;

import com.amplicode.addonsdemo.persistentparameter.TestPersistentParameters;
import com.amplicode.persistentparameters.core.PersistentParametersFactory;
import com.amplicode.persistentparameters.type.DateStringify;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.stereotype.Service;

@GraphQLApi
@Service
public class PersistentParameterService {

    private final TestPersistentParameters persistentParameters;

    public PersistentParameterService(PersistentParametersFactory persistentParametersFactory) {
        persistentParameters = persistentParametersFactory.getPersistentParameters(TestPersistentParameters.class);
    }


    @GraphQLQuery(name = "getStringParameter")
    public String getStringParameter() {
        return persistentParameters.getStringParameter();
    }

    @GraphQLQuery(name = "getNumberParameter")
    public int getNumberParameter() {
        return persistentParameters.getIntParameter();
    }

    @GraphQLQuery(name = "getDateTimeParameter")
    public String getDateTimeParameter() {
        final DateStringify dateConverter = new DateStringify();
        return dateConverter.stringify(persistentParameters.getDateParameter());
    }

    @GraphQLQuery(name = "getEnumParameter")
    public String getEnumParameter() {
        return persistentParameters.getEnumParameter().toString();
    }

    @GraphQLQuery(name = "getEntityParameter")
    public long getEntityParameter() {
        return persistentParameters.getEntityParameter().getId();
    }
}
