<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="5%" height="5%" />
    <HelloWorld msg="List App" />
    <BaseCheckbox value="Item 1" />
  </div>
</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox.vue'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    BaseCheckbox
  }
}
</script>
