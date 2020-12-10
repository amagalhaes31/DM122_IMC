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

    // db.on("populate", async () => {
            
    //   // await db.bmiControl.bulkPut([
    //   //     { date: "2020/12/10", height: 180, weght: 80, bmiValue: 24.69, status: "Normal Weight" },
    //   // ]);

    // });

    db.open();
  }
    
  save(bmiControl) {
    return db.bmiControl.put(bmiControl);
  }
  
}