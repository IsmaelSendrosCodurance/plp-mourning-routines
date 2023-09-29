<script setup lang="ts">

import HelloWorld from "@/components/RoutinesHeader.vue";
import RoutinesTable from "@/components/RoutinesTable.vue";
import RoutinesView from "@/views/RoutinesView.vue";
</script>

<template>
  <v-container class="main-layout pa-6">
    <v-row>
      <RoutinesView class="d-md-block pa-2"/>
    </v-row>
  </v-container>
</template>