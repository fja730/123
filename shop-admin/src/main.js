import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'
import App from './App.vue'
// 引入Element Plus模块
import ElementPlus from 'element-plus'
// 引入CSS样式
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
// 遍历ElementPlusIconsVue中的所有组件进行祖册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 向应用实例中全局注册图标组件
    app.component(key, component)
}
app.use(ElementPlus)

app.use(Router)
app.use(Store)
app.mount('#app')
