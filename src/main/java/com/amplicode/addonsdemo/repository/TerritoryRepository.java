package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.Territory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

public interface TerritoryRepository extends JpaRepository<Territory, Long>,
        RevisionRepository<Territory, Long, Integer> {
}
