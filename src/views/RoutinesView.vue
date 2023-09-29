<template>
  <RoutinesHeader msg="Morning Routines"/>
  <routines-table :routines="routines"/>
</template>

<script>
import RoutinesTable from "@/components/RoutinesTable.vue";
import RoutinesHeader from "@/components/RoutinesHeader.vue";
import {computed, ref} from "vue";
import { InMemoryRoutineManager} from "@/functions/in-memory-routine-manager";
export default {
  name: "RoutinesView",
  components: {RoutinesHeader, RoutinesTable},
  setup: function () {

    // const routines = computed(() => {
    //
    // })ref(InMemoryRoutineManager.getRoutines());

    const routines = ref([
          {startAt: '07:00', endAt: '08:00', title: 'Wake Up'},
          {startAt: '08:00', endAt: '09:00', title: 'Reading'},
          ]
    );
    return{
      routines
    }
  }
}
</script>

<style scoped>

</style>