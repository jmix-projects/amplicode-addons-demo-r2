package com.amplicode.addonsdemo.dto;

import org.locationtech.jts.geom.Point;

import java.io.Serializable;

public class CustomerOrderDto implements Serializable {
    private Long id;
    private Integer amount;
    private Point location;
    private SalespersonDto salesperson;

    public CustomerOrderDto() {
    }

    public CustomerOrderDto(Long id, Integer amount, Point location, SalespersonDto salesperson) {
        this.id = id;
        this.amount = amount;
        this.location = location;
        this.salesperson = salesperson;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Point getLocation() {
        return location;
    }

    public void setLocation(Point location) {
        this.location = location;
    }

    public SalespersonDto getSalesperson() {
        return salesperson;
    }

    public void setSalesperson(SalespersonDto salesperson) {
        this.salesperson = salesperson;
    }
}
