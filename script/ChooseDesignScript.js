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
          console.log(makes);
        });
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

    modelsSelect.innerHTML = '<option value="">Select Make</option>';
    if (selectedYear && makersSelect && MakeModel[selectedYear][makersSelect]) {
        const model = MakeModel[selectedYear][makersSelect];
        console.log(model);
        modelsDiv.classList.remove('hidden');
  
        model.forEach(model => {
          const option = document.createElement("option");
          option.value = model;
          option.text = model;
          modelsSelect.appendChild(option);
        });
      } else {
        modelsDivDiv.classList.add('hidden');
      }
}

function onSelectedChevroletModels(){
    const selectedChevroletModels = document.getElementById('ChevroletModels');
    if(selectedChevroletModels.value=="SILVERADO"){
        document.getElementById("TrimDiv").classList.remove("hidden");
    }
}