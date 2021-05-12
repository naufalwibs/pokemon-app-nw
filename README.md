# pokemon-app-nw

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Tech Stack Used

1. Vue.js - Nuxt.js
2. Vuex (Classic Vuex)
3. Vuetify
4. Axios
5. Animate.css

## Folder Structure

1. assets/

- --| variable.scss
- ----| banners/
- ------| banner-pokemon-1.png
- ------| banner-pokemon-2.jpg
  ------| banner-pokemon-3.png

2. components/

- --| PokemonCard.vue
- --| PokemonCardEvolution.vue

3. layouts/

- --| default.vue
- --| error.vue

4. middleware/
5. pages/ (Using folder approach routing)

- --| index.vue
- ----| /pokemon
- ------| /\_id
- --------| index.vue

6. plugins/
7. static/

- --| favicon.ico

8. store/

- --| index.js (Using Classic Vuex)
