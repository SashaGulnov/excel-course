import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided` );
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethod(listener);
      const name = this.name || '';
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        );
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }
  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethod(listener);
      this.$root.off(listener, this[method]);
    });
  }
}
function getMethod(eventName) {
  return 'on' + capitalize(eventName);
}
