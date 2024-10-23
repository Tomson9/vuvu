<script setup>
import { computed } from 'vue';

const props = defineProps({
    events: Object
})


  
const getEventBackgroundColor = computed(() => {
    const colors = ['#FF9999', '#85D6FF', '#99FF99'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `background-color: ${randomColor}`;
}) 
</script>

<template>
  <div class="event-container">
    <div class="event" :style="getEventBackgroundColor">
      <p>{{ events.details }}</p>
      
      <div class="action-btn">
        <button class="edite">✏</button>
        <button class="trash">🗑</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event {
  margin-inline: 10px;
  margin-block: 8px;
  /* padding-block: 1px; */
  text-align: center;
  border-radius: 5px;
}
.edite, .trash {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  width: 20px;
  border: none;
}
.action-btn {
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  padding-block: 5px;
}
/* .edite{
  background-color: burlywood;

}
.trash {
  background-color: rgb(226, 68, 10);
} */

</style>