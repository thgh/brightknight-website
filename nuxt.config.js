module.exports = {
  css: ['~assets/css/main.scss'],
  generate: {
    routes () {
      return Promise.all([
        '/',
        '/contact',
        '/en',
        '/fr',
        '/nl',
        '/en/contact',
        '/fr/contact',
        '/nl/contact',
      ].map(asyncDataRoute))
        .then(data => console.log(data) || data)
    }
  },
  loading: false,
  plugins: [
    '@/plugins/global.js',
    { src: '~plugins/ga.js', ssr: false }
  ]
}

function asyncDataRoute (route) {
  const [, lang, slug] = route.split('/')
  return getContent({ lang, slug })
    .then(payload => ({ route, payload }))
}

function getContent (params) {
  const customLang = ['en', 'nl', 'fr'].includes(params.lang)
  const path = [customLang ? params.lang : 'en', (customLang ? params.slug : params.lang) || 'home'].join('/')
  return require('minimal-request-promise')
    .get('https://3.thomasg.be/' + path)
    .then(({ body }) => JSON.parse(body))
}
