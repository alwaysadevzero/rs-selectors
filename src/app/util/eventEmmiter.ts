import { Listener } from "./types";
import { Events } from "./events";

class EventEmitter {
  private listeners: Record<string, Listener[]> = {};
  public events: typeof Events = Events;

  on(event: Events, listener: Listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  off(event: Events, listener: Listener): void {
    if (!this.listeners[event]) return;
    const callbackIndex = this.listeners[event].indexOf(listener);
    if (callbackIndex >= 0) {
      this.listeners[event].splice(callbackIndex, 1);
    }
  }

  emit(event: Events, data?: unknown): void {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((listener) => listener(data));
  }
}

export default new EventEmitter();
