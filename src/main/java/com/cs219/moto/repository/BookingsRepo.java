package com.cs219.moto.repository;

import com.cs219.moto.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepo extends JpaRepository<Bookings, Integer> {

}