import * as studentService from "@/services/studentService";

const state = {
  items: [],
  deleteDialog: false,
  itemToDelete: null,
};

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_DELETE_DIALOG(state, payload) {
    state.deleteDialog = payload;
  },
  SET_ITEM_TO_DELETE(state, item) {
    state.itemToDelete = item;
  },
  REMOVE_ITEM(state, itemId) {
    state.items = state.items.filter((item) => item.id !== itemId);
  },
};

const actions = {
  async fetchItems({ commit }) {
    try {
      const response = await studentService.getStudent();
      commit("SET_ITEMS", response);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  },
  openDeleteDialog({ commit }, item) {
    commit("SET_ITEM_TO_DELETE", item);
    commit("SET_DELETE_DIALOG", true);
  },
  closeDeleteDialog({ commit }) {
    commit("SET_DELETE_DIALOG", false);
    commit("SET_ITEM_TO_DELETE", null);
  },
  async deleteItem({ commit, state }) {
    try {
      const response = await studentService.deleteStudent(
        state.itemToDelete.hocVienID
      );
      commit("REMOVE_ITEM", state.itemToDelete.hocVienID);
      commit("SET_DELETE_DIALOG", false);
      commit("SET_ITEM_TO_DELETE", null);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
