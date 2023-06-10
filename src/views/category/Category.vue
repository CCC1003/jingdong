<template>
  <div id="Category">
    <cate-navbar></cate-navbar>
    <cate-gory-body></cate-gory-body>
  </div>
</template>

<script>
import CateNavbar from './childComp/CateNavbar.vue'
import CateGoryBody from './childComp/CateGoryBody.vue';


export default {
  name: 'Category',
  components: {
    CateNavbar,
    CateGoryBody,
  }
}
</script>

<style scoped>
.content {
  height: 607px;
}
</style>