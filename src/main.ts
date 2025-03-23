import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ErrorStackParser from 'error-stack-parser';
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// import { findCodeBySourceMap } from './utils';
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus)

app.config.errorHandler = (err: any, vm) => {
  const stack = ErrorStackParser.parse(err as Error);
  // findCodeBySourceMap(stack[0]);
  const jsError = {
    stack_frames: stack,
    message: err.message,
    stack: err.stack,
    error_name: err.name
  }

  vm!.$message.error(`您触发了一个${err.name} 错误`)
  localStorage.setItem('jsErrorList', JSON.stringify(jsError))
}

app.mount('#app');