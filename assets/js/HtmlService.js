const doneCssClass = "done";
const dataItemId = "data-item-id";

export default class HtmlService {
    
  constructor(){
    this.bindFormEvent();
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
      
      let listAll =  `<td>${date}</td>
                      <td>${height}</td>
                      <td>${weight}</td>
                      <td>${bmi.value}</td>
                      <td>${status.value}</td>
                      `
    
      let list = document.getElementById("listAll");    
      list.insertAdjacentHTML("afterend",listAll);
    })    
    
  }
}
