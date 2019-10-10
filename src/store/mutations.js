const mutations = {
  ADD_USER(state, data) {
    state.users.push(data);
  },
  EDIT_USER(state, { index, data }) {
    state.users[index] = {
      ...state.users[index],
      name: data.name,
      password: data.password,
      email: data.email,
      isDeleted: data.isDeleted,
    };
  },
};

export default mutations;
