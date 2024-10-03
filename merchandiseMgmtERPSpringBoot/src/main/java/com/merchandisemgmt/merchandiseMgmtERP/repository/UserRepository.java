package com.merchandisemgmt.merchandiseMgmtERP.repository;


import com.merchandisemgmt.merchandiseMgmtERP.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
