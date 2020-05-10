module.exports = {
  '{src,tests}/**/*.{ts,js,json,md,scss,html}': ['npm run lint-staged:format'],
  '{src,tests}/**/*.{js,jsx,vue,ts,tsx}': ['vue-cli-service lint']
}
