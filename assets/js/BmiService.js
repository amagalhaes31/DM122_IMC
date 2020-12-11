import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs";

let db;

export default class DmiService {

  constructor() {
    this.initializeDB();
  }

  initializeDB() {
    
    db = new Dexie("dmiDB");

    db.version(1).stores({
      bmiControl: "++id",
    });

    db.open();
  }
    
  save(bmiControl) {
    return db.bmiControl.put(bmiControl);
  }

  getAll() {
    return db.bmiControl.toArray();
  }
}