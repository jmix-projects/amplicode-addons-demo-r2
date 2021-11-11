package com.amplicode.addonsdemo.service;

import com.amplicode.addonsdemo.entity.Territory;
import com.amplicode.addonsdemo.repository.TerritoryRepository;
import com.amplicode.addonsdemo.dto.TerritoryDto;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLNonNull;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@GraphQLApi
@Service
public class TerritoryService {
    private final TerritoryRepository crudRepository;
    private final ModelMapper mapper;

    public TerritoryService(TerritoryRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @Secured({Authorities.ADMIN, Authorities.USER})
    @GraphQLQuery(name = "countTerritories")
    @Transactional
    public long count() {
        return crudRepository.count();
    }

    @Secured({Authorities.ADMIN})
    @GraphQLMutation(name = "deleteTerritory")
    @Transactional
    public void delete(@GraphQLNonNull Long id) {
        Territory entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @Secured({Authorities.ADMIN, Authorities.USER})
    @GraphQLQuery(name = "listTerritories")
    @Transactional
    public List<TerritoryDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, TerritoryDto.class))
                .collect(Collectors.toList());
    }

    @Secured({Authorities.ADMIN, Authorities.USER})
    @GraphQLQuery(name = "findTerritory")
    @Transactional
    public TerritoryDto findById(@GraphQLNonNull Long id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, TerritoryDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @Secured({Authorities.ADMIN})
    @GraphQLMutation(name = "updateTerritory")
    @Transactional
    public TerritoryDto update(TerritoryDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        Territory entity = new Territory();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, TerritoryDto.class);
    }
}