<template>
  <footer class="l-footer">
    <div class="l-footer__logo"><img src="~assets/img/common/header.svg"></div>
    <div class="l-footer__copyright -light">COPYRIGHT (C) ****.</div>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.l-footer {
  border-top: 1px solid #dadada;
  background-color: #fff;
  padding-top: 25px;
  text-align: center;

  @include mq() {
    padding-top: 30px;
  }

  &__logo {
    width: 64px;
    margin: auto;

    img {
      width: 100%;
    }
  }

  &__copyright {
    margin-top: 25px;
    text-align: center;
    border-top: 1px solid #dadada;
    background-color: #f4f4f4;
    color: #ababab;
    font-size: 10px;
    line-height: 1;
    letter-spacing: .05em;
    padding: 15px 0;

    @include mq() {
      margin-top: 30px;
    }
  }
}
</style>
