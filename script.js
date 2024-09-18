let currentTab = 1;

function showTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.style.display = index === tabIndex - 1 ? 'block' : 'none';
    });
}

function nextTab(tabIndex) {
    if (tabIndex > currentTab) {
        const currentInputs = document.querySelectorAll(`input[name="q${currentTab}"]`);
        if (![...currentInputs].some(input => input.checked)) {
            alert('Por favor, selecione uma opção antes de continuar.');
            return;
        }
    }
    currentTab = tabIndex;
    showTab(currentTab);
}

function prevTab(tabIndex) {
    currentTab = tabIndex;
    showTab(currentTab);
}

function calculateResult() {
    const answers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (const [name, value] of formData.entries()) {
        if (answers[value] !== undefined) {
            answers[value]++;
        }
    }

    let maxAnswer = 'A';
    for (const key in answers) {
        if (answers[key] > answers[maxAnswer]) {
            maxAnswer = key;
        }
    }

    let resultText = '';
    let imageUrl = '';
    switch (maxAnswer) {
        case 'A':
            resultText = '';
            imageUrl = 'images/1Untitled Project.jpg';
            break;
        case 'B':
            resultText = 'Você é o Tobey Maguire';
            imageUrl = 'images/tobey_maguire.jpg';
            break;
        case 'C':
            resultText = '';
            imageUrl = 'images/Untitled Project.jpg';
            break;
        case 'D':
            resultText = 'Você é o Miles Morales';
            imageUrl = 'images/miles_morales.jpg';
            break;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('result').innerHTML += `<img src="${imageUrl}" alt="${resultText}" style="width: 300px; height: auto;">`;
}

// Inicializa o quiz mostrando a primeira aba
showTab(currentTab);
