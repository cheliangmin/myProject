本人在SpringMvc配置thymeleaf时，遇到html中输入th: 没有自动提示的现象，苦寻无果，后查找官网信息，要加载插件才行。

 

打开eclipse的插件安装，Help—>Installations new SoftWare—>add 
插件地址为： http://www.thymeleaf.org/eclipse-plugin-update-site/

一路next，最后重启Eclipse即可。 

插件官方文档说明https://github.com/thymeleaf/thymeleaf-extras-eclipse-plugin<!-- Baidu Button BEGIN -->   <!-- Baidu Button END --><!--172.16.140.12--><!-- Baidu Button BEGIN --> <!-- Baidu Button END -->
添加DTD 类型约束文件，下载地址：http://www.thymeleaf.org/xsd/thymeleaf-extras-dialect-2.1.xsd
      Window->Preferences->XML->XML Catalog->User Specified Entries窗口中,选择Add 按纽，选择上面下载的文件

 

   最后：右键项目 >> Thymeleaf >> Add Thymeleaf Nature.
   
 本项目为百度搜索引擎类似demo，输入数字模糊查询数据库，返回数组显示在列表中。