package com.cs219.moto.repository;

import com.cs219.moto.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
    boolean existsByName(String name);

    List<Admin> findByEmail(String email);

}