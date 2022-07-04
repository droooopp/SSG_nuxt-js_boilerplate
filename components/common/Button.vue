<template>
  <a
    v-if="external"
    :class="(type) ? `c-button -${type} js-trackEvent` : 'c-button js-trackEvent'"
    :href="link"
    :data-label="label"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="c-button__external">{{text}}</span>
  </a>
  <a
    v-else
    :class="(type) ? `c-button -${type} js-trackEvent` : 'c-button js-trackEvent'"
    :href="link"
    :data-label="label"
  >
    {{text}}
  </a>
</template>

<script>
export default {
  props: [
    'type',
    'text',
    'link',
    'label',
    'external'
  ]
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.c-button {
  @include mq() {
    transition: 0.6s;
    cursor: pointer;
  }

  &:hover {
    @include mq() {
      opacity: 0.8;
    }
  }

  &__external {
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      background: url(~@/assets/img/common/external_link.svg) 50%/24px no-repeat;
      margin-left: 10px;
      content: "";
      display: inline-block;
      font-size: 24px;
      overflow: hidden;
      width: 24px;
      height: 24px;
    }
  }
}

.c-button.-outline {
  border: 1px solid #1b1b1b;
  background-color: #fff;
  display: block;
  font-size: 16px;
  line-height: 48px;
  padding-right: 4vw;
  padding-left: 4vw;
  text-align: center;

  @include mq() {
    padding-right: 5px;
    padding-left: 5px;
    font-size: 18px;
  }
}

.c-button.-dark {
  background-color: #1b1b1b;
  color: #fff;
  display: block;
  font-size: 16px;
  line-height: 48px;
  padding-right: 4vw;
  padding-left: 4vw;
  text-align: center;

  @include mq() {
    padding-right: 5px;
    padding-left: 5px;
    font-size: 18px;
  }
}

.c-button.-small {
  min-width: 160px;
  max-width: 320px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #1b1b1b;
  display: inline-block;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 1px;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;

  @include mq() {
    font-size: 18px;
    line-height: 45px;
    width: 192px;
  }
}
</style>
