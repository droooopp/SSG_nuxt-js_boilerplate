'use strict'

import { addObserverEvent } from '~/plugins/utilities/event'

/**
 * @description GA TrackEvent Reading
 * @param {Object} el [要素]
 */
const trackEventFunc = el => {
  window.dataLayer.push({
    event: 'trackEvent',
    brand: 'brand',
    eventCategory: 'read',
    eventAction: 'read',
    eventLabel: el.dataset.label
  })
}

export const trackEventReading = el => {
  addObserverEvent({
    el: el,
    func: el => {
      trackEventFunc(el)
    }
  })
}
