<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import bscroll from 'better-scroll';
export default {
  name: 'Scroll',
  props:{
    probeType: {
      type:Number,
      default:0
    }
  },
  data() {
    return {
      scroll:null,
    }
  }
  ,
  mounted() {
    this.scroll = new bscroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
    })
  },
}
</script>

<style>
</style>