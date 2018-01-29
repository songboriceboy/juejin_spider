<template>
  <div id="app">
    <nav-bar/>
    <br>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../src/components/navbar/navbar'
export default {
  components: { NavBar },
  name: 'App'
}
</script>

<style>

</style>
