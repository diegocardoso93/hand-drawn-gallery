<template>
  <div class="fcontainer">
    <footer>
      <h1>
        Real human posts verified by
        <a href="https://world.org/world-id/" target="_blank">World ID</a>
        <br/>
        Hand drawn images validated by 
        <a href="https://deepmind.google/technologies/gemini/flash/" target="_blank">Gemini 1.5 Flash</a>
      </h1>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.fcontainer {
  width: 100%;
  border-top: 3px solid #000;
  position: fixed;
  bottom: 0;
  background: white;
  text-align: center;
}
footer {
  width: 100%;
}
a {
  cursor: pointer;
  color: black;
  margin: auto 0;
  text-decoration: underline;
  display: inline;
}
h1 {
  font: 13px 'Poppins', sans-serif;
}
span {
  font-size: 24px;
  padding-top: 2px;
  margin-right: -2px;
}
</style>
