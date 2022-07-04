const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminGifsicle = require('imagemin-gifsicle')
const imageminSvgo = require('imagemin-svgo')

imagemin([`./dist/SSG_nuxt-js_boilerplate/img/**/*.{jpg,png,gif,svg}`], {
  plugins: [
    imageminMozjpeg({ quality: 70 }),
    imageminPngquant('70'),
    imageminGifsicle(),
    imageminSvgo()
  ]
}).then((e) => {
  console.log(e)
})
