import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    weatherDetail: null,
  },
  mutations: {
    SET_CITIES(state, payload) {
      state.cities = payload;
    },
    SET_WEATHER_DETAIL(state, payload) {
      state.weatherDetail = payload;
    },
  },
  actions: {
    setCities({ commit }, payload) {
      commit("SET_CITIES", payload);
    },
    setWeatherDetail({ commit }, payload) {
      commit("SET_WEATHER_DETAIL", payload);
    },
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
    getWeatherDetail(state) {
      return state.weatherDetail;
    },
  },
});
