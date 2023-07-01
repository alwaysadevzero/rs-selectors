import { ComponentProps } from "./types";

export default class View<T extends keyof HTMLElementTagNameMap = "div"> {
  public node: HTMLElement;
  constructor({
    parent = null,
    tag = "div" as T,
    className = "",
    content = "",
  }: Partial<ComponentProps<T>>) {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    if (parent) {
      parent.append(this.node);
    }
  }

  remove(): void {
    this.node.remove();
  }

  appendTo(parent: HTMLElement | View): void {
    parent.append(this.node);
  }

  append(...components: (HTMLElement | View)[]): void {
    const nodes = components.map((component) =>
      component instanceof HTMLElement ? component : component.node
    );
    this.node.append(...nodes);
  }

  addListener(
    eventName: keyof GlobalEventHandlersEventMap,
    callback: (event?: Event) => void
  ): void {
    this.node.addEventListener(eventName, callback);
  }

  setAttributes(attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([prop, value]) =>
      this.node.setAttribute(prop, value)
    );
  }

  removeAttributes(...attributes: string[]): void {
    attributes.forEach((attribute) => this.node.removeAttribute(attribute));
  }

  setContent(content: string): void {
    this.node.textContent = content;
  }

  addClass(...classNames: string[]): void {
    this.node.classList.add(...classNames);
  }

  removeClass(...classNames: string[]): void {
    this.node.classList.remove(...classNames);
  }

  toggleClass(className: string, state: boolean): void {
    this.node.classList.toggle(className, state);
  }

  get style(): CSSStyleDeclaration {
    return this.node.style;
  }
}
