<template>
  <header class="l-header js-l-header">
    <div class="l-header__container">
      <div class="l-header__brand -show">
        <a class="l-header__brand__link js-trackEvent" href="https://www.domain.com/" target="_blank" rel="noopener" data-label="l-header_-logo">
          <img class="l-header__brand-img" src="~assets/img/common/header.svg" alt="">
        </a>
      </div>
      <h1
        v-if="$route.path=='/'"
        class="l-header__logo"
      >
        <a
          class="l-header__logo__link link-transition js-trackEvent"
          :href="baseDir"
          data-label="Header_Logo_Top"
        >
          <img
            src="~assets/img/common/logo.svg"
            alt=""
          >
        </a>
      </h1>
      <div
        v-else
        class="l-header__logo"
      >
        <a
          class="l-header__logo__link link-transition js-trackEvent"
          :href="baseDir"
          data-label="Header_Logo_Top"
        >
          <img
            src="~assets/img/common/logo.svg"
            alt=""
          >
        </a>
      </div>
      <div class="l-header__menu">
        <div
          class="l-header__menu__action js-trackEvent"
          data-label="Header_Menu_Open"
          @click="openDrawer"
        >
          <span class="l-header__menu__toggles"></span>
          <span class="l-header__menu__toggles"></span>
          <span class="l-header__menu__text">メニュー</span>
        </div>
      </div>
    </div>
    <div
      class="l-header__overlay"
      @click="closeDrawer"
    ></div>
    <div class="l-header__nav">
      <div class="l-header__menu -close">
        <div
          class="l-header__menu__action -close js-trackEvent"
          data-label="Header_Menu_Close"
          @click="closeDrawer"
        >
          <span class="l-header__menu__toggles"></span>
          <span class="l-header__menu__toggles"></span>
          <span class="l-header__menu__text">閉じる</span>
        </div>
      </div>
      <div class="l-header__nav__container">
        <div class="l-header__nav__item">
          <a
            class="l-header__nav__link js-trackEvent"
            href="/"
            data-label="Header_Menu_Top"
          >
            <div class="l-header__nav__caption">{{pages.heading}}</div>
          </a>
        </div>
        <div class="l-header__nav__item">
          <a
            class="l-header__nav__link js-trackEvent"
            href="/"
            data-label="Header_Menu_"
          >
            <div class="l-header__nav__title -light">***</div>
            <div class="l-header__nav__caption">{{pages.heading}}</div>
          </a>
        </div>
      </div>
      <a
        class="l-header__nav__logo js-trackEvent"
        href="https://www.domain.com/"
        data-label="Header_Menu_Top"
      >
        <img src="~assets/img/common/header.svg">
        TOP
      </a>
    </div>
  </header>
</template>

<script>
import pages from '@/data/pages.json'
export default {
  props: [
    'baseDir'
  ],
  data() {
    return {
      el: this.$el,
      pages: pages
    }
  },
  methods: {
    openDrawer: (event) => {
      if (process.client) {
        const body = document.querySelector('body')
        const header = document.querySelector('.js-l-header')
        const scrollY = document.documentElement.scrollTop || body.scrollTop
        body.classList.add('-openDrawer')
        body.style.top = `-${scrollY}px`
        header.classList.add('-open')
      }
    },
    closeDrawer: (event) => {
      if (process.client) {
        const body = document.querySelector('body')
        const scrollY = parseInt(body.style.top) * -1
        const header = document.querySelector('.js-l-header')
        body.classList.remove('-openDrawer')
        body.style.removeProperty('top')
        window.scrollTo(0, scrollY)
        header.classList.remove('-open')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.l-header {
  opacity: 1;
  backface-visibility: hidden;
  position: fixed;
  top: 0;
  z-index: 11000;
  width: 100%;
  height: 52px;
  background: #fff;
  transition: all 0.2s;

  @include mq() {
    height: 70px;
  }

  &__container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__brand {
    backface-visibility: hidden;
    opacity: 0;
    transition: all 0.6s;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);

    &__link {
      display: block;
      width: 64px;

      @include mq() {
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }

      img {
        width: 100%;
        display: block;
      }
    }

    &.-show {
      opacity: 100;
    }
  }

  &__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    height: auto;
    width: 130px;

    @include mq() {
      width: 240px;
    }

    &__link {
      display: block;
      width: 100%;
      height: 100%;

      @include mq() {
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }

      img {
        display: block;
      }
    }
  }

  &__menu {
    position: absolute;
    right: 0;
    width: 52px;
    z-index: 2;

    @include mq() {
      width: 70px;
    }

    &__action {
      position: relative;
      float: right;
      width: 52px;
      height: 52px;

      @include mq() {
        height: 70px;
        width: 70px;
        transition: 0.6s;
        cursor: pointer;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }
    }

    &__text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 10px;
      display: block;
      font-size: 10px;
      text-align: center;
      white-space: nowrap;
      width: 100%;
      opacity: 1;
      transition: all 0.6s;
    }

    &__toggles {
      position: absolute;
      display: inline-block;
      width: 20px;
      left: 50%;
      height: 2px;
      transform: translate(-50%,-50%);
      background-color: #1b1b1b;
      -webkit-transition: all .45s;
      transition: all .45s;

      &:nth-of-type(1) {
        top: 50%;
        margin-top: -12px;
      }

      &:nth-of-type(2) {
        top: 50%;
        margin-top: -4px;
      }
    }

    &.-close {
      .l-header__menu__toggles {
        position: absolute;
        display: inline-block;
        width: 20px;
        left: 50%;
        height: 2px;
        transform: translate(-50%,-50%);
        background-color: #1d1d1d;
        -webkit-transition: all .45s;
        transition: all .45s;

        &:nth-of-type(1) {
          transform: translate(-50%, -50%) rotate(45deg);
          transform-origin: left center 0;
          margin-top: -16px;
          margin-left: 2px;
        }

        &:nth-of-type(2) {
          transform: translate(-50%, -50%) rotate(-45deg);
          transform-origin: left center 0;
          margin-top: -2px;
          margin-left: 2px;
        }
      }
    }
  }

  &__nav {
    position: fixed;
    z-index: 3;
    top: 0;
    right: -310px;
    transition: .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    width: 310px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    @include mq() {
      right: -420px;
      width: 420px;
    }

    &__container {
      padding-top: 51px;

      @include mq() {
        padding-top: 70px;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      font-size: 16px;
      width: 100%;
      position: relative;
      padding: 0 15px;
      height: 51px;

      @include mq() {
        padding: 0 30px;
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }
    }

    &__title {
      margin-right: 5px;
    }

    &__aboutLW {
      display: flex;
      align-items: center;
      font-size: 16px;
      width: 100%;
      position: relative;
      padding: 0 15px;
      height: 51px;
      font-size: 16px;

      @include mq() {
        padding: 0 30px;
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-left: 15px;
      padding-bottom: 20px;
      font-size: 16px;

      @include mq() {
        margin-left: 30px;
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }

      img {
        width: 63px;
        margin-right: 10px;
      }
    }
  }

  &__overlay {
    opacity: 0;
    pointer-events: none;
    transition: .3s ease;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.-open.l-header {
  .l-header__nav {
    right: 0;
  }

  .l-header__overlay {
    opacity: 1;
    pointer-events: initial;
  }
}

</style>
