// 封装axios
import axios from "axios";

const instance = axios.create({
  baseURL: "/api", //公共的基础路径
  headers: {},
});

// 设置请求拦截器
instance.interceptors.request.use(
  // 相映成功：2xx
  (response) => {
    //   200是成功，201，202就失败了
    if (response.data.code === 200) {
      // 返回成功的相应数据
      return response.data.data;
    }
    // 功能失败。放回失败的promise
    return Promise.reject(response.data.message);
  },
  //失败

  (error) => {
    return Promise.reject(error);
  },
  (config) => {
    //   config 请求的配置对象
    // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中

    // 修改config，来添加公共请求参数
    // if (token) {
    //   config.headers.token = token;
    // }
    return config;
  }
  //   () => {}
);

export default instance;
