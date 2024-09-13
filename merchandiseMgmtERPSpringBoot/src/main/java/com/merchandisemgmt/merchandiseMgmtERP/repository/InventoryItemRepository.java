package com.merchandisemgmt.merchandiseMgmtERP.repository;

import com.merchandisemgmt.merchandiseMgmtERP.entity.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long> {
}
