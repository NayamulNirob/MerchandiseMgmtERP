package com.merchandisemgmt.merchandiseMgmtERP.restcontroller;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Product;
import com.merchandisemgmt.merchandiseMgmtERP.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("api/product/")
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private ProductService productService;

    @GetMapping("view")
    public ResponseEntity<List<Product>> saveProduct() {

        List<Product> products = productService.getAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("save")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<String> updateProduct(@RequestBody Product p, @PathVariable("id") long id) {
        productService.updateProduct(p, id);
        return new ResponseEntity<>("Product updated", HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") long id) {

        productService.deleteProductById(id);
        return new ResponseEntity<>("Product deleted", HttpStatus.OK);
    }
}
