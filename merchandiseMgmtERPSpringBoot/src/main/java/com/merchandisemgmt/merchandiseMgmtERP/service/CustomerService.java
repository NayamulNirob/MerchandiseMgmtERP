package com.merchandisemgmt.merchandiseMgmtERP.service;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Customer;
import com.merchandisemgmt.merchandiseMgmtERP.repository.CustomerRepository;
import com.merchandisemgmt.merchandiseMgmtERP.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    public  List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }


    public Customer saveCustomer(Customer customer) {
        try{
            customer.setCreatedAt(LocalDateTime.now());
            customer.setUpdatedAt(LocalDateTime.now());
            return customerRepository.save(customer);
        }
        catch(Exception e){
            System.err.println("Error saving customer: " + e.getMessage());
            throw new RuntimeException("Failed to save customer", e);
        }
    }


    public void deleteCustomerById(Long id) {
        customerRepository.deleteById(id);
    }


    public Customer findCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow(
                () -> new RuntimeException("No customer found with id: " + id)
        );
    }



    public Customer updateCustomer(Customer customer, Long id) {
        try{
            customer.setCreatedAt(LocalDateTime.now());
            customer.setUpdatedAt(LocalDateTime.now());
            return customerRepository.save(customer);
        }
        catch(Exception e){
            System.err.println("Error saving customer: " + e.getMessage());
            throw new RuntimeException("Failed to save customer", e);
        }
    }

}
