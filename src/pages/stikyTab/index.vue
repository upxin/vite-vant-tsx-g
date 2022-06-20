<template>
  <div style="height: 20px">哈哈哈</div>
  <Tabs v-model:active="active" sticky offset-top="20">
    <Tab title="pingg">
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
      <h1>您能</h1>
    </Tab>
    <Tab title="选项2">
      <h1>您能</h1>
    </Tab>
    <Tab title="选项3">
      <h1>您能</h1>
    </Tab>
  </Tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Tab, Tabs } from 'vant';

const active = ref(0);
</script>
