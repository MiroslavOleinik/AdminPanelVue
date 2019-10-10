<template>
  <div class="user-page">
    <p v-bind:class="{active: active}">{{message}}</p>
    <div class="user-edit-form">
      <form v-on:submit.prevent="add">
        <div class="form-field">
          <label>Username</label>
          <input type="text" v-model="nameInput"/>
        </div>
        <div class="form-field">
          <label>Password</label>
          <input type="text" v-model="passwordInput"/>
        </div>
        <div class="form-field">
          <label>Email</label>
          <input type="text" v-model="emailInput"/>
        </div>
        <div class="form-field">
          <label for="check">{{deleteCheckbox ? 'Activate' : 'Deactivate'}}</label>
          <input id="check" type="checkbox" v-model="deleteCheckbox"/>
        </div>
        <div class="form-field">
          <button>Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store/index';

export default {
  name: 'AddUser',
  store,
  data() {
    return {
      nameInput: '',
      passwordInput: '',
      emailInput: '',
      deleteCheckbox: false,
      active: false,
      message: '',
    };
  },
  methods: {
    add() {
      const {
        nameInput,
        passwordInput,
        emailInput,
        deleteCheckbox,
      } = this.$data;
      if (nameInput.length !== 0 && passwordInput.length !== 0) {
        this.$store.dispatch('addUser', {
          id: this.$store.getters.usersLength,
          name: nameInput,
          password: passwordInput,
          email: emailInput,
          isDeleted: deleteCheckbox,
        });
        this.$router.replace('/');
      } else {
        this.$data.active = true;
        this.$data.message = 'Error!';
        setTimeout(() => {
          this.$data.active = false;
          this.$data.message = '';
        }, 5000);
      }
    },
  },
  computed: {
    usersLength() {
      return this.$store.getters.usersLength;
    },
  },
};
</script>

<style scoped>
.user-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

p {
  opacity: 0;
  transition: 0.3s;
  height: 15px;
}

p.active {
  transition: 0.3s;
  opacity: 1;
}

.form-field {
  align-items: center;
  display: flex;
  margin-bottom: 20px;
}

label {
  text-align: left;
  width: 100px;
}

input[type="text"] {
  border: 1px solid #2c3e50;
  margin-left: 10px;
  padding: 10px;
  transition: 0.3s;
}

input[type="text"]:focus {
  border-color: #42b983;
  outline: 0;
}

input[type="checkbox"] {
  appearance: none;
  box-shadow: 0 0 0px 1px #2c3e50;
  border: 3px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  transition: 0.3s;
  height: 15px;
  width: 15px;
}

input[type="checkbox"]:checked {
  background-color: #2c3e50;
}

button {
  background-color: transparent;
  border: 1px solid #2c3e50;
  cursor: pointer;
  font-size: 14px;
  padding-bottom: 9px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 9px;
  transition: 0.3s;
}

button:hover {
  border-color: #42b983;
}
</style>
