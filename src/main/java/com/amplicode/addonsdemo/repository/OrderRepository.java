package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long>,
        RevisionRepository<CustomerOrder, Long, Integer> {
}
