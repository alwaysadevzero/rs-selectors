import {Listener} from './types';

class EventEmitter<T = unknown> {
    private listeners: Record<string, Listener<T>[]> = {};
  
    on(event: string, listener: Listener<T>): void {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
  
    off(event: string, listener: Listener<T>): void {
      if (!this.listeners[event]) return;
      const callbackIndex = this.listeners[event].indexOf(listener);
      if (callbackIndex >= 0) {
        this.listeners[event].splice(callbackIndex, 1);
      }
    }
  
    emit(event: string, data?: T): void {
      if (!this.listeners[event]) return;
      this.listeners[event].forEach((listener) => listener(data));
    }
  }