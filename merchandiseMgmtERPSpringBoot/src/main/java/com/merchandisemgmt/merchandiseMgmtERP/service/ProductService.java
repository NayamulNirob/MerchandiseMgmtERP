package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product p) {
        try {
            return productRepository.save(p);
        } catch (Exception e) {
            return null;
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

    public void updateProduct(Product p, Long id) {
        productRepository.save(p);
    }
}
