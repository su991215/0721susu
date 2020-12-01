// 封装axios
import axios from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/mock", //公共的基础路径
  headers: {},
});

instance.interceptors.request.use((config) => {
  NProgress.start();
  //   config 请求的配置对象
  // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中

  // 修改config，来添加公 共请求参数
  // if (token) {
  //   config.headers.token = token;
  // }
  return config;
});

// 设置请求拦截器
instance.interceptors.response.use(
  // 相映成功：2xx

  (response) => {
    //   200是成功，201，202就失败了
    NProgress.done();
    if (response.data.code === 200) {
      // 返回成功的相应数据

      return response.data.data;
    }
    // 功能失败。放回失败的promise
    const { message } = response.data;
    // 提示错误
    Message.error(message);
    // 功能失败 --> 返回失败的Promise
    return Promise.reject(message);
  },
  //失败

  (error) => {
    // console.dir(error);
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示错误
    Message.error(message);
    return Promise.reject(message);
  }

  //   () => {}
);

export default instance;
