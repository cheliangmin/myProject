/*
* @Author: Marte
* @Date:   2018-06-07 20:19:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-07 20:48:38
*/
package com.adbc.maven;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

import com.adbc.maven.Hello;

public class HelloTest {
    @Test
    public void testHello(){
        Hello hello = new Hello();
        String results = hello.sayHello("che");
        assertEquals("Hello che!",results);
    }
}