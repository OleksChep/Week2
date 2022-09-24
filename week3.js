var facilitator;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


facilitator = [];


document.getElementById('enter').addEventListener('click', (event) => {
  facilitator.push(getNumberOrString(document.getElementById('text').value));
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  facilitator.forEach((facilitator) => {
    let new_ul = document.createElement('ul');
    new_ul.innerText = facilitator;

    element_list.appendChild(new_ul);
  });

});

document.getElementById('facilitator').addEventListener('click', (event) => {
  let new_div = document.createElement('div');
  let element_list2 = document.getElementById('list');
  element_list2.innerText = randomMember(facilitator);

  event.target.appendChild(new_div);

});
