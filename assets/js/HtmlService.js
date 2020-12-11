const doneCssClass = "done";
const dataItemId = "data-item-id";

export default class HtmlService {
    
  constructor(bmiService){
    this.bmiService = bmiService; 
    this.bindFormEvent();
    this.listAllDmi();
  }

  bindFormEvent() {
    
    const bmiBtn = document.querySelector('.bmi-button');

    bmiBtn.addEventListener('click', (e) => {

      e.preventDefault();
      
      let date = document.getElementById("date").value;
      let height = document.getElementById("height").value;
      let weight = document.getElementById("weight").value;
      let status = document.getElementById("status");
      let bmi = document.getElementById("bmi");
      bmi.value = ((weight / (height * height)) * 10000).toFixed(2);
      
      if(bmi.value < 18.50)
        status.value = "Underweight";
      else if(bmi.value >= 18.50 & bmi.value < 24.90)
        status.value = "Normal Weight";
      else if(bmi.value >= 24.90 & bmi.value < 29.90)
        status.value = "Overweight";
      else
        status.value = "Obesity";            
        
      this.addBMI(date, height, weight, bmi.value, status.value);

    })

  }

  async addBMI(date, height, weight, bmiValue, status){
    const bmi = {date, height, weight, bmiValue, status};
    const bmiId = await this.bmiService.save(bmi);
    this.addToHtmlList(bmi);
  }

  async listAllDmi() {
    const bmi = await this.bmiService.getAll();
    bmi.forEach(bmiList => this.addToHtmlList(bmiList));
  }

  addToHtmlList(bmiList) {
    let listAll =  `<td>${bmiList.date}</td>
                    <td>${bmiList.height}</td>
                    <td>${bmiList.weight}</td>
                    <td>${bmiList.bmiValue}</td>
                    <td>${bmiList.status}</td>                 
                    `
    let list = document.getElementById("listAll");  
    list.insertAdjacentHTML("afterend", listAll);  
  }

}
