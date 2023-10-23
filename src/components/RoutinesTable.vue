<template>
  <div>
    <input v-model="routine.startAt" type="text" data-testid="start-date" />
    <input v-model="routine.endAt" type="text" data-testid="end-date" />
    <input v-model="routine.title" type="text" data-testid="routine" />
    <button data-testid="store-routine" @click="emitNewRoutine"></button>

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
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import type {Routine} from "@/model/types";

export default defineComponent({
  name: "RoutinesTable",
  props: {
    routines: {
      type: Array
    }
  },
  emits: ['newRoutine'],
  setup(props, {emit}) {
    let routine: Routine = {
      startAt: "",
      endAt: "",
      title: ""
    }
    const emitNewRoutine = () => {
      emit('newRoutine',
          { 'start-date': routine.startAt,
            'end-date': routine.endAt,
            'title': routine.title,
          })
      console.log(routine)
    }
    return{
      emitNewRoutine,routine
    }
  }
})
</script>

<style>

</style>