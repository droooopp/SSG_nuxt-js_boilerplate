'use strict'

import { throttle } from 'throttle-debounce'

/**
 * @description GA TrackEvent Scroll
 */
export const trackEventScroll = el => {
  const measurementPoints = JSON.parse(el.dataset.measurementPoints)
  const measurementSkipPoints = []

  /**
   * @description GA TrackEvent Scroll Add Event
   * @param {String} categoryName [dataLayer category(Default Variable: 'scroll')]
   * @param {String} actionName [dataLayer action(Default Variable: 'scroll')]
   */
  const trackEventScroll = ({
    categoryName = 'scroll',
    actionName = 'scroll'
  }) => {
    const scrollHeight = document.documentElement.offsetHeight
    const scrollPosition = window.innerHeight + window.scrollY
    const ratio = (scrollPosition / scrollHeight) * 100

    for (let i = 0; measurementPoints.length > i; i++) {
      if (
        measurementSkipPoints.length &&
        measurementSkipPoints.indexOf(i) != -1
      ) {
        continue
      }

      if (ratio >= measurementPoints[i]) {
        measurementSkipPoints.push(i)

        window.dataLayer.push({
          event: 'trackEvent',
          brand: 'brand',
          eventCategory: categoryName,
          eventAction: actionName,
          eventLabel: `scroll_${measurementPoints[i]}`
        })
      }
    }
  }

  window.addEventListener(
    'scroll',
    throttle(100, () => {
      trackEventScroll({
        categoryName: 'scroll',
        actionName: el.dataset.action
      })
    })
  )
}
