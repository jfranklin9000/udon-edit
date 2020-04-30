import { api } from '/api';
import { store } from '/store';

export class Subscription {
  start() {
    if (api.authTokens) {
      this.initializeUdonedit();
    } else {
      console.error("~~~ ERROR: Must set api.authTokens before operation ~~~");
    }
  }

  initializeUdonedit() {
    api.bind('/primary', 'PUT', api.authTokens.ship, 'udonedit',
      this.handleEvent.bind(this),
      this.handleError.bind(this));
  }

  handleEvent(diff) {
    store.handleEvent(diff);
  }

  handleError(err) {
    console.error(err);
    api.bind('/primary', 'PUT', api.authTokens.ship, 'udonedit',
      this.handleEvent.bind(this),
      this.handleError.bind(this));
  }
}

export let subscription = new Subscription();
