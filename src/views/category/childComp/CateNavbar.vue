  <template>
<div>
  <div>
    <nav-bar class="nav-bar">
      <a href="/home" slot="nav-left" class="msCancelBtn"><span></span></a>
      <form class="jd-header-search-form" slot="nav-center">
        <div class="msSearchBox">
          <i id="search-input-left-icon"></i>
          <div class="jd-header-search-input">
            <input type="text" placeholder="云南白药牙膏" id="msKeyWord" maxlength="20" cleardefault="no" autocomplete="off">
            <div class="head-input-icon">
            </div>
          </div>
        </div>
      </form>
    </nav-bar>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
name: 'CateNavbar',
components:{
  NavBar
}
}
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
  }
  .msCancelBtn {
    display: block;
    z-index: 120;
    position: absolute;
    width: 40px;
    height: 44px;
  }
  
  .msCancelBtn span {
    margin: 14px 0 0 15px;
    width: 20px;
    height: 18px;
    display: block;
    background: url(../../../assets/img/category/back.png) no-repeat;
    background-size: 100% 100%;
  }
  .msSearchBox {
    margin-top: 7px;
    height: 30px;
    position: relative;
    margin-right: 32px;
  
  }
  
  .jd-header-search-form {
    margin: 0 20px 0 50px;
  }
  
  #search-input-left-jd {
    display: block;
    width: 20px;
    height: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=) no-repeat;
    background-size: 20px 15px;
    margin: 8px 8px 0 15px;
    position: relative;
    z-index: 1;
    float: left;
  }
  
  #search-input-left-jd:after {
    content: "";
    position: absolute;
    border-right: 1px solid #ddd;
    top: 0;
    left: 26px;
    height: 16px;
  }
  
  #search-input-left-icon {
    margin-left: 5px;
    display: block;
    width: 18px;
    height: 15px;
    background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=) no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin: 8px 0 0 5px;
    position: relative;
    z-index: 1;
    float: left;
  }
  .jd-header-search-input {
    padding-left: 68px;
    display: inline-block;
      width: 17rem;
      border: none;
      border-radius: 15px;
      height: 30px;
      overflow: hidden;
      background: #f7f7f7;
      font-size: 12px;
      -webkit-box-align: center;
      line-height: 30px;
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 35px;
      padding-right: 10px;
      box-sizing: border-box;
  }
  #msKeyWord {
      border: 0;
      outline: none;
      background: 0 0;
      font-size: 12px;
      color: #232326;
      width: 130px;
      box-sizing: border-box;
      -webkit-box-flex: 1;
      height: auto;
      margin: 0;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 16px;
      position: relative;
      left: -30px;
      top: -7px;
  }
  .head-input-icon {
    position: absolute;
      height: 24px;
      line-height: 24px;
      display: inline-block;
      font-size: 0;
      top: 3px;
      left: 40px;
      background-color: #fff;
  }
  #msShortcutLogin {
    z-index: 120;
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 44px;
  }
  #msShortcutLogin span {
    display: inline-block;
      color: #fff;
      font-size: 14px;
      font-family: PingHei,Lucida Grande,Lucida Sans Unicode,STHeiti,Helvetica,Arial,Verdana,"sans-serif";
  }
  
</style>