package com.example.demo.dao;



import java.util.List;

import com.example.demo.entity.User;

public interface UserDao {

	public User findUserByName(String name);
	
	public List<User> findAllUser();
	
	public List<User> findUserNameByName(String name);
}
