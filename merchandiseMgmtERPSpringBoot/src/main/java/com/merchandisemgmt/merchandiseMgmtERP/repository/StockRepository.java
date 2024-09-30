package com.merchandisemgmt.merchandiseMgmtERP.repository;

import com.merchandisemgmt.merchandiseMgmtERP.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
}
