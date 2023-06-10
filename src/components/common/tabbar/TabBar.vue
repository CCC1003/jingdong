  <template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
name: 'TabBar'
}
</script>

<style>
  #tab-bar {
  display: flex;
  background-color: rgb(255, 255, 255);;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);
}
</style>