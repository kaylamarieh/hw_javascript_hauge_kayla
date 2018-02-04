function howdy() {
    return 'Kayla Hauge says Hello!';
}

howdy();

var numba = function (string) {
    if (string.length < 7) {
        return 'What a short little word!';
    }
    if (string.length > 7) {
        return "I'm sorry, but that's too many to count.";
    }
    if (string.length === 7) {
        return '7, what a perfect choice!';
    }
};

numba('7');
numba('seventy');
numba('university');
