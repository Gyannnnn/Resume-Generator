# Resume Builder

Resume Builder is a simple web application that allows users to create a resume by filling out a form. The form data is dynamically populated into a resume template, which can be printed or saved as a PDF.

## Features

- Add and remove fields for work experience and academic qualifications.
- Upload and display a profile image.
- Populate the resume template with user-provided data.
- Print the generated resume.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a web browser to run this project.

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/Gyannnnn/Resume-Generator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Resume-Generator
    ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Fill out the form with your personal information, contact details, social media links, and objective.
2. Add your work experience by clicking the "Add Work Experience" button.
3. Add your academic qualifications by clicking the "Add Qualification" button.
4. Upload your profile image using the "Choose File" button.
5. Click the "Generate Resume" button to see your information populated in the resume template.
6. Print the resume by clicking the "Print" button.

## Code Overview

### HTML Structure

- `index.html` contains the form and the resume template.
- The form includes fields for personal information, contact details, social media links, and objective.
- Buttons to add work experience and academic qualifications dynamically create new textarea elements.

### CSS Styles

- `styles.css` contains basic styles for the form and resume template.
- TailwindCSS classes are used for styling buttons and layout elements.

### JavaScript Functions

- `addNewWeField()`: Adds a new work experience field.
- `addNewAqField()`: Adds a new academic qualification field.
- `buildResume()`: Populates the resume template with data from the form.
- `printResume()`: Triggers the print functionality of the browser.

### JavaScript Code

```javascript
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
