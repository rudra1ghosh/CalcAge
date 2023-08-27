const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  if(age<10){
    alert("Ooo such a baby!");
  }
  else if(age>10 && age<18){
    alert("Have fun, but gotta study tho !");
  }
  else if(age>18 && age<21){
    alert("Nahuh still not legal to sip a drink XD");
  }
  else if(age>21 && age<60){
    alert("Age of Wisdom, keep going !");
  }
  else {
    alert("Enlighten others with your experience of life : )");
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
