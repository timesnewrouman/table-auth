<template>
  <div class="v-table-row">
    <div class="row row-name">{{ row_data.name }}</div>
    <div class="row row-earned">{{ row_data.points_earned }}</div>
    <div class="row row-spent">{{ row_data.points_spent }}</div>
    <div class="row row-date">{{ row_data.registration_date }}</div>
    <button
      class="row-edit"
      @click="$emit('edit-row', row_data)"
    ></button>
    <button
      class="row-delete"
      @click="$emit('remove-row', row_data.id)"
    ></button>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
}

.row {
  flex-basis: 23%;
  text-align: left;
  padding: 8px 10px 8px 0;
}

.row-edit {
  background-image: url(../../assets/edit.png);
  background-color: white;
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  margin: auto;
  cursor: pointer;
}

.row-delete {
  background-image: url(../../assets/delete-icon.png);
  background-color: white;
  width: 24px;
  height: 24px;
  border: 0;
  padding: 0;
  margin: auto;
  cursor: pointer;
}
</style>