package com.amplicode.addonsdemo.dto;

import org.locationtech.jts.geom.Point;

import java.io.Serializable;

public class SalespersonDto implements Serializable {
    private Long id;
    private String name;
    private Point location;
    private String phone;
    private TerritoryDto territory;

    public SalespersonDto() {
    }

    public SalespersonDto(Long id, String name, Point location, String phone, TerritoryDto territory) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.phone = phone;
        this.territory = territory;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Point getLocation() {
        return location;
    }

    public void setLocation(Point location) {
        this.location = location;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public TerritoryDto getTerritory() {
        return territory;
    }

    public void setTerritory(TerritoryDto territory) {
        this.territory = territory;
    }
}