function onSelectedYear(){
    const selectedYear = document.getElementById("years").value;
    const modelsDiv = document.getElementById("modelsDiv");
    const makersDiv = document.getElementById("makersDiv");
    const modelsSelect = document.getElementById("models");
    const makersSelect = document.getElementById("makers");

    modelsSelect.innerHTML = '<option value="">Select Make</option>';
    makersSelect.innerHTML = '<option value="">Select Make</option>';
    if (selectedYear && MakeByYear[selectedYear]) {
        const makes = MakeByYear[selectedYear];
        makersDiv.classList.remove('hidden');
  
        makes.forEach(make => {
          const option = document.createElement("option");
          option.value = make;
          option.text = make;
          makersSelect.appendChild(option);
        });
        const option = document.createElement("option");
        option.value = "DON'T SEE MY OPTION";
        option.text = "DON'T SEE MY OPTION";
        makersSelect.appendChild(option);
      } else {
        makersDiv.classList.add('hidden');
        modelsDiv.classList.add('hidden');
      }
}

function onSelectedMake(){
    const selectedYear = document.getElementById("years").value;
    const makersSelect = document.getElementById("makers").value;
    const modelsDiv = document.getElementById("ModelsDiv");
    const modelsSelect = document.getElementById("models");
    const trimsDiv = document.getElementById('TrimDiv');
    const trimsSelect = document.getElementById("trims");

    modelsSelect.innerHTML = '<option value="">Select Model</option>';
    trimsSelect.innerHTML = '<option value="default">Select Trim</option>';
    if (selectedYear && makersSelect && MakeModel[selectedYear][makersSelect]) {
        const model = MakeModel[selectedYear][makersSelect];
        modelsDiv.classList.remove('hidden');
  
        model.forEach(model => {
          const option = document.createElement("option");
          option.value = model;
          option.text = model;
          modelsSelect.appendChild(option);
        });
        const option = document.createElement("option");
        option.value = "DON'T SEE MY OPTION";
        option.text = "DON'T SEE MY OPTION";
        modelsSelect.appendChild(option);
        onSelectedTrim();
      } else {
        onSelectedTrim();
        modelsDiv.classList.add('hidden');
        trimsDiv.classList.add('hidden');
      }
}

function onSelectedModel(){
    const selectedYear = document.getElementById("years").value;
    const makersSelected = document.getElementById("makers").value;
    const modelsSelected = document.getElementById("models").value;
    const trimsDiv = document.getElementById("TrimDiv");
    const trimsSelect = document.getElementById("trims");

    trimsSelect.innerHTML = '<option value="default">Select Trim</option>';
    if(selectedYear && makersSelected && modelsSelected && MakeTrim[selectedYear][makersSelected][modelsSelected]) {
      const trim = MakeTrim[selectedYear][makersSelected][modelsSelected]
      trimsDiv.classList.remove('hidden');

      trim.forEach(trim =>{
        const option = document.createElement('option');
        option.value = trim;
        option.text = trim;
        trimsSelect.appendChild(option);
      })
      const option = document.createElement("option");
      option.value = "DON'T SEE MY OPTION";
      option.text = "DON'T SEE MY OPTION";
      trimsSelect.appendChild(option);
      onSelectedTrim();
    }else{
      trimsDiv.classList.add('hidden');
      document.getElementById("nextButton").classList.add('hidden');
    }
}

function onSelectedTrim(){
  const trimsSelect = document.getElementById("trims");
  if(trimsSelect.value=="default"){
    document.getElementById("nextButton").classList.add('hidden');
  }else{
    document.getElementById("nextButton").classList.remove('hidden');
  }
  
}

function onNextButtonClick(){
  const selectedYear= document.getElementById('years').value;
  const selectedMake= document.getElementById('makers').value;
  const selectedModel= document.getElementById('models').value;

  sessionStorage.setItem('selectedCar',JSON.stringify({selectedYear, selectedMake, selectedModel}));

  window.location.href = "../../src/chooseDesign/step2.html";
}