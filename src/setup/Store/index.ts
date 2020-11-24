
import type { App } from 'vue';
import store from '/@/store'

export function setupStore(app: App<Element>) {
    app.use(store);
}
