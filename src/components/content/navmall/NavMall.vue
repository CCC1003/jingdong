  <template>
<div class="nav-mall">
  <slot></slot>
</div>
</template>

<script>
export default {
    name: "NavMall",
}
</script>

<style scoped>
    .nav-mall {
    background-color: #f6f6f6;
    width: 100%;
    overflow: auto;
    position: relative;
    min-height: 8.1rem;
  }
</style>