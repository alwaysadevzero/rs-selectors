import { Listener } from "./types";
import { Events } from "./events";

class EventEmitter {
  private listeners: Record<string, Listener[]> = {};

  public events: typeof Events = Events;

  public on(event: Events, listener: Listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  public off(event: Events, listener: Listener): void {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((l) => l === listener);
  }

  public emit(event: Events, data?: unknown): void {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((listener) => listener(data));
  }
}

export default new EventEmitter();
