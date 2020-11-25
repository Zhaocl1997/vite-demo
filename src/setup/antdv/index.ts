// Load on demand
// This module only introduces components globally before login
import type { App } from 'vue';

import {
    // need
    Form,
    Input,
    Row,
    Col,
    Spin,
    Layout,
    Card,
    Descriptions,
    Button,
    Radio,
    Menu,
    Tabs,
    Switch,
    Select,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app: App<Element>) {
    // need
    // Here are the components required before registering and logging in
    app
        .use(Form)
        .use(Input)
        .use(Row)
        .use(Col)
        .use(Spin)
        .use(Layout)
        .use(Card)
        .use(Descriptions)
        .use(Button)
        .use(Radio)
        .use(Menu)
        .use(Tabs)
        .use(Switch)
        .use(Select)
}
