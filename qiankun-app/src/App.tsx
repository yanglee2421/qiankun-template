import { registerMicroApps, start } from "qiankun";

registerMicroApps([
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
    entry: "//localhost:5500",
    container: "#container",
    activeRule: "/mvc",
  },
]);
// 启动 qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
  excludeAssetFilter(url) {
    console.log("exc", url);

    return true;
  },
});

export default function App() {
  return <div id="container"></div>;
}
