import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";
 
Vue.use(Vuex);
// 储存状态数据容器
const state = {
  testCount: 0,
};
// 储存只读的计算属性容器
const getters = {};
// 包含n个用来间接修改state的容器
const actions = {};
// 包含n个用来直接修改state的容器
const mutations = {};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
  //   modules: {
  //     home: {
  //       state: {},
  //       getters: {},
  //       actions: {},
  //       mutations: {},
  //     },
  //     login: {
  //       state: {},
  //       getters: {},
  //       actions: {},
  //       mutations: {},
  //     },
  //   },
});
