package com.merchandisemgmt.merchandiseMgmtERP.restcontroller;

import com.merchandisemgmt.merchandiseMgmtERP.entity.InventoryItem;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.service.InventoryItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/inventory")
@CrossOrigin("*")
public class InventoryItemRestController {
    @Autowired
    private InventoryItemsService inventoryItemsService;

    @GetMapping("/")
    public ResponseEntity<List<InventoryItem>> getAllInventory() {

        List<InventoryItem> inventory = inventoryItemsService.getInventoryItems();
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem> getInventoryItemById(@PathVariable("id") long id) {

        InventoryItem inventory= inventoryItemsService.findInventoryById(id);
        return ResponseEntity.ok(inventory);
    }

//    @PostMapping("/save")
//    public ResponseEntity<InventoryItem> save(@RequestBody InventoryItem inventoryItem) {
//        inventoryItemsService.save(inventoryItem);
//        return ResponseEntity.ok(inventoryItem);
//    }

    @PostMapping("/save")
    public ResponseEntity<InventoryItem> saveProduct(@RequestBody InventoryItem inventoryItem) {
        InventoryItem saveInventories= inventoryItemsService.save(inventoryItem);
        return new ResponseEntity<>(saveInventories, HttpStatus.CREATED);
    }


}
