package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.dao.impl.UserDaoImpl;
import com.example.demo.entity.User;

@Controller
public class IndexController {

	@Autowired
	private UserDaoImpl userDaoImpl;
	
	@RequestMapping(value = "/")
	public String index(Map<String, Object> map) {
		map.put("title", "首页");
		map.put("context", "Hello Spring Boot!");
		List<User> list = userDaoImpl.findAllUser();
		map.put("list", list);
		return "index";
	}
}
