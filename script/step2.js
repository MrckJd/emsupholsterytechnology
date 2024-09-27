function fetchCar() {
    const cardContainer = document.getElementById('cardContainer')
    const storedCar = sessionStorage.getItem('selectedCar');
    const { selectedYear, selectedMake, selectedModel } = JSON.parse(storedCar);

    const leatherPath = leather_path[selectedYear][selectedMake][selectedModel];

    leatherPath.forEach(design => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('bg-[#e34343]', 'rounded', 'h-80', 'p-3', 'shadow-lg', 'shadow-black');

        const img = document.createElement('img');
        img.src = design;
        img.alt = 'Design Image';
        img.classList.add('rounded-t');

        const button = document.createElement('button');
        button.innerText = 'Choose This Design';
        button.classList.add('py-2', 'px-auto', 'bg-[#a6a6a2]', 'w-full', 'rounded', 'my-6', 'font-bold');

        cardDiv.appendChild(img);
        cardDiv.appendChild(button);

        cardContainer.appendChild(cardDiv);
    });
}
