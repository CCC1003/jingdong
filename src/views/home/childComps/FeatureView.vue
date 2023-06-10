  <template>
<div class="feature">
  <a href="javascript:;" class="feat-img"><img src="~assets/img/home/feature/1.png" alt=""></a>
  <a href="javascript:;" class="feat-img"><img src="~assets/img/home/feature/2.png" alt=""></a>
  <a href="javascript:;" class="feat-img"><img src="~assets/img/home/feature/3.png" alt=""></a>
</div>
</template>

<script>
export default {
name: 'FeatureView'
}
</script>

<style>
  .feature {
    width: 100%;
    background: #fff;
    overflow: hidden;
    margin-top: 47px;
  }
  .feat-img img{
    display: block;
    width: 33.33%;
    float: left;
    height: 6rem;
    overflow: hidden;
  }

</style>