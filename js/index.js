const table = document.getElementById("table");

const tr1 = document.createElement("tr");
tr1.classList.add("1");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 1;
  td.classList.add(x + 1);
  tr1.appendChild(td);
}
table.appendChild(tr1);

const tr2 = document.createElement("tr");
tr2.classList.add("2");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 20;
  td.classList.add(x + 1);
  tr2.appendChild(td);
}
table.appendChild(tr2);

const tr3 = document.createElement("tr");
tr3.classList.add("3");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 30;
  td.classList.add(x + 1);
  tr3.appendChild(td);
}
table.appendChild(tr3);

const tr4 = document.createElement("tr");
tr4.classList.add("4");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 40;
  td.classList.add(x + 1);
  tr4.appendChild(td);
}
table.appendChild(tr4);

const tr5 = document.createElement("tr");
tr5.classList.add("5");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 50;
  td.classList.add(x + 1);
  tr5.appendChild(td);
}
table.appendChild(tr5);

const tr6 = document.createElement("tr");
tr6.classList.add("6");
for (let x = 0; x < 10; x++) {
  const td = document.createElement("td");
  td.innerText = x + 60;
  td.classList.add(x + 1);
  tr6.appendChild(td);
}
table.appendChild(tr6);

const tr7 = document.createElement("tr");
tr7.classList.add("7");
for (let x = 0; x < 7; x++) {
  const td = document.createElement("td");
  td.innerText = x + 70;
  td.classList.add(x + 1);
  tr7.appendChild(td);
}
table.appendChild(tr7);

// let tableArray = table;
// tableArray = Array.from(table);

let arrayNum = [];

for (let i = 0; i < 76; i++) {
  arrayNum.push([]);
}
for (let x = 0; x < 76; x++) {
  arrayNum[x].push(x + 1);
}

const buttonRandom = document.querySelector("button");
buttonRandom.onclick = () => {
  const numeroRandom = Math.floor(Math.random() * 77);
  console.log(numeroRandom);
  console.log(table.tr2);
  if (numeroRandom === arrayNum[numeroRandom]) {
    console.log(td.classList(numeroRandom));
  }
};
