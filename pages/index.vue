<template>
  <div class="l-container">
    <Hero/>
    <Sns
      :facebook="share.facebook"
      :twitter="share.twitter"
      :line="share.line"
    />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero'
import Sns from '@/components/common/Sns'
import Meta from '~/assets/mixins/meta'
import pages from '@/data/pages.json'

export default {
  components: {
    Hero,
    Sns
  },
  mixins: [Meta],
  data () {
    return {
      lang: pages.lang,
      url: pages.url,
      slug: '',
      title: '',
      metaData: {
        keyword: pages.keywords,
        description: pages.description
      },
      share: {
        facebook: `https://www.facebook.com/sharer.php?src=bm&u=${encodeURI(pages.url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURI(pages.title)}&url=${encodeURI(pages.url)}`,
        line: `https://line.me/R/msg/text/?${encodeURI(pages.title)}%0A${encodeURI(pages.url)}`
      }
    }
  },
}
</script>

<style>
</style>
