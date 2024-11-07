<template>
  <form name="content-form" @submit.prevent="">
    <h3>+ New Image</h3>
    <div class="form-input">
      <h3>Title</h3>
      <input id="title" type="title" name="title" />
    </div>
    <div class="form-input">
      <h3>Image: </h3>
      <input id="image" type="file" name="image" class="custom-file-input" accept="image/*" @change="onImage($event)"/>
    </div>
    <button type="submit" :disabled="finished || loading" @click="upload">
      <template v-if="loading">loading... please wait</template>
      <template v-else-if="finished">done ✔</template>
      <template v-else>create</template>
    </button>

    <button v-if="finished" @click="goToNewImage()">
      done! 🎉 click here to see...
    </button>

    <div v-if="message" class="message">{{ message }}</div>
    <img :src="imagePreview" />
  </form>

  <LoginWorldId v-if="showLogin" @close="showLogin = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LoginWorldId from '../../components/LoginWorldId.vue';

const finished = ref();
const loading = ref();
const showLogin = ref();
const message = ref();
const imagePreview = ref();
const createdId = ref();

function onImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const base64Image = e.target.result;
      imagePreview.value = base64Image;
      localStorage.setItem('image', base64Image);
    };
    reader.readAsDataURL(file);
  }
}

function goToNewImage() {
  location.href = `/show?id=${createdId.value}`;
}

function verifyUserIsConnected() {
  return localStorage.getItem('worldUser');
}

async function upload() {
  if (!verifyUserIsConnected()) {
    showLogin.value = true;
    return;
  }

  loading.value = true;

  const user = JSON.parse(localStorage.getItem('worldUser'));
  const title = document.querySelector('#title').value;
  const base64Image = imagePreview.value;
  if (!(title?.length > 2 && user?.nullifier_hash && base64Image)) {
    message.value = 'please, fill all the fields';
    return;
  }

  const response = await fetch('/api/upload-image', {
    method: 'post',
    body: JSON.stringify({ title, base64Image, user }),
    headers: {
      'content-type': 'application/json'
    },
  });
  const data = await response.json();
  console.log(data);
  if (response.status == 200) {
    finished.value = true;
    loading.value = false;
    createdId.value = data.reg.id;
  } else {
    loading.value = false;
    message.value = data.message;
    setTimeout(() => {
      message.value = '';
    }, 5000);
  }
}

</script>

<style scoped>
h3 {
  text-transform: uppercase;
  font-weight: 300;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  font-size: 14px;
  font-family: 'Poppins',sans-serif;
  margin: 0 6px;
}
input {
  padding: 10px;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background: white;
  border: 1px solid black;
  color: black;
}
form {
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
}
button {
  color: black;
  border: 2px solid black;
  background: beige;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
}
select {
  padding: 10px;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background: black;
  border: 1px solid white;
  border-radius: 6px;
  color: white;
}
img {
  margin-top: 10px;
}
.form-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.form-input h3 {
  width: 100px;
  text-align: right;
}
.form-input input,select {
  width: 100%;
}
button:disabled {
  color: rgba(255, 255, 255, 0.4);
  background: #ccc;
  border: none;
  cursor: not-allowed;
}
.message {
  color: red;
}
</style>
