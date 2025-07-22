const table = document.querySelector("table#data-table");
const tEntries = table.querySelector("tbody");

const nRow = document.createElement("tr");
nRow.innerHTML = "<td>Charlie</td><td>92</td>";

tEntries.append(nRow);

//
const tRowEntry = document.querySelectorAll("tbody tr");
console.log(tRowEntry);

let sum = 0;

for (let i in tRowEntry) {
    if (String(tRowEntry[i].innerText).includes("Bob")) {
        tRowEntry[i].cells[1].innerText = "89";
    }

    if (String(tRowEntry[i].innerText).includes("Alice")) {
        tRowEntry[i].classList.add("top-scorer");
    }
}

sum +=  Number(tRowEntry[0].cells[1].innerText);
sum +=  Number(tRowEntry[1].cells[1].innerText);
sum +=  Number(tRowEntry[2].cells[1].innerText);

const average = sum / 3;

const tFoot = document.createElement("tfoot");
tFoot.innerHTML = `<tr><td>Average</td><td>${average}</td></tr>`;
table.append(tFoot);
