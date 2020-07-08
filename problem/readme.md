## 移动端项目中遇到的一些问题
  ##### (1)重复点击路由跳转会报错
解决方案
```
// 解决重复点击当前路由报错的问题,重写push、replace等等跳转方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
```
##### (2)文件引入路径( vuecli3 和 vuecli2 略有不同 )
```
vue-cli3中
//css导入css => @import  
//css中使用别名css （加~）
  @import '~assets/css/test.css';

//js中导入组件
  import TabBar from 'components/common/tabbar/TabBar.vue';

//img使用别名路径 => ~别名
 <img slot="item-icon" src="~assets/images/tabbar/shouye.svg" alt="">


```