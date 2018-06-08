package com.adbc.maven;
import com.adbc.maven.HelloFriend;;
public class MakeFriends {

	public String makeFriends(String name) {
		HelloFriend helloFriend = new HelloFriend();
		helloFriend.sayHelloToFriend("lyh");
		String str = "Hey,lyh make a friend please!";
		System.out.println(str);
		return str;
	}
}
