package com.adbc.maven;

import org.junit.Test;
import static org.junit.Assert.assertEquals;



import com.adbc.maven.HelloFriend;

public class HelloFriendTest {
    @Test
    public void testHelloFriend() {
        HelloFriend helloFriend = new HelloFriend();
        String results = helloFriend.sayHelloToFriend("lyh");
        assertEquals("Hello lyh! I am che",results);
    }
}