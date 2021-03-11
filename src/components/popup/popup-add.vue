<template>
  <div class="popup-add">
    <div class="popup-add__content">
      <img
        @click="close"
        class="popup-add__close"
        src="../../images/close.svg"
        alt="Иконка выхода"
      />
      <h3 class="popup-add__header">Добавление строки</h3>
      <form class="popup-add__form" name="add" @submit.prevent="submit">
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
        <input type="date" name="date" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-add",
  data() {
    return {};
  },
  computed: {},
  methods: {
    open() {
      document.querySelector(".popup-add").style.display = "flex";
    },
    close() {
      document.querySelector(".popup-add").style.display = "none";
      document.forms.add.reset();
    },
    submit() {
      const formAdd = document.forms.add;
      const newRow = {
        name: formAdd.elements.name.value,
        points_earned: formAdd.elements.points_earned.value,
        points_spent: formAdd.elements.points_spent.value,
        registration_date: formAdd.elements.date.value,
      };
      this.$emit("new-row", newRow);
    },
  },
};
</script>

<style>
.popup-add {
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

.popup-add__content {
  padding: 30px;
  background-color: white;
  position: relative;
  border-radius: 10px;
}

.popup-add__close {
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
}

.popup-add__header {
  margin: 0;
  font-size: 24px;
  color: black;
}

.popup-add__form {
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
}
</style>