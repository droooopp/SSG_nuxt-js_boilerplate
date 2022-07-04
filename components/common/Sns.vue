<template>
  <div class="l-sns">
    <div class="l-sns__container">
      <p class="l-sns__heading">このページをシェアする</p>
      <ul class="l-sns__list">
        <li class="l-sns__item">
          <a
            class="l-sns__item__link js-trackEvent"
            :href="facebook"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Share_SNS_Facebook"
          >
            <img
              class="l-sns__item__img"
              src="~/assets/img/common/sns-small_facebook.svg"
            >
          </a>
        </li>
        <li class="l-sns__item">
          <a
            class="l-sns__item__link js-trackEvent"
            :href="twitter"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Share_SNS_Twitter"
          >
            <img
              class="l-sns__item__img"
              src="~/assets/img/common/sns-small_twitter.svg"
            >
          </a>
        </li>
        <li class="l-sns__item">
          <a
            class="l-sns__item__link js-trackEvent"
            :href="line"
            target="_blank"
            rel="noopener noreferrer"
            data-label="Share_SNS_Line"
          >
            <img
              class="l-sns__item__img"
              src="~/assets/img/common/sns-small_line.svg"
            >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'facebook',
      'twitter',
      'line'
    ]
  }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.l-sns {
  margin-top: 35px;

  @include mq() {
    margin-top: 50px;
  }

  &__container {
    margin: 0 20px;

    @include mq() {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto 0;
      padding: 0 20px;
    }
  }

  &__heading {
    font-size: 13px;
    font-weight: 700;
    line-height: 19.5px;

    @include mq() {
      text-align: right;
    }
  }

  &__list {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;

    @include mq() {
      width: 100%;
      justify-content: flex-end;
    }
  }

  &__item {
    width: 37px;

    &+.l-sns__item {
      margin-left: 15px;
    }

    &__link {
      color: #1b1b1b;
      text-decoration: none;
      display: block;

      @include mq() {
        transition: 0.6s;
      }

      &:hover {
        @include mq() {
          opacity: 0.6;
        }
      }
    }

    &__img {
      width: 100%;
      height: auto;
      vertical-align: bottom;
    }
  }
}
</style>
