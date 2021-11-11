package com.amplicode.addonsdemo.dto;

import org.locationtech.jts.geom.Polygon;

import java.io.Serializable;

public class TerritoryDto implements Serializable {
    private Long id;
    private Polygon polygon;
    private String name;

    public TerritoryDto() {
    }

    public TerritoryDto(Long id, Polygon polygon, String name) {
        this.id = id;
        this.polygon = polygon;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Polygon getPolygon() {
        return polygon;
    }

    public void setPolygon(Polygon polygon) {
        this.polygon = polygon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
