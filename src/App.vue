<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu'

export default {
  components: {
    AppMenu
  } 
}
</script>

<style>
.container {
  padding-top: 50px;
}

</style>

