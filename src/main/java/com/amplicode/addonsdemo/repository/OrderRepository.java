package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {
}
