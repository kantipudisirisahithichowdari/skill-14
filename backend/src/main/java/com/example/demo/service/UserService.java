package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        System.out.println("Registering user: " + user.getUsername());
        return repo.save(user);
    }

    public User login(String username, String password) {
        System.out.println("Login username: " + username);

        User user = repo.findByUsername(username).orElse(null);
        System.out.println("User found: " + user);

        if (user != null) {
            System.out.println("DB password: " + user.getPassword());
            System.out.println("Input password: " + password);
        }

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public User getUser(Long id) {
        return repo.findById(id).orElse(null);
    }
}