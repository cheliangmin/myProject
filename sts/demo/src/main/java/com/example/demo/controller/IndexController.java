package com.example.demo.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
	@ResponseBody
	@RequestMapping(value = "/search",method = RequestMethod.GET)
	public String [] search(@RequestParam("searchData") String searchData) {
		List<User> list = userDaoImpl.findUserNameByName(searchData);
		System.out.println(list.toString());
		String [] object = new String[list.size()];
		for(int i=0; i<list.size(); i++) {
			object[i] = list.get(i).getName();
		}
		return object;
	}
}
