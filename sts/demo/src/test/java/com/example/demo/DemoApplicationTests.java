package com.example.demo;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.dao.impl.UserDaoImpl;
import com.example.demo.entity.User;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {
	
	@Autowired
	private UserDaoImpl userDaoImpl;

	@Test
	public void contextLoads() {
		List<User> list = userDaoImpl.findUserNameByName("张");
		System.out.println("------------------------------------------------");
		System.out.println(list.toString());
		System.out.println("------------------------------------------------");
		List<User> users = userDaoImpl.findAllUser();
		System.out.println(users.toString());
	}

}
