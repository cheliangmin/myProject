package com.adbc.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class HelloController {

    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "hello world";
    }
    @RequestMapping("/success")
    public String success(Map<String,String> map){
        map.put("hello","你好");
        return "success";
    }

    @ResponseBody
    @RequestMapping("/login")
    public String login(@RequestParam("email") String email,@RequestParam("password") String password) {
        return "EMAIL:" + email + "\nPASSWORD:" + password;
    }
}
