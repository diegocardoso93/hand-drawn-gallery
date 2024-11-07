<template>
  <div class="container">
    <img :src="data.url" />
    <div class="title">
      <h3>Title:</h3>
      <div>{{ data.title }}</div>
    </div>
    <div class="title small">
      <h3>owner "nullifier_hash":</h3>
      <div>{{ data.user.nullifier_hash }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vike-vue/useData';
import { Data } from './+data';

const data = useData<Data>();
console.log(data);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 30px auto;
}
.title {
  display: flex;
  font-family: 'Poppins', sans-serif;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  padding: 0 20px;
}
.title h3 {
  margin: 0 6px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
}
.title.small {
  font-size: 12px;
  color: #999;
  width: 100%;
}
.title.small div {
  word-wrap: break-word;
  width: calc(100% - 160px);
}
img {
  max-width: 100%;
  padding: 0 20px;
}
</style>
