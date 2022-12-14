import { createApp } from 'vue'
import App from './App.vue'
import VueCarousel from '@chenfengyuan/vue-carousel';

import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone, faEnvelope)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component(VueCarousel.name, VueCarousel)
    .mount('#app')
