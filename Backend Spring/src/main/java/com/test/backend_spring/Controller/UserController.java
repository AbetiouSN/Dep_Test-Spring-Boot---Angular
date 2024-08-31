package com.test.backend_spring.Controller;

import com.test.backend_spring.Entity.User;
import com.test.backend_spring.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<User> save(@RequestBody User user){

        try {
            User registerUser = userService.save(user);
            return new ResponseEntity<>(registerUser, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("allUsers")
    public ResponseEntity<List<User>> allUsers(){
        try {
            List<User> users = new ArrayList<>();
            users = userService.allUsers();
            return new ResponseEntity<>(users,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
