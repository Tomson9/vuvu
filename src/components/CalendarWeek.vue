
<template>
    <div class="calendar-week-container">
        <CalendarDay  v-for="day in store.state.data" 
        :key="day.number" 
        :day="day"
        />
    </div>

</template>

<script setup>
import CalendarDay from './CalendarDay.vue';
import store from '../store'
import { onMounted } from 'vue';

onMounted(() => {
    console.log(store.state);
    
})


</script>

<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar-week-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>

