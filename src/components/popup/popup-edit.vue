<template>
  <div ref="popupEdit" class="popup-edit">
    <div class="popup-edit__content">
      <img
        @click="close"
        class="popup-edit__close"
        src="../../images/close.svg"
        alt="Иконка выхода"
      />
      <h3 class="popup-edit__header">Изменение строки</h3>
      <form
        class="popup-edit__form"
        ref="formEdit"
        name="edit"
        @submit.prevent="submit"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input
          type="number"
          name="points_earned"
          placeholder="Points Earned"
          required
        />
        <input
          type="number"
          name="points_spent"
          placeholder="Points Spent"
          required
        />
        <input type="date" name="date" placeholder="Date" required />
        <input class="input-id" type="text" name="id" value="id" readonly />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-edit",
  data() {
    return {};
  },
  computed: {},
  methods: {
    close() {
      this.$refs.popupEdit.style.display = "none";
      this.$refs.formEdit.reset();
    },
    submit() {
      const formEdit = this.$refs.formEdit;
      const editedRow = {
        name: formEdit.elements.name.value,
        points_earned: formEdit.elements.points_earned.value,
        points_spent: formEdit.elements.points_spent.value,
        registration_date: formEdit.elements.date.value,
      };
      this.$emit("edited-row", editedRow);
    },
  },
};
</script>

<style>
.popup-edit {
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

.popup-edit__content {
  padding: 30px;
  background-color: white;
  position: relative;
  border-radius: 10px;
}

.popup-edit__close {
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
}

.popup-edit__header {
  margin: 0;
  font-size: 24px;
  color: black;
}

.popup-edit__form {
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
}

.input-id {
  background-color: lightslategray;
}
</style>