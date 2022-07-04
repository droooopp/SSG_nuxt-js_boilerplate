const gtmID = 'GTM-******'
const gtmHeadType = `window.dataLayer = window.dataLayer || [];dataLayer.push({'siteType' : 'responsive','pageType' : 'category','subID' : ''});`
const gtmHeadTag = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmID}');`
const gtmBodyTag = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
let metaData = {}
export default {
  computed: {
    jsonld() {
      if(this.slug === '') {
        return {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.domain.com/",
                "name": "サイトTOP"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.domain.com/contents/SSG_nuxt-js_boilerplate/",
                "name": "SSG_nuxt-js_boilerplate"
              }
            }
          ]
        }
      }
      else {
        return {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.domain.com/",
                "name": "サイトTOP"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.domain.com/contents/SSG_nuxt-js_boilerplate/",
                "name": "SSG_nuxt-js_boilerplate"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": `${this.url}`,
                "name": `${this.title}`
              }
            }
          ]
        }
      }
    },
  },
  head() {
    metaData = {
      base: false,
      htmlAttrs: {
        prefix: 'og: http://ogp.me/ns#',
        lang: this.lang
      },
      title: this.title === '' ? `トップ - サイト` : `トップ｜${this.title} - サイト`,
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: gtmBodyTag,
          pbody: true
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'jsonld': ['innerHTML'],
        'gtmHeadType': ['innerHTML'],
        'gtmHead': ['innerHTML'],
        'gtmBody': ['innerHTML']
      }
    }
    metaData['meta'] = [
      { hid: 'description', name: 'description', content: this.metaData.description },
      { hid: 'keyword', name: 'keyword', content: this.metaData.keyword },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: this.title === '' ? `トップ - サイト` : `トップ｜${this.title} - サイト` },
      { hid: 'og:description', property: 'og:description', content: this.metaData.description },
      { hid: 'og:url', property: 'og:url', content: this.url },
      { hid: 'og:image', property: 'og:image', content: this.title === '' ? 'https://www.domain.com/SSG_nuxt-js_boilerplate/img/common/ogimage.jpg' : `https://www.domain.com/SSG_nuxt-js_boilerplate/img/${this.slug}/ogimage.jpg` },
      { hid: 'og:site_name', property: 'og:site_name', content: 'オンラインストア' },
      { hid: 'og:app_id', property: 'og:app_id', content: '0000000000000' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'SSG_nuxt-js_boilerplate' }
    ]
    metaData['script'] = [
      { hid: 'jsonld', type: 'application/ld+json', innerHTML: JSON.stringify(this.jsonld, null, 2), },
      { hid: 'gtmHeadType', innerHTML: gtmHeadType },
      { hid: 'gtmHead', innerHTML: gtmHeadTag }
    ]
    metaData['link'] = [
      { rel: 'canonical', href: this.url }
    ]
    return metaData
  }
}
