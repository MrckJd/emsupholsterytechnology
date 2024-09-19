function onSelectedYear(){
    const selectedYear = document.getElementById("years");
    if(selectedYear.value=="2021"){
        document.getElementById("makersDiv").classList.remove("hidden");
    }else{
        document.getElementById("makersDiv").classList.add("hidden");
    }
}

function onSelectedMake(maker){
    const selectedMake = document.getElementById("makers");
    switch(selectedMake.value){
        case "BUICK":
            document.getElementById(maker).classList.remove("hidden");
            break;
        case "CADILLAC":
            selectedModel = document.getElementById('CadillacModelsDiv');
            break;
        case "CHEVROLET":
            selectedModel = document.getElementById('ChevroletModelsDiv');
            break;
        default: 
            console.log('test');

    }
}

function onSelectedChevroletModels(){
    const selectedChevroletModels = document.getElementById('ChevroletModels');
    if(selectedChevroletModels.value=="SILVERADO"){
        document.getElementById("TrimDiv").classList.remove("hidden");
    }
}