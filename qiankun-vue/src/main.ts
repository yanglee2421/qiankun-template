import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

const app = createApp(App);

const isQiankun = qiankunWindow.__POWERED_BY_QIANKUN__;
if (!isQiankun) app.mount("#app");
if (isQiankun) {
  renderWithQiankun({
    mount(props) {
      const dom = props.container;
      if (!dom) return;
      app.mount(dom);
    },
    unmount() {
      app.unmount();
    },
    update(props) {},
    bootstrap() {},
  });
}
