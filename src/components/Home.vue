<template>
  <div class="hello">
    <div class="tabs-navigation">
      <button
        v-bind:class="{ active: currentComponent === 'AllUsers' }"
        @click="currentComponent='AllUsers'" >
        All Users
      </button>
      <button
        v-bind:class="{ active: currentComponent === 'ActiveUsers' }"
        @click="currentComponent='ActiveUsers'" >
        Active Users
      </button>
      <button
        v-bind:class="{ active: currentComponent === 'DeactivetedUsers' }"
        @click="currentComponent='DeactivetedUsers'" >
        Deactiveted Users
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Username</td>
          <td>Password</td>
          <td>Email</td>
          <td>Status</td>
          <td></td>
        </tr>
      </thead>
      <component :is="currentComponent"></component>
    </table>
  </div>
</template>

<script>
import AllUsers from './AllUsers.vue';
import ActiveUsers from './ActiveUsers.vue';
import DeactivetedUsers from './DeactivetedUsers.vue';

export default {
  name: 'Home',
  data() {
    return {
      currentComponent: 'AllUsers',
    };
  },
  components: {
    AllUsers,
    ActiveUsers,
    DeactivetedUsers,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.tabs-navigation {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;
}
.tabs-navigation button {
  background-color: transparent;
  border: 1px solid #2c3e50;
  cursor: pointer;
  color: #2c3e50;
  padding: 10px;
  margin-right: 10px;
  text-align: center;
}
.tabs-navigation .active {
  border: 1px solid #42b983;
  color: #42b983;
  padding: 10px;
  margin-right: 10px;
  text-align: center;
}
.tabs-navigation button:focus {
  outline: 0;
}
table {
  margin-top: 20px;
  width: 100%;
}
table td {
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: left;
}
</style>
