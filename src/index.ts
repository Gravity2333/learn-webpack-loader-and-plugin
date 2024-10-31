//@ts-ignore
// import DefaultDashboard from "templates/index.bi";
//@ts-ignore
import StuTemplate from "templates/stuInfo.template";
//@ts-ignore
import webpackPic from "./assets/webpack.png";

const add = (x: number, y: number) => x + y;
// console.log(add(100, 220), DefaultDashboard, StuTemplate);
const body = document.querySelector("body");
body.innerHTML = StuTemplate({
  name: "bill",
  age: 18,
  desc: "a student",
  score: 100,
});

const img = document.createElement("img");
img.src = webpackPic;
body.appendChild(img);
console.log(webpackPic)
