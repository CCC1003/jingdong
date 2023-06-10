  <template>
 <a href="javascript:;" class="box-item">
    <slot name="item-image"></slot>
    <slot name="item-title"></slot>
  </a>
</template>

<script>
export default {
  name: 'NavMallItem'
}
</script>

<style scoped>
.box-item {
    width: 20%;
    text-align: center;
    display: block; 
    float: left;
}
</style>