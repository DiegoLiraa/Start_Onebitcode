function calculateTip(event) {
  event.preventDefault()
  let bill = document.getElementById('bill').value;
  let service_Quality = document.getElementById('service_Quality').value;
  let numofPeople = document.getElementById('people').value;
  
 if(bill == '' | service_Quality ==0){
    alert("Por favor, preencha os valores")
    return;
 }

 if(numofPeople == "" | numofPeople <=1) {
    numofPeople = 1;
    document.getElementById('each').style.display = "none"
  } else {
    document.getElementById('each').style.display = "block"
  }
 
  let total = (bill * service_Quality) / numofPeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);