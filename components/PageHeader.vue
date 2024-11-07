<template>
  <div class="hcontainer">
    <header class="header">
      <a href="/"><h1>Hand Drawn Gallery</h1></a>
      <a href="/create" title="new image">
        <span>+</span>
        <img src="../assets/image-add.svg" />
      </a>
    </header>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.hcontainer {
  width: 100%;
  border-bottom: 3px solid #000;
  position: fixed;
  background: white;
}
.header {
  display: flex;
  max-width: 1024px;
  justify-content: space-between;
  margin: auto;
  font: 14px 'Poppins', sans-serif;
  align-items: center;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin: auto 0;
  display: flex;
}
span {
  font-size: 24px;
  padding-top: 2px;
  margin-right: -2px;
}
</style>
