package com.amplicode.addonsdemo.service;

import com.amplicode.addonsdemo.entity.CustomerOrder;
import com.amplicode.addonsdemo.dto.CustomerOrderDto;
import com.amplicode.addonsdemo.repository.OrderRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLNonNull;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@GraphQLApi
@Service
public class OrderService {
    private final OrderRepository crudRepository;
    private final ModelMapper mapper;

    public OrderService(OrderRepository crudRepository, ModelMapper mapper) {
        this.crudRepository = crudRepository;
        this.mapper = mapper;
    }

    @GraphQLQuery(name = "countOrders")
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public long count() {
        return crudRepository.count();
    }

    @GraphQLMutation(name = "deleteOrder")
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public void delete(@GraphQLNonNull Long id) {
        CustomerOrder entity = crudRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));

        crudRepository.delete(entity);
    }

    @GraphQLQuery(name = "listOrders")
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public List<CustomerOrderDto> findAll() {
        return crudRepository.findAll().stream()
                .map(e -> mapper.map(e, CustomerOrderDto.class))
                .collect(Collectors.toList());
    }

    @GraphQLQuery(name = "findOrder")
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public CustomerOrderDto findById(@GraphQLNonNull Long id) {
        return crudRepository.findById(id)
                .map(e -> mapper.map(e, CustomerOrderDto.class))
                .orElseThrow(() -> new RuntimeException(String.format("Unable to find entity by id: %s ", id)));
    }

    @GraphQLMutation(name = "updateOrder")
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public CustomerOrderDto update(CustomerOrderDto input) {
        if (input.getId() != null) {
            if (!crudRepository.existsById(input.getId())) {
                throw new RuntimeException(
                        String.format("Unable to find entity by id: %s ", input.getId()));
            }
        }
        CustomerOrder entity = new CustomerOrder();
        mapper.map(input, entity);
        entity = crudRepository.save(entity);

        return mapper.map(entity, CustomerOrderDto.class);
    }
}