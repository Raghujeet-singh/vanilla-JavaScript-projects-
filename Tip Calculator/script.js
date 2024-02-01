const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')



let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
  
  let bill = Number(billInput.value)

  
  let tipPercentage = Number(tipInput.value) / 100
  
  
  let totalTip = bill * tipPercentage

  
  let totalBill = totalTip + bill

 
  let perPersonBill = totalBill / numberOfPeople

  

  perPersonTotalDiv.innerText = `₹${perPersonBill.toFixed(2)}`
  
}


const increasePeople = () => {

  numberOfPeople +=1

 
  numberOfPeopleDiv.innerText = numberOfPeople

  

}

const decreasePeople = () => {
  
  if(numberOfPeople <= 1) return
 
  
  
  numberOfPeople -=1

  
  numberOfPeopleDiv.innerText = numberOfPeople

  
}
