const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data);
  },
  editUser({ commit }, data) {
    commit('EDIT_USER', data);
  },
  deleteUser({ commit }, data) {
    commit('DELETE_USER', data);
  },
};

export default actions;
