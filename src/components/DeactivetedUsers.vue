<template>
  <tbody>
    <tr v-for="(user, index) in users" v-bind:key="index">
      <template v-if="user.isDeleted">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.password}}</td>
        <td>{{user.email}}</td>
        <td>Deactivated</td>
      <td><router-link v-bind:to="`/user/${index}`">Info</router-link></td>
      </template>
    </tr>
  </tbody>
</template>

<script>
import store from '../store/index';

export default {
  name: 'DeactivetedUsers',
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
