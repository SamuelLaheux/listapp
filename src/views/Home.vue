<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="5%" height="5%" />
    <HelloWorld msg="List App" />
    <BaseCheckbox value="Item 1" />

    <input type="number" step="1" v-model="nb" placeholder="Number of items" />
    <ul>
      <li v-for="index in nbl" :key="index">
        <b>{{ index }}</b>
        <input type="checkbox" id="index" v-model="checkedList[index]" />
        <input v-model="messageList[index]" placeholder="edit me" />
      </li>
    </ul>
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
  },
  data() {
    return {
      nb: 2,
      checkedList: [false, false],
      messageList: ['First', '']
    }
  },
  computed: {
    nbl: function () {
      return Array.from(Array(parseInt(this.nb)).keys())
    }
  }
}
</script>
