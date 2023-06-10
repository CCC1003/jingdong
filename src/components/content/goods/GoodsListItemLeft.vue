<template>
  <div class="feeds_col">
    <slot name="goods_left"></slot>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItemLeft'
}
</script>

<style scoped> 
.feeds_col {
  padding: 0.31rem;   
}

</style>