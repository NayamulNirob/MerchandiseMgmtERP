package com.merchandisemgmt.merchandiseMgmtERP.restcontroller;

import com.merchandisemgmt.merchandiseMgmtERP.entity.ProductCategory;
import com.merchandisemgmt.merchandiseMgmtERP.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/category")
@CrossOrigin("*")
public class ProductCategoryRestController {
    @Autowired
    private ProductCategoryService productCategoryService;


    @GetMapping("/")
    public ResponseEntity<List<ProductCategory>> getAllProductCategory() {

        List<ProductCategory> categories = productCategoryService.viewAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<ProductCategory> saveProductCategory(@RequestBody ProductCategory category) {
        ProductCategory saveCategory= productCategoryService.saveCategory(category);
        return new ResponseEntity<>(saveCategory, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ProductCategory> updateProductCategory(@RequestBody ProductCategory category, @PathVariable("id") long id) {
        ProductCategory updatedCategory= productCategoryService.updateCategory(category, id);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProductCategory(@PathVariable("id") long id) {

        productCategoryService.deleteCategory(id);
        return new ResponseEntity<>( "ProductCategory Deleted",HttpStatus.OK );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductCategory> getProductCategoryById(@PathVariable("id") long id) {
        ProductCategory category= productCategoryService.findCategoryById(id);
        return ResponseEntity.ok(category);
    }


}
