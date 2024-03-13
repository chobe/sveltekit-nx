declare module '*.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType;

  export { component };
}
