<template>
  <div class="p-hero js-p-hero swiper-container">
    {{pages.heading}}
  </div>
</template>

<script>
import pages from '@/data/pages.json'
export default {
  data() {
    return {
      pages: pages
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";

.p-hero {
  padding-top: 150%;
  position: relative;

  @include mq() {
    padding-top: 0;
  }

  &__container {
    position: absolute;
    top: 0;
    left: 0;

    @include mq() {
      position: inherit;
    }
  }

  &__inner {
    @include mq() {
      width: 100%;
      max-width: 1000px;
      padding: 0 20px;
      margin: auto;
    }
  }

  &__item {
    position: relative;
    width: 100%;
    height: 100%;

    figure.c-imgAdjustBox {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }

    &__container {
      position: absolute;
      top: 50%;
      z-index: 3;
      transform: translate3d(0,-50%,2px);
      width: 100%;
      padding: 0 20px;
      text-align: center;
      color: #fff;

      @include mq() {
        width: 100%;
        max-width: 960px;
        left: 50%;
        transform: translate3d(-50%,-50%,2px);
      }
    }

    &__number {
      font-size: 34px;
      line-height: 1;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);

      @include mq() {
        font-size: 68px;
      }
    }

    &__title {
      margin: 25px 0 0;

      @include mq() {
        margin: 30px 0 0;
      }
    }

    &__date {
      margin: 25px 0 0;
      font-size: 14px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);

      @include mq() {
        margin: 30px 0 0;
        font-size: 20px;
      }
    }

    &__button {
      margin: 25px 0 0;

      @include mq() {
        margin: 30px 0 0;
      }
    }
  }
}
// Base Swiper CSS
.swiper-container {
  .swiper-pagination-bullet {
    background-color: transparent;
    border: 1px solid #f4f4f4;
  }

  .slider-btn {
    transition: all 0.1s ease-out;
    position: absolute;
    top: 35%;
    z-index: 2;
    background-color: #f4f4f4;
    padding: 13px 16px 10px;

    &--prev {
      left: -1px;
    }

    &--next {
      right: -1px;
    }

    &.swiper-button-disabled {
      opacity: 0;
      visibility: hidden;
    }
  }

  .hero-slider-btn--next.hero-slider-btn-disabled,
  .hero-slider-btn--prev.hero-slider-btn-disabled {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-pagination {
    margin-bottom: 16px;
  }
}
.swiper-pagination-main {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
  }
}

.swiper-container-h {
  .swiper-button-prev-h {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 10;
  }
  .swiper-button-next-h {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 10;
  }
}

.swiper-container-main {
  .swiper-button-prev-main {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 10;
  }
  .swiper-button-next-main {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 10;
  }
}

.swiper-pagination-main.swiper-pagination-bullets {
  .swiper-pagination-bullet {
    opacity: 1;
    margin: 0 6px;
    svg {
      display: none;
    }
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #f4f4f4;
    color: #f4f4f4;
    position: relative;
    transition: color 0.4s;
    svg {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      #path {
        stroke-dasharray: calc(94.24777960769379 / 2);
      }
      .bg-circle {
        opacity: 0.2;
      }
    }
  }
}
</style>
