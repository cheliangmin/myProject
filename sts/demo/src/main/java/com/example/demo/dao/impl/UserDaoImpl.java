package com.example.demo.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@Repository
public class UserDaoImpl implements UserDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public User findUserByName(String name) {
		// TODO Auto-generated method stub
		String sql = "select * from t_user where name = ?";
		User user = jdbcTemplate.queryForObject(sql, new Object[] {name},new BeanPropertyRowMapper<User>(User.class));
		return user;
	}

	@Override
	public List<User> findAllUser() {
		// TODO Auto-generated method stub
		String sql = "select * from t_user";
		List<User> list = jdbcTemplate.query(sql,new BeanPropertyRowMapper<User>(User.class));
		return list;
	}

}
