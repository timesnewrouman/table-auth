<template>
  <div ref="popupLogin" class="popup-login">
    <div class="popup-login__content">
      <img
        @click="close"
        class="popup-login__close"
        src="../../images/close.svg"
        alt="Иконка выхода"
      />
      <h3 class="popup-login__header">Авторизация в системе</h3>
      <form
        class="popup-login__form"
        ref="formLogin"
        name="login"
        @submit.prevent="submit"
      >
        <input type="text" name="name" placeholder="login" required />
        <input type="text" name="password" placeholder="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-login",
  data() {
    return {};
  },
  computed: {},
  methods: {
    close() {
      this.$refs.popupLogin.style.display = "none";
      this.$refs.formLogin.reset();
    },
    submit() {
      const formAdd = this.$refs.formLogin;
      const data = {
        name: formAdd.elements.name.value,
        password: formAdd.elements.password.value,
      };
      this.$emit("login", data);
    },
  },
};
</script>

<style>
.popup-login {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: none;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
}

.popup-login__content {
  padding: 30px;
  background-color: white;
  position: relative;
  border-radius: 10px;
}

.popup-login__close {
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
}

.popup-login__header {
  margin: 0;
  font-size: 24px;
  color: black;
}

.popup-login__form {
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
}
</style>