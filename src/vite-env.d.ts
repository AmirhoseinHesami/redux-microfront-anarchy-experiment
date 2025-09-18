/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svelte" {
  import { ComponentType } from "svelte";
  const component: ComponentType;
  export default component;
}
