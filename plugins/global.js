import Vue from 'vue'
import Block from '@/components/Block.vue'
import Icon from '@/components/Icon.vue'
import HtmlContent from '@/components/HtmlContent.vue'
import LeaveEmail from '@/components/LeaveEmail.vue'
import ModularFeatureList from '@/components/ModularFeatureList.vue'
import ModularText from '@/components/ModularText.vue'
import ModularTextImage from '@/components/ModularTextImage.vue'

Vue.component('block', Block)
Vue.component('icon', Icon)
Vue.component('HtmlContent', HtmlContent)
Vue.component('LeaveEmail', LeaveEmail)
Vue.component('ModularFeatureList', ModularFeatureList)
Vue.component('ModularText', ModularText)
Vue.component('ModularTextImage', ModularTextImage)

Vue.filter('markdown', markdown => 'markdown' + markdownToHTML(markdown || ''))

Vue.config.devtools = false
Vue.config.productionTip = false
