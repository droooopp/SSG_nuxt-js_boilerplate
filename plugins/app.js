'use strict'

import 'lazysizes'
import 'picturefill'
import 'picturefill/dist/plugins/intrinsic-dimension/pf.intrinsic.min.js'

import { mounted } from '~/plugins/utilities'

const trackPageView = async () => {
  try {
    const corp = document.querySelector('.js-corp')

    if (corp) {
      return
    }

    const { trackPageView } = await import(
      /* webpackChunkName: "trackPageView" */
      '~/plugins/modules/trackPageView'
    )

    trackPageView()
  } catch (error) {
    console.log(error)
  }
}

const trackEvent = async () => {
  try {
    const items = document.querySelectorAll('.js-trackEvent')

    if (!items.length) {
      return
    }

    const { trackEvent } = await import(
      /* webpackChunkName: "trackEvent" */ '~/plugins/modules/trackEvent'
    )

    trackEvent(items)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const trackEventScroll = async () => {
  try {
    const el = document.querySelector('.js-trackEventScroll')

    if (!el) {
      return
    }

    const { trackEventScroll } = await import(
      /* webpackChunkName: "trackEventScroll" */ '~/plugins/modules/trackEventScroll'
    )

    trackEventScroll(el)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

const trackEventReading = async () => {
  try {
    const el = document.querySelectorAll('.js-trackEventReading')

    if (!el.length) {
      return
    }

    const { trackEventReading } = await import(
      /* webpackChunkName: "trackEventReading" */ '~/plugins/modules/trackEventReading'
    )

    trackEventReading(el)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

mounted(() => {
  trackPageView()
  trackEvent()
  trackEventScroll()
  trackEventReading()
})
