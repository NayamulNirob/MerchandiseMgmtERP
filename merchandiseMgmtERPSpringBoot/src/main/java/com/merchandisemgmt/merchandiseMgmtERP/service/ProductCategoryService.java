package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.ProductCategory;
import com.merchandisemgmt.merchandiseMgmtERP.repository.ProductCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductCategoryService {
    @Autowired
    private ProductCategoryRepository productCategoryRepository;


    public List<ProductCategory> viewAllCategories() {
        return productCategoryRepository.findAll();
    }

    public ProductCategory saveCategory(ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }


    public ProductCategory findCategoryById(Long id) {
        return productCategoryRepository.findById(id).orElseThrow(
                ()-> new RuntimeException("Product Category Not Found With This Id"+id)
        );
    }
    public ProductCategory updateCategory(ProductCategory productCategory,long id) {
        if (!productCategoryRepository.existsById(id)) {
            throw new RuntimeException("Product Category Not Found With This Id: " + id);
        }
        productCategory.setId(id);
        return productCategoryRepository.save(productCategory);
    }

    public void deleteCategory(long id) {
        if (!productCategoryRepository.existsById(id)) {
            throw new RuntimeException("Product Category Not Found With This Id: " + id);
        }
        productCategoryRepository.deleteById(id);
    }
}
