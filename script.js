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
            resultText = 'Você é o Tom Holland';
            imageUrl = 'images/tom_holland.jpg'; // Caminho para a imagem local
            break;
        case 'B':
            resultText = 'Você é o Tobey Maguire';
            imageUrl = 'images/toby_maguire.jpg'; // Caminho para a imagem local
            break;
        case 'C':
            resultText = 'Você é o Andrew Garfield';
            imageUrl = 'images/andrew_garfield.jpg'; // Caminho para a imagem local
            break;
        case 'D':
            resultText = 'Você é o Miles Morales';
            imageUrl = 'images/miles_morales.jpg'; // Caminho para a imagem local
            break;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('result-image').innerHTML = `<img src="${imageUrl}" alt="${resultText}" style="width: 300px; height: auto;">`;
}

