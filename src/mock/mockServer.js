import Mock from "mockjs";
import banners from "./rbanners.json";
import floors from "./rfloors.json";

// 一但运行就会拦截get请求，请求地址/mock/banners
// 并最后参数作为响应结果响应
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});
Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|3-5": floors,
});
