import { createApp } from 'vue'
import App from './App.vue'

function render ({ model, el }) {
  const app = createApp(App)
  console.log('mounting on', el)
  app.mount(el)
  return () => app.unmount()
}

export default { render };
