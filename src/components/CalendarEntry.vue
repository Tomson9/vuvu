
<template>
    <div class="calendar-entry">
        <p>{{ msg }}</p>
      <form @submit.prevent="add">
        <div>
          <input type="text" v-model="userEvent" id="" placeholder="Entrez un évenement">
        </div>
        <div class="flex">
          <label for="">Jour de l'évenement: <strong>{{ activeDayTitle }}</strong></label>
        </div>
        <div>
          <button type="submit" class="submit-btn">Soumettre</button>
        </div>
      </form>

    </div>
</template>

<script setup>
import store from '@/store';
import { computed, ref } from 'vue';

const userEvent = ref('');
const msg = ref('');

//Pour prendre les infos (le titre) concernant le jour sur lequl l'utilisateur a cliqué
const activeDayTitle = computed(() => {
  return store.getActiveDay().fullTitle;
})

function add() {
    if(userEvent.value!= '') {
        store.submitEvent(userEvent.value);
        userEvent.value = '';
        msg.value = '';
    }else {
        msg.value = 'Vous devez saisir un évenement';
    }
}

</script>

<style scoped>
.calendar-entry {
  margin: 30px;
  padding: 15px;
  border: 2px solid green;
  border-radius: 5px;
  background-color: #fff;
}
input[type=text], select {
  height: 35px;
  width: 200px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid grey;
}
select {
  width: 100px;
  margin-inline: 20px;
}
.submit-btn {
  padding: 5px;
  margin: 15px;
}


</style>