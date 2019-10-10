<template>
  <div id="app" class="container">
    <div class="nav-header">
      <h2>Admin panel</h2>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/add-user">Add User</router-link>
        <router-link to="/info">Info</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin: 0;
}

.container {
  margin: 0 auto;
  width: 1200px;
}

.nav-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-header a {
  color: #42b983;
  margin-left: 20px;
  text-decoration: none;
}

.nav-header a.router-link-exact-active {
  color: #42b983;
  margin-left: 20px;
  text-decoration: underline;
}
</style>
