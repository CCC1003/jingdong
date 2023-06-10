  <template>
<div class="page">
  <user-navbar></user-navbar>
  <user-form></user-form>
</div>
</template>

<script>
import UserNavbar from './childComp/UserNavbar.vue';
import UserForm from './childComp/UserForm.vue';
export default {
name: 'User',
components:{
  UserNavbar,
  UserForm
}
}
</script>

<style scoped>
  .page {
    text-align: left;
    background: #fff;
    padding: 0 1.57rem 1.57rem;
}
</style>