'use strict'

import { addEvent } from '~/plugins/utilities/event'

const trackEventFunc = el => {
  window.dataLayer.push({
    event: 'trackEvent',
    brand: 'brand',
    eventCategory: 'click',
    eventAction: 'click',
    eventLabel: el.dataset.label
  })
}

/**
 * @description GA TrackEvent
 */
export const trackEvent = items => {
  addEvent({
    el: items,
    ev: 'click',
    func: e => {
      trackEventFunc(e.currentTarget)
    }
  })
}
