import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken1, // #E53935
        dark: colors.blueGrey.darken4,
        secondary: colors.blueGrey.lighten4, // #FFCDD2
        accent: colors.blueGrey.base, // #3F51B5
      },
    },
  },
})
