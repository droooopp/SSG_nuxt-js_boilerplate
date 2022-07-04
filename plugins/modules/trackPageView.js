'use strict'

/**
 * @description trackPageView
 */

export const trackPageView = () => {
  window.dataLayer.push({
    event: 'trackPageView',
    brand: 'brand',
    pageType: 'category',
    pageUrlPath: `${location.pathname}${location.search}`,
    pageTitle: document.title,
    previousPageExists: /http(s)?:\/\/(www\.)?domain.com/.test(
      document.referrer
    )
      ? true
      : false
  })
}
