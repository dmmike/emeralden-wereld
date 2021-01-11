// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import App from './App'
import router from './router'
import {library} from "@fortawesome/fontawesome-svg-core"
import {faCheck, faTimes, faRedo} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

library.add(faCheck)
library.add(faTimes)
library.add(faRedo)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
