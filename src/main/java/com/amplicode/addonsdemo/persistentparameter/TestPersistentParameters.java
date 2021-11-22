package com.amplicode.addonsdemo.persistentparameter;

import com.amplicode.addonsdemo.entity.EntityParameter;
import com.amplicode.addonsdemo.entity.EnumParameter;
import com.amplicode.persistentparameters.annotation.Factory;
import com.amplicode.persistentparameters.annotation.PersistentParameters;
import com.amplicode.persistentparameters.annotation.Property;
import com.amplicode.persistentparameters.annotation.Stringify;
import com.amplicode.persistentparameters.annotation.defaults.Default;
import com.amplicode.persistentparameters.annotation.defaults.DefaultInt;
import com.amplicode.persistentparameters.type.DateFactory;
import com.amplicode.persistentparameters.type.DateStringify;

import java.util.Date;

@PersistentParameters
public interface TestPersistentParameters {

    @Property("firstGroup.stringParameter")
    @Default("Default String")
    String getStringParameter();
    void setStringParameter(String value);

    @Property("firstGroup.intParameter")
    @DefaultInt(123)
    int getIntParameter();
    void setIntParameter(int value);

    @Property("dateParameter")
    @Default("2021-12-12 00:00:00.000")
    @Factory(factory = DateFactory.class)
    @Stringify(stringify = DateStringify.class)
    Date getDateParameter();
    void setDateParameter(Date value);

    @Property("secondGroup.enumParameter")
    @Default("CONST_1")
    EnumParameter getEnumParameter();
    void setEnumParameter(EnumParameter value);

    @Property("secondGroup.entityParameter")
    @Default("1")
    EntityParameter getEntityParameter();
    void setEntityParameter(Long id);
}
