var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/miqueiassantos/Projetos/toque-bateria/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/miqueiassantos/Projetos/toque-bateria/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Toque Bateria","short_name":"Toque Bateria","start_url":"/","background_color":"#5B8888","theme_color":"#5B8888","display":"minimal-ui","icon":"/home/miqueiassantos/Projetos/toque-bateria/src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"20b52a64558fd2898ca2e6995dac8cec"},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/home/miqueiassantos/Projetos/toque-bateria/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-facebook-pixel',
      plugin: require('/home/miqueiassantos/Projetos/toque-bateria/node_modules/gatsby-plugin-facebook-pixel/gatsby-ssr'),
      options: {"plugins":[],"pixelId":"231931754897046"},
    },{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/home/miqueiassantos/Projetos/toque-bateria/node_modules/gatsby-plugin-google-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":["UA-110609333-1"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
