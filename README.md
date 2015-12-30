## 框架 : 
框架采用 **[angularjs](https://www.angularjs.org/) + [uiRouter](https://github.com/angular-ui/ui-router)** 搭建。 <br>

_学习资料：_
* angularjs中文资料: http://www.angularjs.cn/tag/AngularJS
* angularjs API: https://docs.angularjs.org/api
* uiRouter学习资料: https://github.com/angular-ui/ui-router/wiki 
* uiRouter API: http://angular-ui.github.io/ui-router/site/#/api/ui.router

## 组件库：
交互组件: [dcloud.mui](http://dev.dcloud.net.cn/mui/)
样式组件: spmui

_学习资料：_
* dcloud 交互范例：http://www.dcloud.io/hellomui/
* spmui API(**修改官方文档中mui前缀为spmui**): https://www.muicss.com/

## 项目git地址：
git@gitlab.com:feirpri/styleplus.git
目前就只有个示例
#### 如何启动？Steps:
1. 安装node
2. cd server
3. npm install
4. node index
5. 访问http://localhost:803

## 目录结构：
    + public
        + platform                         // 平台资源
            + js
                - boot.js                  // 框架
                - styleplus.js             // 组件封装
            - index.html                   // 前端入口文件
        + lib                              // 前端公共资源
        + modules                          // 平台的模块资源，手艺人/门店/客户
            + consumer                     // 客户模块
                + index                    // 模块的子页面
                    - index.js             // 子页面控制器，**文件名是固定的**
                    - index.html           // 子页面入口模板文件， **文件名固定**
                - layout.html              // 模块入口模板文件，**必要**
                - layout.js                // 模块子页面注册器，**必要**
            + ...

_补充说明：_
#### 服务器端要求，不论请求路径是什么，始终输出platform下的index.html
#### 什么是模块(modules)？
手艺人/门店/客户 分别为一个模块
#### 如何创建模块(示例: newmodule)？
1. boot.js中modules变量加入新的模块名newmodule
2. modules目录下新建文件夹newmodule
3. newmodule目录下layout.html,layout.js为模块入口，必要。
>模块的名称不允许为lib、module

#### 给模块添加子页面(示例: stat)
1. newmodue 目录下创建文件夹: stat
2. 新建模板文件: index.html
3. 新建模板控制器: index.js
4. 在模块的layout.js中注册子页面 app.registerState('newmodule.stat');

* 然后子页面的地址就是：/newmodule/stat
* 如果子页面还有子页面(test)，那么在stat文件中创建子目录test，并新建index.js+index.html，子页面层级不限。
* 其它模板文件，通过/module/newmodule/...访问，随意创建，不做限定，但是开发过程中尽量形成统一的规范。

#### 资源访问路径
* 平台资源: /index.html,/js/boot.js等
* 前端组件资源: /lib/...
* 模块资源: /module/...

## 代码规范：
* 使用'use strict'启用js严格模式
* 使用闭包，避免创建全局变量
* 代码要求通过jshint检查
* 发布用的版本，删掉console命令
* {}前不要折行，末尾的分号是必要的
* 缩进使用4个空格（不是2个空格，也不是tab键）
* 优化http://www.mahaixiang.cn/znseo/1056.html
* **开发中的一个注意事项： angular的ngHref指令与uiSref指令有区别，前者改变地址栏，后者仅切换页面但不改变地址栏**

其它规范遵循：
http://google.github.io/styleguide/javascriptguide.xml

## 其它前端学习资源/工具
* 浏览器兼容性查询：http://caniuse.com/
* 前端优化及学习资源：https://developers.google.com/web/fundamentals/performance/?zh-cn
* 前端参考手册：https://developer.mozilla.org/en-US/docs/Web/API
