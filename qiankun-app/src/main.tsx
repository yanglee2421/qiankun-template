import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/reset.css";
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  RegistrableApp,
  ObjectType,
} from "qiankun";

registerMicroApps(microApps());

setDefaultMountApp("/vite-vue");

// 启动 qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function microApps(): RegistrableApp<ObjectType>[] {
  return [
    {
      name: "reactApp",
      entry: "//localhost:3000",
      // entry: "//localhost:5174",
      container: "#container",
      activeRule: "/vite-react",
    },
    {
      name: "vueApp",
      entry: "//localhost:3001",
      container: "#container",
      activeRule: "/vite-vue",
    },
    {
      name: "mvc",
      entry: "//localhost:4399",
      container: "#container",
      activeRule: "/mvc",
    },
  ];
}
