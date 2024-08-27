function calculateResult() {
    const answers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (const [name, value] of formData.entries()) {3. Como você lida com conflitos pessoais?
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
    switch (maxAnswer) {
        case 'A':
            resultText = 'Você é o Tom Holland';
            break;
        case 'B':
            resultText = 'Vocẽ é o Tobey Maguare';
            break;
        case 'C':
            resultText = 'Voce é o Andrew Garfiel';
            break;
        case 'D':
            resultText = 'Você é o Milles Morales';
            break;
    }

    document.getElementById('result').innerText = resultText;
}
