<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  // computed: {
  //     userName() {
  //         return this.firstName + ' ' + this.lastName;
  //     },
  // },
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    console.log(context);

    onBeforeMount(() => {
      console.log('Before Mount');
    });

    onMounted(() => {
      console.log('Mounted');
    });

    onBeforeUpdate(() => {
      console.log('Before Update');
    });

    onUpdated(() => {
      console.log('Updated');
    });

    onBeforeUnmount(() => {
      console.log('Before Unmount');
    });

    onUnmounted(() => {
      console.log('Unmounted');
    });

    

    return { userName: uName, age };
  },
};
</script>
