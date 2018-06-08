package com.adbc.HelloFriend;
import static junit.framework.Assert.assertEquals;
import org.junit.Test;
import com.adbc.Hello;

public class HelloFriendTest {
    @Test
    public void testHelloFriend() {
        HelloFriend helloFriend = new HelloFriend();
        String results = helloFriend.sayHelloToFriend("che");
        assertEquals("Hello che! I am lyh",results);
    }
}