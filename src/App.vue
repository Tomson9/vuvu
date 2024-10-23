<script setup>

import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

</script>


<template>
  <div class="main-container">
    <h1>Calendar App</h1>

    <CalendarWeek/>
    <CalendarEntry/>

  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}


</style>