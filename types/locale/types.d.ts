declare interface ILocale {
  name: string
  weekdays?: string[]
  months?: string[]
  weekStart?: number
  weekdaysShort?: string[]
  monthsShort?: string[]
  weekdaysMin?: string[]
  ordinal?: (n: number) => number | string
  formats: Partial<{
    LT: string
    LTS: string
    L: string
    LL: string
    LLL: string
    LLLL: string
  }>
  relativeTime: Partial<{
    future: string
    past: string
    s: string
    m: string
    mm: string
    h: string
    hh: string
    d: string
    dd: string
    M: string
    MM: string
    y: string
    yy: string
  }>
}

declare type LocalePresetType =
  | 'af'
  | 'ar-dz'
  | 'ar-kw'
  | 'ar-ly'
  | 'ar-ma'
  | 'ar-sa'
  | 'ar-tn'
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'cs'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de-at'
  | 'de-ch'
  | 'de'
  | 'dv'
  | 'el'
  | 'en-SG'
  | 'en-au'
  | 'en-ca'
  | 'en-gb'
  | 'en-ie'
  | 'en-il'
  | 'en-in'
  | 'en-nz'
  | 'en-tt'
  | 'en'
  | 'eo'
  | 'es-do'
  | 'es-us'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fo'
  | 'fr-ca'
  | 'fr-ch'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gom-latn'
  | 'gu'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'hy-am'
  | 'id'
  | 'is'
  | 'it-ch'
  | 'it'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kk'
  | 'km'
  | 'kn'
  | 'ko'
  | 'ku'
  | 'ky'
  | 'lb'
  | 'lo'
  | 'lt'
  | 'lv'
  | 'me'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms-my'
  | 'ms'
  | 'mt'
  | 'my'
  | 'nb'
  | 'ne'
  | 'nl-be'
  | 'nl'
  | 'nn'
  | 'oc-lnc'
  | 'pa-in'
  | 'pl'
  | 'pt-br'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sd'
  | 'se'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sr-cyrl'
  | 'sr'
  | 'ss'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tet'
  | 'tg'
  | 'th'
  | 'tk'
  | 'tl-ph'
  | 'tlh'
  | 'tr'
  | 'tzl'
  | 'tzm-latn'
  | 'tzm'
  | 'ug-cn'
  | 'uk'
  | 'ur'
  | 'uz-latn'
  | 'uz'
  | 'vi'
  | 'x-pseudo'
  | 'yo'
  | 'zh-cn'
  | 'zh-hk'
  | 'zh-tw'
  | 'zh'