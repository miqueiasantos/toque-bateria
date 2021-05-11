module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Toque Bateria","short_name":"Toque Bateria","start_url":"/","background_color":"#5B8888","theme_color":"#5B8888","display":"minimal-ui","icon":"/home/miqueiassantos/Projetos/toque-bateria/src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"20b52a64558fd2898ca2e6995dac8cec"},
    },{
      plugin: require('../node_modules/gatsby-plugin-anchor-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"231931754897046"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-110609333-1"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
