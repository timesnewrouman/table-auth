<template>
  <div class="login">
    <button @click="login" ref="loginButton" class="button-login">Login</button>
    <span ref="login" class="login__text"></span>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$parent.$children[3].$refs.popupLogin.style.display = "flex";
    },
  },
};
</script>

<style>
.button-login {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 70px;
  height: 25px;
  cursor: pointer;
  background: lightgray;
}

.login__text {
  position: absolute;
  top: 50px;
  right: 20px;
  font-weight: 700;
}
</style>