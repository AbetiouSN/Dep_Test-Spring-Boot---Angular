package com.test.backend_spring.Repository;

import com.test.backend_spring.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
