<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  #app > div {
    height: 100%;
  }
</style>
