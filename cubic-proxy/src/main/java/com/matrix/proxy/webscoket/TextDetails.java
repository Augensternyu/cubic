package com.matrix.proxy.webscoket;

/**
 * @ClassName TextDetails
 * @Author QIANGLU
 * @Date 2020/4/26 2:07 下午
 * @Version 1.0
 */
public interface TextDetails {


    /**
     * command type 1 帮助文本
     */
    String HELP_DETAILS =
            "\r\nWelcome to matrix proxy \r\n" +
                    "This is a remote terminal emulation.\r\n" +
                    "Type some keys and commands to play around.\r\n" +
                    "Enter 1 base comand .\r\n" +
                    "Enter 3 arthas command .\r\n" +
                    "===========================================\r\n" +
                    "滑动选取将进行 复制 文本操作\r\n"+
                    "control + v  粘贴上一次选取的文本\r\n"+
                    "\r\nhelp 帮助文本 \r\n" +
                    "version 获取系统版本信息 \r\n" +
                    "search xxx 获取xxx开头的agentId \r\n";


    /**
     * 类型提示文本
     */
    String TYPE_DETAILS = "\r\n Enter 1 base comand .\r\n" +
            "Enter 3 arthas command . ";

}
