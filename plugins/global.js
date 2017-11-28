import Vue from 'vue'
import Icon from '@/components/Icon.vue'
import LeaveEmail from '@/components/LeaveEmail.vue'
import Split from '@/components/Split.vue'

Vue.component('icon', Icon)
Vue.component('leave-email', LeaveEmail)
Vue.component('split', Split)

Vue.config.devtools = false
Vue.config.productionTip = false
