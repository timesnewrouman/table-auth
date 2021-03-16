<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">
        Name
        <img src="../../images/unfold_more.png" alt="Значок сортировки" />
      </p>
      <p @click="sortByPointsEarned">
        Points Earned
        <img src="../../images/unfold_more.png" alt="Значок сортировки" />
      </p>
      <p @click="sortByPointsSpent">
        Points Spent
        <img src="../../images/unfold_more.png" alt="Значок сортировки" />
      </p>
      <p @click="sortByDate">
        Registration date
        <img src="../../images/unfold_more.png" alt="Значок сортировки" />
      </p>
      <button @click="showAddPopup" class="button-add"></button>
    </div>
    <div class="v-table__body">
      <vTableRow
        v-for="row in paginatedUsers"
        :key="row.id"
        :row_data="row"
        @edit-row="editRow"
        @remove-row="removeRow"
      />
    </div>
    <div class="v-table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";

export default {
  name: "v-table",
  components: {
    vTableRow,
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      usersPerPage: 20,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.users_data.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByPointsEarned() {
      this.users_data.sort((a, b) => a.points_earned - b.points_earned);
    },
    sortByPointsSpent() {
      this.users_data.sort((a, b) => a.points_spent - b.points_spent);
    },
    sortByDate() {
      this.users_data.sort((a, b) =>
        a.registration_date.localeCompare(b.registration_date)
      );
    },
    removeRow(id) {
      this.users_data = this.users_data.filter((x) => x.id !== id);
    },
    editRow(data) {
      const formEdit = this.$parent.$children[2].$refs.formEdit;
      formEdit.elements.id.value = data.id;
      formEdit.elements.name.value = data.name;
      formEdit.elements.points_earned.value = data.points_earned;
      formEdit.elements.points_spent.value = data.points_spent;
      formEdit.elements.date.value = data.registration_date;
      this.$parent.$children[2].$refs.popupEdit.style.display = "flex";
    },
    showAddPopup() {
      this.$parent.$children[1].$refs.popupAdd.style.display = "flex";
    },
  },
};
</script>

<style>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}

.v-table__header {
  display: flex;
  font-weight: 600;
  justify-content: flex-start;
  border-bottom: 1px solid #e7e7e7;
}

.v-table__header p {
  display: flex;
  align-items: center;
  text-align: left;
  flex-basis: 24%;
  cursor: pointer;
}
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page {
  padding: 8px;
  border: 1px solid #e7e7e7;
  margin-right: 10px;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #fff;
}
.page__selected {
  background: #aeaeae;
  cursor: pointer;
  color: #fff;
}
.button-add {
  background-image: url(../../images/add.png);
  background-color: white;
  width: 36px;
  height: 36px;
  border: solid 1px black;
  padding: 0;
  margin: auto 0 auto auto;
  cursor: pointer;
}
</style>