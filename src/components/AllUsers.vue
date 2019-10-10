<template>
  <tbody>
    <tr v-for="(user, index) in users" v-bind:key="index">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.password}}</td>
      <td>{{user.email}}</td>
      <td>{{user.isDeleted ? 'Deactivated' : 'Active'}}</td>
      <td><router-link v-bind:to="`/user/${index}`">Info</router-link></td>
    </tr>
  </tbody>
</template>

<script>
import store from '../store/index';

export default {
  name: 'AllUsers',
  store,
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>

<style scoped>
</style>
