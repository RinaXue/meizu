<template>
  <nav class="navigation">
    <ul>
      <router-link to="/home" tag="li">
        <span></span>
        <p>推荐</p>
      </router-link>
      <router-link  to="/details" tag="li">
        <span></span>
        <p>分类</p>
      </router-link>
      <router-link  to="/list" tag="li">
        <span></span>
        <p>详情</p>
      </router-link>
      <router-link  to="/cart" tag="li">
        <span></span>
        <p>购物车</p>
      </router-link>
      <router-link  to="/personal" tag="li">
        <span></span>
        <p>我的</p>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>
