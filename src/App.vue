<template>
  <div id="app">
    <!-- 使用命名视图 -->
    <!-- <v-head></v-head> -->
    <router-view name="head"></router-view>
    <router-view name="navigation"></router-view>
    <router-view />
    <router-view name="foot"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
