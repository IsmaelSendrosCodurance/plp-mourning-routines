<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>Start At</th>
        <th>End At</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="routine in routines" :key="routine.title">
      <th>{{routine.startAt}}</th>
      <th>{{routine.endAt}}</th>
      <th>{{routine.title}}</th>
    </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
export default {
  name: "RoutinesTable",
  props: {
    routines: {
      type: Array
    }
  }
}
</script>

<style>

</style>