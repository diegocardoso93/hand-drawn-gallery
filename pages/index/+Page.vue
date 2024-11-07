<template>
  <div class="container">
    <div class="list">
      <div v-for="(item) of items" :key="item.id" class="card" @click="goToImage(item.id)">
        <div class="card-img" :style="`background-image: url('${item.url}');`"></div>
        <div class="card-info">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vike-vue/useData';
import { Data } from './+data';

const { items } = useData<Data>();
console.log(items);

function goToImage(id) {
  location.href = `/show?id=${id}`;
}
</script>

<style scoped>
.card {
  border: 1px solid #000;
  color: white;
  padding: 10px;
  flex: 0 1 calc(33.33% - 10px);
  box-sizing: border-box;
  margin-top: 10px;
  cursor: pointer;
  background: beige;
}
.card-img {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  border: 1px solid rgb(235, 236, 239);
  background-color: rgb(2 2 2);
}
.card-info {
  width: 100%;
  color: black;
}
.card-info h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  max-width: 308px;
  font-size: 16px;
  margin: 10px 0 0 0;
  height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
  text-overflow: ellipsis;
}
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
}
.list {
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
</style>
