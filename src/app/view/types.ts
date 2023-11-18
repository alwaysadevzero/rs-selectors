export type ComponentProps<T> = {
  parent: HTMLElement | null;
  tag: T;
  className: string;
  content: string;
};
