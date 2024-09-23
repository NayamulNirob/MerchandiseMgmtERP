package com.merchandisemgmt.merchandiseMgmtERP.repository;

import com.merchandisemgmt.merchandiseMgmtERP.entity.inventory.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
