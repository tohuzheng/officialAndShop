<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import shopIndex from '@/components/shop/index'

export default {
  name: 'App' //注册组件,template标签里就可以直接使用此表签<shopIndex/>
}
</script>

<style>

</style>
