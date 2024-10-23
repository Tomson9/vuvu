<script setup>
import { computed } from 'vue';
import CalendarEvent from './CalendarEvent.vue';
import store from '@/store';

const props = defineProps ({
    day: Object
})

function setDay(id) {
    store.setActiveDay(id);
    console.log(id);
}

</script>



<template>
    <div class="calendar-day" @click="setDay(day.id)">
        <div class="day-header">
          <h2>{{ day.shortTitle }}</h2>
        </div>
        <div class="calendar-body">
          <p>{{ day.id }}</p>
        </div>

        <!-- Calendar day components -->
        <CalendarEvent  v-for="event in day.events" 
        :events="event"
        :key="event.id"/>
      </div>
</template>

<style scoped>

.day-header {
  background-color: rgba(25, 21, 21, 0.834);
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.calendar-day {
  max-width: 350px;
  min-width: 205px;
  min-height: 300px;
  overflow-y: auto;
  border-left: 2px solid rgb(124, 125, 124);
  background-color: rgba(65, 62, 62, 0.834);


}


</style>