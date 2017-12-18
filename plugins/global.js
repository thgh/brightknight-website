import Vue from 'vue'
import Block from '@/components/Block.vue'
import Icon from '@/components/Icon.vue'
import LeaveEmail from '@/components/LeaveEmail.vue'
import Split from '@/components/Split.vue'
import TextImageRow from '@/components/TextImageRow.vue'
import FeatureList from '@/components/FeatureList.vue'

Vue.component('block', Block)
Vue.component('icon', Icon)
Vue.component('leave-email', LeaveEmail)
Vue.component('split', Split)
Vue.component('TextImageRow', TextImageRow)
Vue.component('FeatureList', FeatureList)

Vue.filter('markdown', markdown => 'markdown' + markdownToHTML(markdown || ''))

Vue.config.devtools = false
Vue.config.productionTip = false
