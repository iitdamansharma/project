const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};
