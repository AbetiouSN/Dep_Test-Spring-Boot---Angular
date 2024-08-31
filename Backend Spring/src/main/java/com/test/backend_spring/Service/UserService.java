package com.test.backend_spring.Service;

import com.test.backend_spring.Entity.User;
import com.test.backend_spring.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user){
        userRepository.save(user);
        return user;
    }

    public List<User> allUsers(){
        return userRepository.findAll();
    }

}
