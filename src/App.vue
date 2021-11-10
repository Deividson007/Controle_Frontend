<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap/dist/js/bootstrap.bundle.min.js";

    export default {
        name: "app"
    }
</script>

<style src="@/assets/css/modern-dark.css" id="dark-style"></style>
<style src="@/assets/css/modern.css" id="light-style"></style>
