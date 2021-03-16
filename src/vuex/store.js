import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    students: [],
    users: []
  },
  mutations: {
    SET_STUDENTS_TO_VUEX: (state, students) => {
      state.students = students;
    },
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    GET_STUDENTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/students', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_STUDENTS_TO_VUEX', response.data)
        })
    },
    GET_USERS_FROM_API({ commit }) {
      return axios('http://localhost:3000/users', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_USERS_TO_VUEX', response.data)
        })
    },
  },
  getters: {
    STUDENTS(state) {
      return state.students
    },
    USERS(state) {
      return state.users
    },
  }
});

export default store;
