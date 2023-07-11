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
    parent?.append(this.node);
  }

  public remove(): void {
    this.node.remove();
  }

  public appendTo(parent: HTMLElement | View): void {
    parent.append(this.node);
  }

  public append(...components: (HTMLElement | View)[]): void {
    const nodes = components.map((component) =>
      component instanceof HTMLElement ? component : component.node
    );
    this.node.append(...nodes);
  }

  public addListener(
    eventName: keyof GlobalEventHandlersEventMap,
    callback: (event?: Event) => void
  ): void {
    this.node.addEventListener(eventName, callback);
  }

  public setAttributes(attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([prop, value]) =>
      this.node.setAttribute(prop, value)
    );
  }

  public removeAttributes(...attributes: string[]): void {
    attributes.forEach((attribute) => this.node.removeAttribute(attribute));
  }

  public setContent(content: string): void {
    this.node.textContent = content;
  }

  public addClass(...classNames: string[]): void {
    this.node.classList.add(...classNames);
  }

  public removeClass(...classNames: string[]): void {
    this.node.classList.remove(...classNames);
  }

  public toggleClass(className: string, state?: boolean): void {
    this.node.classList.toggle(className, state);
  }

  public get style(): CSSStyleDeclaration {
    return this.node.style;
  }
}
