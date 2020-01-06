<template>
  <div id="appl">
    <shopIndex/>
  </div>
</template>

<script>
import shopIndex from '@/components/shop/index'

export default {
  name: 'App',
  components:{shopIndex}, //注册组件,template标签里就可以直接使用此表签<shopIndex/>
}
</script>

<style>

</style>
