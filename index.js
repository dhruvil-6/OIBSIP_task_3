let JsonObj = {
    title,
    Description,
};

console.log(JsonObj);

let myJsonStr = JSON.stringify(JsonObj);
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);

function getAndUpdate() {
    console.log("Updating List...");
    title = document.getElementById("title").value;
    Desc = document.getElementById("Description").value;

    if (localStorage.getItem("itemsJson") == null) {
        JsonObjArray = [];
        JsonObjArray.push([title, Desc]);
        localStorage.setItem("itemsJson", JSON.stringify(JsonObjArray));
    } else {
        let JsonObjArrayStr = localStorage.getItem("itemsJson");
        JsonObjArray = JSON.parse(JsonObjArrayStr);
        JsonObjArray.push([title, Desc]);
        localStorage.setItem("itemsJson", JSON.stringify(JsonObjArray));
    }
    update();
}

function update() {
    if (localStorage.getItem("itemsJson") == null) {
        JsonObjArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(JsonObjArray));
    } else {
        let JsonObjArrayStr = localStorage.getItem("itemsJson");
        JsonObjArray = JSON.parse(JsonObjArrayStr);
    }

    // Populate the table
    let tableContent = document.getElementById("tabContent");
    let str = "";
    JsonObjArray.forEach((element, index) => {
        str += `
        <tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn-delete" onclick="Delete(${index})">X</button></td>
        </tr> `;
    });
    tableContent.innerHTML = str;
}

let add = document.getElementById("btn");
add.addEventListener("click", getAndUpdate);
update();
function Delete(item) {
    console.log("X", item);
    JsonObjArrayStr = localStorage.getItem("itemsJson");
    JsonObjArray = JSON.parse(JsonObjArrayStr);
    JsonObjArray.splice(item, 1);
    localStorage.setItem("itemsJson", JSON.stringify(JsonObjArray));
    update();
}