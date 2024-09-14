package com.merchandisemgmt.merchandiseMgmtERP.restcontroller;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Warehouse;
import com.merchandisemgmt.merchandiseMgmtERP.service.WereHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/warehouse")
@CrossOrigin("*")
public class WarehouseRestController {

    @Autowired
    private WereHouseService wereHouseService;

    @GetMapping("/")
    public ResponseEntity <List<Warehouse>> getAllWarehouses() {
        List<Warehouse> warehouses = wereHouseService.getAllWarehouses();
        return new ResponseEntity<>(warehouses,HttpStatus.OK);
    }


    @PostMapping("/save")
    public ResponseEntity<Warehouse> saveWarehouse(@RequestBody Warehouse warehouse) {
        Warehouse saveWarehouse = wereHouseService.saveWarehouse(warehouse);
        return new ResponseEntity<>(saveWarehouse, HttpStatus.CREATED);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Warehouse> updateWarehouse(@RequestBody Warehouse warehouse,@PathVariable("id") Long Id) {
        Warehouse  updateWarehouse =wereHouseService.updateWarehouse(warehouse,Id);
        return new ResponseEntity<>(updateWarehouse,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteWarehouse(@PathVariable("id") Long id) {
        wereHouseService.deleteWarehouseById(id);
        return new ResponseEntity<>("WareHouse Deleted",HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Warehouse> getWarehouseById(@PathVariable("id") Long id) {
        Warehouse warehouse = wereHouseService.getWarehouseById(id);
        return new ResponseEntity<>(warehouse,HttpStatus.OK);
    }





}
