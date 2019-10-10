/* eslint-disable no-console */
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import state from './initialState';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Store({
  state,
  actions,
  mutations,
  getters: {
    users(initialState) {
      return initialState.users;
    },
    usersLength(initialState) {
      return initialState.users.length;
    },
  },
});

export default store;
