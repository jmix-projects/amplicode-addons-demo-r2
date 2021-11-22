package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.Salesperson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

public interface SalespersonRepository extends JpaRepository<Salesperson, Long>,
        RevisionRepository<Salesperson, Long, Integer> {
}
