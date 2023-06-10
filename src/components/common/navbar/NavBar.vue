  <template>
<div class="nav-bar">
  <div class="nav-left"><slot name="nav-left"></slot></div>
  <div class="nav-center"><slot name="nav-center"></slot></div>
  <div class="nav-right"><slot name="nav-right"></slot></div>
</div>
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 15;
  }
  .nav-bar div {
    line-height: 44px;
    text-align: center;
  }
</style>