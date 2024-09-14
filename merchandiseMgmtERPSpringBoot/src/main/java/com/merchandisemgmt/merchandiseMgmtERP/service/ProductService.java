package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private  ProductRepository productRepository;



    public Product saveProduct(Product p) {
        try {
            return productRepository.save(p);
        } catch (Exception e) {
            System.err.println("Error saving product: " + e.getMessage());
            throw new RuntimeException("Failed to save product", e);
        }
    }

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

    public Product findProductById(Long id) {
        return productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("No Faculty found with id: " + id)
        );
    }

    public Product updateProduct(Product p, Long id) {
        return productRepository.save(p);
    }
}
