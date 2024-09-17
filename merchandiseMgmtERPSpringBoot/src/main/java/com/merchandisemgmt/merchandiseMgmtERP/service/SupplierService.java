package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.entity.Supplier;
import com.merchandisemgmt.merchandiseMgmtERP.repository.CustomerRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;
   @Autowired
    private ProductRepository productRepository;

   public List<Supplier> getAllSuppliers() {
       return supplierRepository.findAll();
   }

   public Supplier SaveSupplier(Supplier supplier) {
       try {
           return supplierRepository.save(supplier);
       } catch (Exception e) {
           System.err.println("Error saving supplier: " + e.getMessage());
           throw new RuntimeException("Failed to save supplier", e);
       }
   }

    public void deleteSupplierById(Long id) {
        supplierRepository.deleteById(id);
    }

    public Supplier findSupplierById(Long id) {
        return supplierRepository.findById(id).orElseThrow(
                () -> new RuntimeException("No supplier found with id: " + id)
        );
    }

    public Supplier updateSupplier(Supplier s, Long id) {
        return supplierRepository.save(s);
    }

}
