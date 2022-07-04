#!/bin/sh

path=`pwd`
imgFiles=`find ./dist/SSG_nuxt-js_boilerplate/img -type f -name "*png" -o -name "*jpg" -o -name "*jpeg"`

for imgFile in $imgFiles
do
  echo ${imgFile%.*}

  fileName=${imgFile%.*}
  cwebp $imgFile -o "${fileName}.webp"
done
