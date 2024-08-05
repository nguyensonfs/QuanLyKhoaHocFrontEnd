const state = {
  deleteDialogVisible: false,
};

const mutations = {
  SET_DELETE_DIALOG_VISIBLE(state, visible) {
    state.deleteDialogVisible = visible;
  },
};

const actions = {
  openDeleteDialog({ commit }) {
    commit("SET_DELETE_DIALOG_VISIBLE", true);
  },
  closeDeleteDialog({ commit }) {
    commit("SET_DELETE_DIALOG_VISIBLE", false);
  },
};

const getters = {
  isDeleteDialogVisible: (state) => state.deleteDialogVisible,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
