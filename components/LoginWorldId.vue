<template>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import '@worldcoin/idkit-standalone';

const emit = defineEmits(['close']);

const loading = ref();
const message = ref();

function close() {
  emit('close');
}

IDKit.init({
  signal: 'test_signal',
  app_id: 'app_staging_3a8ea71626c80a78feaab045247b8e59',
  action: 'test-action',
  action_description: 'Test action description',
  handleVerify: response => {
    // verify the IDKIt proof, throw an error to show the error screen
    console.log('handleVerify', response);
  },
  onSuccess: response => {
    console.log('onSuccess', response);
    localStorage.setItem('worldUser', JSON.stringify(response));
  },
});

onMounted(() => {
  setTimeout(async () => {
    console.log(IDKit.isInitialized);
    let interval = setInterval(async () => {
      if (!document.querySelector('#idkit-widget')) {
        await IDKit.reset();
        close();
        clearInterval(interval);
      }
    }, 300);
    await IDKit.open();
  }, 100);
});
</script>
