
#vite + vue-next开发记录文档

1. 初始化模板
```
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

2. 安装typescript
```
npm install --save-dev typescript
```

3. 生成typescript配置文件
```
npx tsc --init
```

4. 安装eslint
```
npm install --save-dev eslint eslint-plugin-vue
```

5. 生成eslint配置文件
```
npx eslint --init
```

6. 在eslint配置文件的extends里加上一行规则

```javascript
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
```

7. src下main.js改成main.ts，同时index.html引用也修改成main.ts。App.vue script 加上 lang="ts"。

8. main.ts 同级创建文件 shims-vue.d.ts

```typescript
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
```

9. 项目根目录创建 vite.config.js
```javascript
module.exports = {
    port: 80, // 服务端口
    proxy: { // 代理
        // // string shorthand
        // "/foo": "http://localhost:4567/foo",
        // // with options
        // "/api": {
        //     target: "http://jsonplaceholder.typicode.com",
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, ""),
        // },
    },
};
```

10. tsconfig.json 中添加include和exclude
```json
{
  // ...
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

11. tsconfig.json 中 isolatedModules 打开设置为true
```json
{
  // ...
  "isolatedModules": true
}
```

12. 配置vue-router

- 安装
```
npm install vue-router@next
```

- src下新建router文件夹并在其中新建index.ts

- src下新建views文件夹并在其中新建Home.vue和About.vue，同时添加一些内容

- router下index.ts添加以下内容
```typescript
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
```

- 修改main.ts
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

- App.vue 注释template里内容，添加router-view标签
```vue
<template>
  <router-view></router-view>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
</template>
```

- npm run dev 打开发现根个about页都出现了相应的内容，router就算初步配置完成

13. 配置vuex

- 安装
```
npm install vuex@next
```

- src下新建store文件夹并在其中新建index.ts

- router下index.ts添加以下内容
```typescript
import { createStore } from 'vuex';

interface State {
    username: string
}

const state: State = {
    username: 'jack'
}

export default createStore({
    state,
    mutations: {},
    actions: {},
    modules: {},
});
```

- 修改main.ts
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
```

14. 安装CSS Pre-Processors
```
npm i --save-dev sass
```

15. 安装antdv2
```
npm i --save ant-design-vue@next
```