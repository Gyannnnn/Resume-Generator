function addNewWeField() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("weFieldContainer", "mt-2");

  let newNode = document.createElement("textarea");
  newNode.classList.add(
    "form-control",
    "weField",
    "bg-transparent",
    "text-white"
  );
  newNode.setAttribute("rows", 3);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add(
    "bg-red-600",
    "px-4",
    "py-1",
    "rounded-md",
    "hover:bg-red-400",
    "mt-2"
  );
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    newDiv.remove();
  };

  newDiv.appendChild(newNode);
  newDiv.appendChild(deleteBtn);

  let weBtn = document.getElementById("weBtn");
  let weDiv = document.getElementById("weDiv");

  weDiv.insertBefore(newDiv, weBtn);
}

function addNewAqField() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("aqFieldContainer", "mt-2");

  let newNode = document.createElement("textarea");
  newNode.classList.add(
    "form-control",
    "aqField",
    "bg-transparent",
    "text-white"
  );
  newNode.setAttribute("rows", 3);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add(
    "bg-red-600",
    "px-4",
    "py-1",
    "rounded-md",
    "hover:bg-red-400"
  );
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    newDiv.remove();
  };

  newDiv.appendChild(newNode);
  newDiv.appendChild(deleteBtn);

  let aqBtn = document.getElementById("aqBtn");
  let aqDiv = document.getElementById("aqDiv");

  aqDiv.insertBefore(newDiv, aqBtn);
}

// Building Resume
const buildResume = () => {
  alert("Generating Resume");

  let nameField = document.getElementById("nameField").value;
  let nameT = document.getElementById("nameT");
  nameT.innerHTML = nameField;

  let contactField  = document.getElementById("contactFeild").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = contactField;

  let addresField = document.getElementById("addresField").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = addresField;

  let facbookField = document.getElementById("facbookField").value;
  let facebookT = document.getElementById("facebookT");
  facebookT.innerHTML = facbookField;

  let instagramField = document.getElementById("instagramField").value;
  let instagramT  = document.getElementById("instagramT");
  instagramT.innerHTML = instagramField;

  let linkedinField = document.getElementById("linkedinField").value;
  let linkedinT = document.getElementById("linkedinT");
  linkedinT.innerHTML = linkedinField;

  let objectiveField = document.getElementById("objectiveField").value;
  let objectiveT = document.getElementById("objectiveT");
  objectiveT.innerHTML = objectiveField;

  let hobbyField = document.getElementById("hobbyField").value;
  let hobbyT = document.getElementById("hobbyT");
  hobbyT.innerHTML = hobbyField;

  let workExperiance = document.getElementsByClassName("weField");
  let workString = '';
  for(let e of workExperiance){
      workString = workString + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = workString;

  let aqField = document.getElementsByClassName("aqField");
  let aqString = '';
  for(let e of aqField){
      aqString = aqString+`<li>${e.value}</li>`
  }
  document.getElementById("aqT").innerHTML = aqString;

  // code for file
  let file = document.getElementById("imageField").files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("imgt").src = e.target.result;
    }
    reader.readAsDataURL(file);
  }

  // Toggle visibility of the template and form
  document.querySelector('.form').classList.add('hidden');
  document.querySelector('.template').classList.remove('hidden');
};

function printResume(){
  window.print();
}
