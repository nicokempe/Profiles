<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WelcomeMessage msg="Welcome!"/>
  </div>
</template>

<script>
import WelcomeMessage from '@/components/WelcomeMessage.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeMessage
  }
}
</script>
