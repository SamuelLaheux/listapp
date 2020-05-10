# listapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Generate logo in different format (Imagemagick)

To install Imagemagick: https://www.tecmint.com/install-imagemagick-on-debian-ubuntu/

```sh
convert src/assets/logo.png -resize '192x192' public/img/icons/android-chrome-192x192.png
convert src/assets/logo.png -resize '512x512' public/img/icons/android-chrome-512x512.png
convert src/assets/logo.png -resize '154x154' -gravity center -background transparent -extent 192x192 public/img/icons/android-chrome-maskable-192x192.png
convert src/assets/logo.png -resize '410x410' -gravity center -background transparent -extent 512x512 public/img/icons/android-chrome-maskable-512x512.png
convert src/assets/logo.png -resize '180x180' -background white public/img/icons/apple-touch-icon.png
convert src/assets/logo.png -resize '60x60' -background white public/img/icons/apple-touch-icon-60x60.png
convert src/assets/logo.png -resize '76x76' -background white public/img/icons/apple-touch-icon-76x76.png
convert src/assets/logo.png -resize '120x120' -background white public/img/icons/apple-touch-icon-120x120.png
convert src/assets/logo.png -resize '180x180' -background white public/img/icons/apple-touch-icon-180x180.png
convert src/assets/logo.png -resize '152x152' -background white public/img/icons/apple-touch-icon-152x152.png
convert src/assets/logo.png -resize '16x16' public/img/icons/favicon-16x16.png
convert src/assets/logo.png -resize '32x32' public/img/icons/favicon-32x32.png
convert src/assets/logo.png -resize '144x144' public/img/icons/msapplication-icon-144x144.png
convert src/assets/logo.png -resize '150x150' -background transparent -compose Copy -gravity center -extent 270x270 public/img/icons/mstile-150x150.png
convert src/assets/logo.svg -resize '512x512' public/img/icons/safari-pinned-tab.svg
convert src/assets/logo.png -resize '32x32' public/favicon.ico
```
