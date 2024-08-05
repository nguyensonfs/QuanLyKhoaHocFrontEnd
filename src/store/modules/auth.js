import axios from "@/utils/request";

// initial state
const state = {
  token: localStorage.getItem("accessToken") || "",
  user: {},
};
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  LOGOUT(state) {
    state.token = "";
    state.user = {};
  },
};
const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post("login", credentials);
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("accessToken", token);
      commit("SET_TOKEN", token);
      commit("SET_USER", user);

      return response.data;
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      throw error;
    }
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    commit("LOGOUT");
  },
};
const getters = {
  isAuthenticated: (state) => !!state.token,
  getUser: (state) => state.user,
};
export default {
  state,
  getters,
  actions,
  mutations,
};
