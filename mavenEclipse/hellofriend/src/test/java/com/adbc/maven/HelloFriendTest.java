package com.adbc.maven;
import static junit.framework.Assert.assertEquals;
import org.junit.Test;

import com.adbc.maven.Hello;
import com.adbc.maven.HelloFriend;

public class HelloFriendTest {
    @Test
    public void testHelloFriend() {
        HelloFriend helloFriend = new HelloFriend();
        String results = helloFriend.sayHelloToFriend("lyh");
        assertEquals("Hello lyh! I am che",results);
    }
}