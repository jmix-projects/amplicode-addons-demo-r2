package com.amplicode.addonsdemo.service;

import com.amplicode.addonsdemo.dto.SalespersonDto;
import com.amplicode.addonsdemo.entity.Salesperson;
import com.amplicode.addonsdemo.repository.SalespersonRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLNonNull;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.geom.Polygon;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@GraphQLApi
@Service
public class SalespersonService {
    private final SalespersonRepository crudRepository;
    private final ModelMapper mapper;

    public SalespersonService(SalespersonRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLQuery(name = "countSalespeople")
    @Transactional
    public long count() {
        return crudRepository.count();
    }

    @GraphQLMutation(name = "deleteSalesperson")
    @Transactional
    public void delete(@GraphQLNonNull Long id) {
        Salesperson entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listSalespeople")
    @Transactional
    public List<SalespersonDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, SalespersonDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findSalesperson")
    @Transactional
    public SalespersonDto findById(@GraphQLNonNull Long id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, SalespersonDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updateSalesperson")
    @Transactional
    public SalespersonDto update(SalespersonDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        validateLocationIsWithinTerritory(input);

        Salesperson entity = new Salesperson();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, SalespersonDto.class);
    }

    protected void validateLocationIsWithinTerritory(SalespersonDto input) {
        final Point location = input.getLocation();
        final Polygon polygon = input.getTerritory().getPolygon();
        if (location != null && polygon != null && !location.within(polygon)) {
            throw new RuntimeException("Location should be within the specified territory");
        }
    }
}