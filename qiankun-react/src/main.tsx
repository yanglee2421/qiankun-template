import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";

let root: ReactDOM.Root | null = null;
const isQiankun = qiankunWindow.__POWERED_BY_QIANKUN__;

if (!isQiankun) render();

if (isQiankun) {
  renderWithQiankun({
    mount(props) {
      render(props);
    },
    unmount(props) {
      root?.unmount();
    },
    update(props) {},
    bootstrap() {},
  });
}

function render(props?: QiankunProps) {
  const dom = props?.container || document.querySelector("#root")!;
  if (!dom) return;
  root = ReactDOM.createRoot(dom);
  root?.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
