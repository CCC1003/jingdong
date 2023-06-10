<template>
  <div id="header">
      <span class="icon-goback" slot="nav-left"></span>
      <span class="text-header" slot="nav-center">京东登录注册</span>
  </div>
</template>

<script>
export default {
  name: 'UserNavbar',
}
</script>

<style scoped>
#header {
    display: block;
    position: relative;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 17px;
    z-index: 999;
    text-align: center;
    color: #000;
}
.icon-goback {
    top: 10px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAYpJREFUaAXtmLFOwzAQhhvKE2Rnygu1EhIDezeeho2doRIDG++BhARDNvY8QZX+f6ilArbjs1t0FmcpcWPfnf/v6sinLBbWLAOWAcuAZeA/Z6A5FXzXdSvEuj/E2/R9/3Kq2LE4l7HJ1DmIvxnH8RH2S/o0TfOA7oq/z90uShf4Kb40ntS/CCAgfgcRd1IhufbZACHx2D632P/PuYKkflkv8Yz4rVREib0YQJN4gosAtIkXAWgUnwygVXwSgGbxswDaxUcBahAfBKhFvBcA4lcozJ4wORVmNELbHU7YPz2kvpaO332lBEviKsQTzQcQR1Y26wNgJcmK0rUla32+F25AU3+8VSZdwzC8t237gYc1LgfIfs1xzL9NhkpuvwCoiyJrgfAC1AQRBKgFIgpQA8QsgHaIJADNEMkAWiFEABohxADaILIAEiBeeaLT7tzNlQpZ6+AD1pZlNpy/1U54dh95s+JKnIoAuFAAQqKhyLYY4AjiGv/GJy+MbYpUmbNlwDJgGbAMWAYSM7AH/J4Amlfxzk4AAAAASUVORK5CYII=);
    width: 24px;
    height: 24px;
    overflow: hidden;
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% auto;
}
</style>