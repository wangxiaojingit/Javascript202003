import React from "react";
import ReactDOM from "react-dom";
// 封装一个轮播图组件
import Slider from "./components/slider.js.js";// 导入轮播图
import "./index.css";// 导入css
// 把图片的信息以数据方式传递给组件；·
// 当webpack启动服务时，会把这里面素有的文件进行打包处理，但是webpack执行的start并不会将打包的文件夹暴露出来；实际上打包的文件中有个文件夹，叫static/media; 文件夹名字也发生了改变；
let  images=[require("./images/1.jpg"),require("./images/2.jpg"),require("./images/3.jpg"),require("./images/1.jpg")];
// <el-table :data="tableData">
ReactDOM.render(<Slider imgs={images} tt={1500} isShowDots={false}></Slider>,document.querySelector("#root"));

// 轮播图
// 1. 组件的封装  上传文件的组件 上传头像组件  弹出框组件 
// 2. 组件之间数据属性传递，方法的传递
// 3. 组件的state能够引发视图更新
// 4. 生命周期
// 5. 视图的更新伴随着state props属性；只有两个能引发视图的更新；