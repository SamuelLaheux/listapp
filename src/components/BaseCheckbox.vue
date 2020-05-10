<template>
  <div>
    <input type="checkbox" id="jack" value="value" v-model="checkedNames" />
    <label for="value">{{ value }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseCheckbox extends Vue {
  @Prop({ type: String }) private value!: string
  @Prop({ type: String }) private checkedNames: string[] = []
}
</script>
