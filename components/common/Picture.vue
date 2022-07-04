<template>
  <figure
    :class="!isLazy ? `c-imgAdjustBox` : `c-picture__wrapper`"
    :data-aspect-ratio="(aspectRatio) ? aspectRatio : false"
    :data-sp-aspect-ratio="(spAspectRatio) ? spAspectRatio : false"
    :data-pc-aspect-ratio="(pcAspectRatio) ? pcAspectRatio : false"
  >
    <picture
      v-if="!isLazy"
      class="c-imgAdjustBox__inner"
    >
      <template
        v-if="separate"
      >
        <source
          :data-srcset="`${src}-desktop.${this.webp}`"
          media="(min-width: 813px)"
          :type="`image/${this.webp}`"
        >
        <source
          :data-srcset="`${src}-desktop.${type}`"
          media="(min-width: 813px)"
          :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
        >
        <source
          :data-srcset="`${src}.${this.webp}`"
          :type="`image/${this.webp}`"
        >
        <source
          :data-srcset="`${src}.${type}`"
          :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
        >
        <img
          class="c-picture lazyload"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          :data-src="`${src}.${type}`"
          :alt="alt"
          data-expand="300"
        >
      </template>
      <template
        v-else
      >
        <source
          :data-srcset="`${src}.${this.webp}`"
            :type="`image/${this.webp}`"
        >
        <source
          :data-srcset="`${src}.${type}`"
          :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
        >
        <img
          class="c-picture lazyload"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          :data-src="`${src}.${type}`"
          :alt="alt"
          data-expand="300"
        >
      </template>
    </picture>
    <template
      v-else
    >
      <template
        v-if="separate"
      >
        <picture>
          <source
            :srcset="`${src}-desktop.${this.webp}`"
            media="(min-width: 813px)"
            :type="`image/${this.webp}`"
          >
          <source
            :srcset="`${src}-desktop.${type}`"
            media="(min-width: 813px)"
            :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
          >
          <source
            :srcset="`${src}.${this.webp}`"
            :type="`image/${this.webp}`"
          >
          <source
            :srcset="`${src}.${type}`"
            :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
          >
          <img
            class="c-picture"
            :src="`${src}.${type}`"
            :alt="alt"
          >
        </picture>
      </template>
      <template
        v-else
      >
        <picture>
          <source
            :srcset="`${src}.${this.webp}`"
            :type="`image/${this.webp}`"
          >
          <source
            :srcset="`${src}.${type}`"
            :type="`image/${type === 'jpg' ? 'jpeg' : type}`"
          >
          <img
            class="c-picture"
            :src="`${src}.${type}`"
            :alt="alt"
          >
        </picture>
      </template>
    </template>
  </figure>
</template>

<script>
export default {
  props: [
    'src',
    'alt',
    'type',
    'aspectRatio',
    'spAspectRatio',
    'pcAspectRatio',
    'separate',
    'isLazy'
  ],
  data() {
    return {
      webp: process.env.ENV === 'local' ? this.type : 'webp'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.c-imgAdjustBox {
  position: relative;
  width: 100%;
  height: auto;
  display: block;

  &:before {
    content: "";
    display: block;
  }

  &__inner {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.c-picture {
  transition: opacity .5s;
  opacity: 0;
  width: 100%;
  height: auto;
}

.c-picture.lazyloaded,
.c-picture__wrapper .c-picture  {
  opacity: 1;
}

[data-aspect-ratio="1:1"]::before {
  padding-top: 100%;
}
[data-aspect-ratio="3:2"]::before {
  padding-top: 66.6666%;
}
[data-aspect-ratio="3:4"]::before {
  padding-top: 133.3333%;
}
[data-aspect-ratio="750:563"]::before {
  padding-top: 75.0666%;
}
[data-aspect-ratio="48:25"]::before {
  padding-top: 52.0833%;
}
[data-aspect-ratio="16:9"]::before {
  padding-top: 56.25%;
}
[data-aspect-ratio="108:83"]::before {
  padding-top: 76.8518%;
}
[data-aspect-ratio="13:16"]::before {
  padding-top: 123.0769%;
}
[data-aspect-ratio="2:1"]::before {
  padding-top: 50%;
}
[data-aspect-ratio="2:3"]::before {
  padding-top: 150%;
}
[data-aspect-ratio="4:3"]::before {
  padding-top: 75%;
}
[data-aspect-ratio="26:33"]::before {
  padding-top: 126.923%;
}
[data-aspect-ratio="335:459"]::before {
  padding-top: 137.0149%;
}
[data-aspect-ratio="48:23"]::before {
  padding-top: 47.9166%;
}
[data-aspect-ratio="6:5"]::before {
  padding-top: 83.33334%;
}

[data-sp-aspect-ratio="1:1"]::before {
  padding-top: 100%;
}
[data-sp-aspect-ratio="3:2"]::before {
  padding-top: 66.6666%;
}
[data-sp-aspect-ratio="3:4"]::before {
  padding-top: 133.3333%;
}
[data-sp-aspect-ratio="750:563"]::before {
  padding-top: 75.0666%;
}
[data-sp-aspect-ratio="48:25"]::before {
  padding-top: 52.0833%;
}
[data-sp-aspect-ratio="16:9"]::before {
  padding-top: 56.25%;
}
[data-sp-aspect-ratio="108:83"]::before {
  padding-top: 76.8518%;
}
[data-sp-aspect-ratio="13:16"]::before {
  padding-top: 123.0769%;
}
[data-sp-aspect-ratio="2:1"]::before {
  padding-top: 50%;
}
[data-sp-aspect-ratio="2:3"]::before {
  padding-top: 150%;
}
[data-sp-aspect-ratio="4:3"]::before {
  padding-top: 75%;
}
[data-sp-aspect-ratio="26:33"]::before {
  padding-top: 126.923%;
}
[data-sp-aspect-ratio="335:459"]::before {
  padding-top: 137.0149%;
}
[data-sp-aspect-ratio="48:23"]::before {
  padding-top: 47.9166%;
}
[data-sp-aspect-ratio="6:5"]::before {
  padding-top: 83.33334%;
}

@include mq() {
  [data-pc-aspect-ratio="1:1"]::before {
    padding-top: 100%;
  }
  [data-pc-aspect-ratio="3:2"]::before {
    padding-top: 66.6666%;
  }
  [data-pc-aspect-ratio="3:4"]::before {
    padding-top: 133.3333%;
  }
  [data-pc-aspect-ratio="750:563"]::before {
    padding-top: 75.0666%;
  }
  [data-pc-aspect-ratio="48:25"]::before {
    padding-top: 52.0833%;
  }
  [data-pc-aspect-ratio="16:9"]::before {
    padding-top: 56.25%;
  }
  [data-pc-aspect-ratio="108:83"]::before {
    padding-top: 76.8518%;
  }
  [data-pc-aspect-ratio="13:16"]::before {
    padding-top: 123.0769%;
  }
  [data-pc-aspect-ratio="2:1"]::before {
    padding-top: 50%;
  }
  [data-pc-aspect-ratio="2:3"]::before {
    padding-top: 150%;
  }
  [data-pc-aspect-ratio="4:3"]::before {
    padding-top: 75%;
  }
  [data-pc-aspect-ratio="26:33"]::before {
    padding-top: 126.923%;
  }
  [data-pc-aspect-ratio="335:459"]::before {
    padding-top: 137.0149%;
  }
  [data-pc-aspect-ratio="48:23"]::before {
    padding-top: 47.9166%;
  }
  [data-pc-aspect-ratio="6:5"]::before {
    padding-top: 83.33334%;
  }
}
</style>
