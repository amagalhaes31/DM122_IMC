import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs";

let db;

export default class DmiService {

  constructor() {
    //this.initializeDB();
  }

  initializeDB() {
    
    db = new Dexie("imcDB");

    db.version(1).stores({
      tasks: "++id,description",
    });

    db.open();
  }
    
}