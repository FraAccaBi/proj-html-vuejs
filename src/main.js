import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/fredoka-one"
import "@fontsource/source-sans-pro"
/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass, faCaretDown, faCartShopping, faCircleInfo, faUserPlus, faCalendarDays, faUser, faMoneyBill, faEye, faBookOpen, faPaperPlane, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass, faCaretDown, faCartShopping, faCircleInfo, faUserPlus, faCalendarDays, faUser, faMoneyBill, faEye, faBookOpen, faPaperPlane, faFacebookF, faTwitter, faInstagram, faChevronUp ) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
