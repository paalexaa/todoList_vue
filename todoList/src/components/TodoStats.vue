<script setup>
    defineProps({
    total: Number,
    completed: Number,
    pending: Number
    });
</script>

<template>
  <div class="stats">
    <div class="stat">
      <span>Total: </span>
      <span>{{ total }}</span>
    </div>

    <div class="stat">
      <span>Done: </span>
      <span>{{ completed }}</span>
    </div>

    <div class="stat">
      <span>Pending: </span>
      <span>{{ pending }}</span>
    </div>
  </div>
</template>
