<script>
import MainComponent from './components/MainComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <MainComponent />
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
