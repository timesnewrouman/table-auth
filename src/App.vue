<template>
  <div id="app">
    <vTable :students_data="STUDENTS" />
    <popupAdd @new-row="newRow" />
    <popupEdit @edited-row="editedRow" />
    <popupLogin @login="login" />
    <login />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/table/v-table";
import popupAdd from "./components/popup/popup-add";
import popupEdit from "./components/popup/popup-edit";
import popupLogin from "./components/popup/popup-login";
import login from "./components/auth/login";

export default {
  name: "app",
  components: { vTable, popupAdd, popupEdit, popupLogin, login },
  data: () => {
    return {};
  },
  methods: {
    ...mapActions(["GET_STUDENTS_FROM_API"]),
    ...mapActions(["GET_USERS_FROM_API"]),
    newRow(data) {
      data.id =
        data.points_earned +
        data.points_spent +
        Math.floor(Math.random() * 1000) +
        1;
      this.STUDENTS.unshift(data);
      this.$children[1].$refs.popupAdd.style.display = "none";
      this.$children[1].$refs.formAdd.reset();
    },
    editedRow() {
      const formEdit = this.$children[2].$refs.formEdit;
      const row = this.STUDENTS.find(
        (item) => item.id == formEdit.elements.id.value
      );
      row.name = formEdit.elements.name.value;
      row.points_earned = formEdit.elements.points_earned.value;
      row.points_spent = formEdit.elements.points_spent.value;
      row.registration_date = formEdit.elements.date.value;
      this.$children[2].$refs.popupEdit.style.display = "none";
      this.$children[2].$refs.formEdit.reset();
    },
    login() {
      const formLogin = this.$children[3].$refs.formLogin;
      //? нужно получить this.USERS (массив пользователей)
      console.log(this.USERS);
      console.log(this.STUDENTS);
      //  console.log(
      //    this.USERS.find((user) => user.login == formLogin.elements.name.value)
      //  );
      this.$children[4].$refs.loginButton.textContent = "Logout";
      this.$children[4].$refs.login.textContent = `Logged in as ${formLogin.elements.name.value}`;
      this.$children[3].$refs.popupLogin.style.display = "none";
      this.$children[3].$refs.formLogin.reset();
    },
  },
  computed: {
    ...mapGetters(["STUDENTS"]),
    ...mapGetters(["USERS"]),
  },
  mounted() {
    this.GET_STUDENTS_FROM_API();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
