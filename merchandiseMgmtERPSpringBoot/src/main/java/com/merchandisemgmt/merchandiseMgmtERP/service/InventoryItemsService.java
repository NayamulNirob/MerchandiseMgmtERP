package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.InventoryItem;
import com.merchandisemgmt.merchandiseMgmtERP.repository.InventoryItemRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryItemsService {

    @Autowired
    private InventoryItemRepository inventoryItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<InventoryItem> getInventoryItems() {
        return inventoryItemRepository.findAll();
    }


    public InventoryItem findInventoryById(Long id) {
        return inventoryItemRepository.findById(id).orElseThrow(
                () -> new RuntimeException("No InventoryItem found with id: " + id)
        );
    }




}
