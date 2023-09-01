<script setup lang="ts">

import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Mourning Routines" />
    </div>
      <RouterView />
  </header>
</template>