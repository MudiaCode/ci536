document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let selectedOption1 = document.querySelector('input[name="question1"]:checked');
        let selectedOption2 = document.querySelector('input[name="question2"]:checked');

        if (selectedOption1 && selectedOption2) {
            let correctCount = 0;

            // Create result messages
            const resultMessage1 = document.createElement('p');
            const resultMessage2 = document.createElement('p');

            // Change value to correct answer and set result messages
            if (selectedOption1.value === 'a') {
                correctCount++;
                resultMessage1.textContent = 'Correct!';
            } else {
                resultMessage1.textContent = 'Incorrect!';
            }

            if (selectedOption2.value === 'b') {
                correctCount++;
                resultMessage2.textContent = 'Correct!';
            } else {
                resultMessage2.textContent = 'Incorrect!';
            }

            // Append result messages directly below each question
            const question1Container = selectedOption1.closest('.question');
            const question2Container = selectedOption2.closest('.question');
            question1Container.appendChild(resultMessage1);
            question2Container.appendChild(resultMessage2);

            // Create overall result message
            const overallResultMessage = document.createElement('p');

            // Set overall result message
            if (correctCount === 2) {
                overallResultMessage.textContent = 'Congrats! All answers are correct!';
            } else {
                overallResultMessage.textContent = `You got ${correctCount} out of 2 questions correct.`;
            }

            // Append overall result message below the form
            quizForm.appendChild(overallResultMessage);
        } else {
            // If not all questions are answered
            const overallResultMessage = document.createElement('p');
            overallResultMessage.textContent = 'Please answer all questions.';
            quizForm.appendChild(overallResultMessage);
        }
    });
});
