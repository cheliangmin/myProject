package com.adbc.maven;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class MakeFriendsTest {

	@Test
	public void testMakeFriend() {
		MakeFriends makeFriends = new MakeFriends();
		String str = makeFriends.makeFriends("lyh");
		assertEquals("Hey,lyh make a friend please!",str);
	}
}
