package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.Salesperson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalespersonRepository extends JpaRepository<Salesperson, Long> {
}
