document.getElementById("calculate").addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("Result");
  const bmi = (weight / (((height / 100) * height) / 100)).toFixed(2);

  if (isNaN(height)) {
    result.innerHTML = `Plese give a valid height`;
  } else if (isNaN(weight)) {
    result.innerHTML = `Plese give a valid weight`;
  } else {
    result.innerHTML = `${bmi}`;
  }

  const previousBmiIndex = document.getElementById("bmiIndex");
  if (previousBmiIndex) {
    previousBmiIndex.remove();
  }

  const bmiIndex = document.createElement("h2");
  bmiIndex.id = "bmiIndex"


  if (bmi <= 18.5) {
    bmiIndex.innerHTML = `You are underweight`;
  } else if (bmi <= 25) {
    bmiIndex.innerHTML = `You weight is normal`;
  } else if (bmi <= 30) {
    bmiIndex.innerHTML = `You are overweight`;
  } else if (bmi > 30) {
    bmiIndex.innerHTML = `You are obese`;
  } else {
    bmiIndex.innerHTML = ``;
  }
  document.body.appendChild(bmiIndex);
  
});
