<template>
  <div>
    <p class="input-container">
      <label for="" class="area-box">
        <span class="area_code">+86</span>
        <i class="area_icon"></i>
      </label>
      <input type="text" placeholder="请输入手机号" class="acc-input-1"> 
    </p>
    <p class="input-container">
      <input type="tel" placeholder="请输入收到的验证码" autocomplete="off" class="acc-input-2">
      <i class="icon-clear"></i>
      <button class="text-btn" timertext="获取验证码">获取验证码</button>
    </p>
    <a href="javascript:;" class="btn J_ping">登录</a>
    <p class="quick-btn">
      <span class="planBLogin">账号密码登录</span>
      <span class="quickReg">手机快速注册</span>
    </p>
  <div class="quick-login">
    <h4 class="txt-otherLogin">其他登录方式</h4>
    <p class="quick-type">
      <a href="javascript:;" class="icon-qq"></a>
    </p>
  </div>
  <p class="policy_tip">
    <input type="checkbox" name="" id="" class="policy_tip-checkbox">
    <span>若您输入的手机号未注册，将为您直接注册，注册即视为同意</span>
    <span > 
    <a href="javascript:;" style="color: #4a90e2;">京东用户注册协议</a>
    <span>、</span>
  </span>
  <a href="javascript:;" style="color: #4a90e2;">用户隐私政策</a>
  </p>
  
  </div>
  
</template>

<script>
export default {
  name: 'UserForm'
}
</script>

<style scoped>
  .input-container {
    position: relative;
    box-sizing: border-box;
    height: 2.8rem;
    padding-top: 0.63rem;
    padding-bottom: 0.63rem;
    overflow: hidden;
    margin-top: 1.25rem;
    background: #fff;
    border-bottom: 1px solid #efefef;
}
.area-box {
    position: absolute;
    width: 4.5rem;
    height: 3.1rem;
    top: 0;
    left: 0;
    line-height: 3.1rem;
}
.area-box span {
    display: inline-block;
    text-align: center;
    width: 3.1rem;
}
.area_icon {
    position: absolute;
    top: 1.4rem;
    right: 0.5rem;
    width: 0.88rem;
    height: 0.38rem;
    overflow: hidden;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAMCAYAAABx290PAAAABGdBTUEAALGPC/xhBQAAAU9JREFUOBGtVC1PxEAQ7R5JqzBVNYSkVU3gX5wBfgEaAniCwuIIHsjpQ6Jwx09AIZo0aRPAU4Fqk7a8d3TIHHfXj4Q1Mzsfb/btvtb4vr9vjLm1ftZVkiT3jf8vJgiCUwBdEqyu6zODwDucLYU+cxznOIqiNxUb7IZhuJ3n+QSNY2kGsY+RbJQdF0Xx2pxMhfu77CUGOn6HSbfBlR5g8gNYbkpQ2UFsV7ESLMz4wozDUZqmT7Zt7yIxk6Syvdm2sSI2Z3CWUeBWc43XQ9h2sQL+BYR4J3M2xKHNsuzF87xpWZY72Po6x31VVUeu636yjjkeELWPcEPu/yw+x14cx886vsBQJ7rYNrXLosBbIbfASuOuHciituvSIMrvFFnrQAHqYGtRgahdy0pwaFd9hzo/9/noLUqeK1ALYwlABXoxVPUUyglUfM4YmN0M/RV+A2uMnQpiFNqoAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    margin-left: 0.38rem;
}
.acc-input-1 {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 4.4rem;
    margin: 0;
    line-height: normal;
    border-radius: 0;
    border: 0;
    font-size: 16px;
    outline: none;
}
.acc-input-2 {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: normal;
    border-radius: 0;
    border: 0;
    font-size: 16px;
    outline: none;
}
.icon-clear {
  display: none;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
    right: 120px;
    position: absolute;
    width: 24px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0;
}
button.text-btn {
    border: none;
    border-left: 1px solid #ccc;
    background: #fff;
    border-radius: 0;
    padding: 0;
    color: #848689;
    position: absolute;
    right: 0;
    top: 12.5px;
    height: 23px;
    line-height: 23px;
    text-align: center;
    border-left: 1px solid #ccc;
    font-size: 14px;
    min-width: 100px;
}
.btn {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: block;
    background-color: #efefef;
    border-radius: 25px;
    font-size: 16px;
    color: #fff;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    box-shadow: 0 10px 20px 0 rgb(255 62 62 / 20%);
    text-align: center;
}
.quick-btn {
    color: rgba(0,0,0,.4);
    font-size: 14px;
    margin-top: 20px;
    overflow: hidden;
}
.quick-btn .planBLogin {
    float: left;
}
.quick-btn .quickReg {
    float: right;
}
.quick-login {
    margin-top: 88px;
    border-top: 1px solid rgba(0,0,0,.1);
    font-size: 12px;
}
.quick-login .txt-otherLogin {
    color: rgba(0,0,0,.2);
    width: 140px;
    margin: -11px auto 0;
    background: #fff;
    text-align: center;
}
.quick-login .quick-type{
    text-align: center;
    margin: 25px 0 12px;
}
.quick-login .quick-type .icon-qq {
    background-image: url(data:image/png;base64,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);
    display: inline-block;
    width: 48px;
    color: rgba(0,0,0,.4);
    margin: 0 15px;
    background-size: 100% auto;
    padding-top: 53px;
    background-repeat: no-repeat;
}
.policy_tip {
    text-align: center;
    font-size: 13px;
    color: rgba(0,0,0,.3);
    margin-top: 15px;
}
.policy_tip-checkbox {
    background-color: #fff;
    display: inline-block;
    vertical-align: text-top;
}
</style>