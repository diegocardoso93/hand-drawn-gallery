<template>
  <PageHeader />
  <section class="content">
    <slot />
  </section>
  <PageFooter />
</template>

<script lang="ts" setup>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
</script>

<style>
body {
  margin: 0;
  background: white;
  -webkit-font-smoothing: antialised;
  overflow: hidden auto;
  color: black;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.content {
  padding-top: 100px;
  margin-bottom: 100px;
}
</style>
