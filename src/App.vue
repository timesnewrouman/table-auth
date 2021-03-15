<template>
  <div id="app">
    <vTable :users_data="USERS" />
    <popupAdd @new-row="newRow" />
    <popupEdit @edited-row="editedRow" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/table/v-table";
import popupAdd from "./components/popup/popup-add";
import popupEdit from "./components/popup/popup-edit";

export default {
  name: "app",
  components: { vTable, popupAdd, popupEdit },
  data: () => {
    return {};
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
    newRow(data) {
      data.id =
        data.points_earned +
        data.points_spent +
        Math.floor(Math.random() * 1000) +
        1;
      this.USERS.unshift(data);
      this.$children[1].$refs.popupAdd.style.display = "none";
      this.$children[1].$refs.formAdd.reset();
    },
    editedRow() {
      const formEdit = this.$children[2].$refs.formEdit;
      const row = this.USERS.find(
        (item) => item.id == formEdit.elements.id.value
      );
      row.name = formEdit.elements.name.value;
      row.points_earned = formEdit.elements.points_earned.value;
      row.points_spent = formEdit.elements.points_spent.value;
      row.registration_date = formEdit.elements.date.value;
      this.$children[2].$refs.popupEdit.style.display = "none";
      this.$children[2].$refs.formEdit.reset();
    },
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
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
