declare module "*.vue" {
  import { DefineComponent } from "vue";
  const sfc: DefineComponent<{}, {}, any>;
  export default sfc;
}
