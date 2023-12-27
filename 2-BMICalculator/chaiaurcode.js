const h = document.getElementById("height")
const w = document.getElementById("weight")

const results = document.getElementById("results")

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseInt(h.value);
    const weight = parseInt(w.value);
      
    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      results.innerHTML = `<span>${bmi}</span>`;
    }
  });