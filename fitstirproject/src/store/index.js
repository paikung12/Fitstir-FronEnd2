import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';
import video from "./video";
import videoplaylist from "./videoplaylist";
import user from "./user";
import error from "./error";
import spinner from "./spinner";
import success from "./success";
import playlistvideo from "./playlistvideo";
import myplaylist from "./myplaylist";
import tag from "./tag";

Vue.use(Vuex)

const modules = {
  video,
  videoplaylist,
  user,
  error,
  spinner,
  success,
  playlistvideo,
  myplaylist,
  tag,

}

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules : modules
})