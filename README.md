 - [简介](#简介)
- [目录结构](#目录结构)
- [安装教程](#安装教程)
- [使用文档](#使用文档)
- [JDK版本](#JDK版本)
- [使用说明](#使用说明)
- [Q&A](#Q&A)
- [使用说明](#使用说明)
- [加入组织](#加入组织)
- [联系我](#联系我)

## 简介

`Cubic` 是一个对应用透明，无侵入的java应用诊断工具，用于提升开发人员的诊断效率和能力。

`Cubic` 的目标是一站式java应用诊断解决方案，让开发人员无需登录机器或修改系统，就可以从日志、内存、线程、类信息、调试、机器和系统属性等各个方面对应用进行诊断，提升开发人员诊断问题的效率和能力。

`Cubic` 可调用内部自定义命令和动态加载arthas使用arthas 命令集。

因为很多公司使用监控需要进行定制化开发，Cubic 可作为一种技术参考，希望给大家带来些许启发。
 
技术体系：Spring Boot、Vue、Netty、Websocket、xterm等
 

## 目录结构
- agent-dist  存放打包的agent.jar(打包后出现)
- agent-proxy-dist    存放打包的proxy.jar(打包后出现)
- arthas-dist 用于支持arthas命令集
- config  agent配置文件
- cubic-agent agent start
- cubic-core  agent核心
- cubic-proxy 代理应用，目前集成了简单的页面
- cubic-ui    新版UI，持续开发中，欢迎大神来修bug,打包完 将dist目录数据拷贝到cubic-proxy resources/static下
- docs    文档
- scripts 包含打包脚本、启动脚本（用于测试）

## 安装教程

1.  git clone https://gitee.com/sanjiankethree/cubic.git
2.  执行./mvnw clean package  -DskipTests 或执行打包脚本 ./script/build.sh
3.  打包完成的agent 在agent-dist目录下
4.  打包完成的proxy 在agent-proxy-dist目录下


## 使用文档
- [快速开始](docs/cn/quick_start.md)
 
## JDK版本
    目前项目编译使用的是JDK1.8,项目支持1.8+,当然如果是低版本编译也可以支持高版本最低1.6+,因为jdk1.5版本和jdk1.6+的javaagent写法不一样哦。


## 使用说明


1. agent 加载如下,将agent-dist整体拷贝到一个目录进行加载，里面的结构请不要进行变动，不要单独拷贝一个jar
    java -jar -javaagent:/xxx/agent-dist/cubic-agent.jar  yyy.jar
    
2. 启动代理服务 ，用于连接agent 和web
    java -jar cubic-proxy.jar 
    
3. 访问web ui localhost:6080

    正常启动后会有数据上报到服务端，可在首页进行查看，点击唯一标识跳转到命令模式
    ![输入图片说明](https://images.gitee.com/uploads/images/2020/0628/162203_3293cbe3_1168339.png "屏幕截图.png")
    
    点击connect 进入可进行重新连接
    ![输入图片说明](https://images.gitee.com/uploads/images/2020/0628/162418_6e57127d_1168339.png "屏幕截图.png")

4. 命令分为两部分，输入1 基础命令， 3位arthas 命令，输入1 然后输入help 可查看帮助
    
5. 也可以直接进入命令模式，使用search 命令来查询我们项目配置的agent, 比如在agent config 我们配置了参数 agent.service_name = cubic,则进行查询并获取到应用的agentId(如果使用quick_start启动的，因为增加了-Dcubic.agent.service_name=cubic-proxy ，所以我们可以使用cubic-proxy查询ID )
   ![输入图片说明](https://images.gitee.com/uploads/images/2020/0605/190339_bde70250_1168339.png "屏幕截图.png")

    
6. 然后将agentId 填入上面的输入框 点击connect 按钮重新加载，则进入当前应用的命令模式，输入3，切换到arthas 命令，就可以使用了
![输入图片说明](https://images.gitee.com/uploads/images/2020/0605/190447_b3cd9e91_1168339.png "屏幕截图.png")    
    
    
## Q&A
- 因为目前自己抽时间在写，所以前端UI 有些小BUG ,功能、部署、脚本等等都在完善中，马上准备使用最新的VUE 那一套来进行页面的输出迭代了，欢迎各位大牛贡献代码。
- 欢迎大家各种star，fork，提issue，pull request，感觉还可以就点个star吧！
- 不能下载linux-tools 依赖的问题，可执行build 脚本，或执行下面的命令
- mvn install:install-file -Dfile=DependLib/linux-tools-1.8.jar -DgroupId=com.sun -DartifactId=linux-tools -Dversion=1.8 -Dpackaging=jar

## 加入组织
 让我们一起学习成长，关注公众号获得每日一个知识点的储备，让我们一起成长

 ![输入图片说明](https://images.gitee.com/uploads/images/2020/1012/211345_e216e60c_1168339.jpeg "架构技术.jpg")

## 联系我
![输入图片说明](https://images.gitee.com/uploads/images/2020/1012/224643_a328a6dd_1168339.jpeg "WechatIMG236.jpeg")