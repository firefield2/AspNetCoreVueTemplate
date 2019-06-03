import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pl from 'vuetify/src/locale/pl';

Vue.use(Vuetify, {
    options: {
        customProperties: true,
    },
    iconfont: 'md',
    lang: {
        locales: {pl},
        current: 'pl',
    },
});
