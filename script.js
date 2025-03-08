document.getElementById("calculate").addEventListener("click" , (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("Result")
    const bmi = weight / ((height / 100 *height / 100 )).toFixed(2);
    result.innerHTML = `${bmi}`;
})


