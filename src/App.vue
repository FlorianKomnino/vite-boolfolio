<script>
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<template>
  <main>
    <MainComponent />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
