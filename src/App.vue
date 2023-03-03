<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
