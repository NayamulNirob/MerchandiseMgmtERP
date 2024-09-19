package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Sale;
import com.merchandisemgmt.merchandiseMgmtERP.repository.CustomerRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CustomerRepository customerRepository;

    public Sale saveSale(Sale sale) {
        try {
            sale.setTotalPrice(sale.getQuantity() * sale.getProduct().getPrice());
            return saleRepository.save(sale);
        } catch (Exception e) {
            System.err.println("Error saving Sale: " + e.getMessage());
            throw new RuntimeException("Failed to save Sale", e);
        }
    }

    public List<Sale> getAllSale() {
        return saleRepository.findAll();
    }



//    public void deleteSaleById(Long id) {
//        List<InventoryItem> items=inventoryItemRepository.getByProductId(id);
//        for(InventoryItem item:items){
//            item.setProduct(null);
//            inventoryItemRepository.save(item);
//        }
//        productRepository.deleteById(id);
//    }

    public void deleteSale(Long id) {
        Optional<Sale> sale = saleRepository.findById(id);
        if (sale.isPresent()) {
            saleRepository.deleteById(id);
        } else {
            throw new RuntimeException("Sale not found with id: " + id);
        }
    }



    public Sale findSaleById(Long id) {
        return saleRepository.findById(id).orElseThrow(
                () -> new RuntimeException("No Sale Faculty found with id: " + id)
        );
    }

    public Sale updateSale(Sale s, Long id) {
        return saleRepository.save(s);
    }
}
