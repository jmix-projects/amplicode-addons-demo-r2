package com.amplicode.addonsdemo.repository;

import com.amplicode.addonsdemo.entity.Territory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TerritoryRepository extends JpaRepository<Territory, Long> {
}
