<template>
  <HeaderComponent></HeaderComponent>
  <router-view/>
  <FooterComponent></FooterComponent>
</template>

<script>

import HeaderComponent from '@/components/static/HeaderComponent.vue'
import FooterComponent from '@/components/static/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
}
}

</script>
