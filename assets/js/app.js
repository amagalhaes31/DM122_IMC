import HtmlService from "./HtmlService.js";
import BmiService from "./BmiService.js";

class App {
  constructor() {
    this.registerServiceWorker();
    this.initialize();
  }
  
  initialize() {
    new HtmlService(new BmiService());
  }

  registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      const onsuccess = () => console.log("[Service Worker] Registered");
      const onfailure = () => console.log("[Service Worker] Failed");

      navigator.serviceWorker
        .register("sw.js")
        .then(onsuccess)
        .catch(onfailure);
    }
  }
}

new App();

