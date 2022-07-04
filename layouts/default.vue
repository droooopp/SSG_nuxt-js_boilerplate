<template>
  <div>
    <Header
    :baseDir="baseDir"
    />
    <div class="l-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>


<script>
const Header = () => import('~/components/common/Header')
const Footer = () => import('~/components/common/Footer')

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      baseDir: process.env.BASE_DIR
    }
  },
  mounted() {
    if (process.client) {
      if ('scrollRestoration' in window.history) {
        window.addEventListener('load', () => {
          window.history.scrollRestoration = 'auto'
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_mixins.scss";

.l-content {
  margin-top: 52px;

  @include mq() {
    margin-top: 70px;
  }
}

.u-font__noto {
  font-family: 'Noto Serif JP', serif;
}

.u-only__sp {
  display: block;

  @include mq() {
    display: none;
  }
}
.u-only__pc {
  display: none;

  @include mq() {
    display: block;
  }
}
</style>
