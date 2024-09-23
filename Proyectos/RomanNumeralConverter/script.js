function convertToRoman(num) {
    const romanNumerals = [
        { roman: "M", value: 1000 },
        { roman: "CM", value: 900 },
        { roman: "D", value: 500 },
        { roman: "CD", value: 400 },
        { roman: "C", value: 100 },
        { roman: "XC", value: 90 },
        { roman: "L", value: 50 },
        { roman: "XL", value: 40 },
        { roman: "X", value: 10 },
        { roman: "IX", value: 9 },
        { roman: "V", value: 5 },
        { roman: "IV", value: 4 },
        { roman: "I", value: 1 }
    ];

    let romanStr = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            romanStr += romanNumerals[i].roman;
            num -= romanNumerals[i].value;
        }
    }

    return romanStr;
}

document.getElementById("convert-btn").addEventListener("click", function() {
    const input = document.getElementById("number").value;
    const outputElement = document.getElementById("output");

    if (input === "") {
        outputElement.textContent = "Please enter a valid number";
        return;
    }

    const number = parseInt(input);

    if (number < 1) {
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanNumeral = convertToRoman(number);
        outputElement.textContent = romanNumeral;
    }
});
