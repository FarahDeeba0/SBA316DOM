document.addEventListener('DOMContentLoaded', function() {
    // Cache elements using getElementById and querySelector
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const converterForm = document.getElementById('converterForm');
    const resultParagraph = document.getElementById('result');
    const celsiusToFahrenheitButton = document.getElementById('celsiusToFahrenheit');
    const fahrenheitToCelsiusButton = document.getElementById('fahrenheitToCelsius');


    //error message elements
    const errorMessages = {
        celsius: createErrorMessage(),
        fahrenheit: createErrorMessage()
    };


    // appendChild requirement
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach((group, index) => {
        group.appendChild(errorMessages[index === 0 ? 'celsius' : 'fahrenheit']);
    });


    // Event listeners for input validation
    celsiusInput.addEventListener('input', function() {
        validateTemperatureInput(celsiusInput, errorMessages.celsius);
    });


    fahrenheitInput.addEventListener('input', function() {
        validateTemperatureInput(fahrenheitInput, errorMessages.fahrenheit);
    });

    
    // Event listeners for temperature conversion
    celsiusToFahrenheitButton.addEventListener('click', function() {
        if (validateTemperatureInput(celsiusInput, errorMessages.celsius)) {
            const celsiusValue = parseFloat(celsiusInput.value);
            const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
            resultParagraph.textContent = `${celsiusValue} Celsius = ${fahrenheitValue.toFixed(2)} Fahrenheit`;
        }
    });

    fahrenheitToCelsiusButton.addEventListener('click', function() {
        if (validateTemperatureInput(fahrenheitInput, errorMessages.fahrenheit)) {
            const fahrenheitValue = parseFloat(fahrenheitInput.value);
            const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
            resultParagraph.textContent = `${fahrenheitValue} Fahrenheit = ${celsiusValue.toFixed(2)} Celsius`;
        }
    });

    // Function to create error message element
    function createErrorMessage() {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Invalid input';
        errorMessage.style.display = 'none';
        return errorMessage;
    }

    // Function for input validation
    function validateTemperatureInput(inputField, errorMessageElement) {
        const inputValue = inputField.value.trim();
        if (inputValue === '' || isNaN(parseFloat(inputValue))) {
            inputField.classList.add('error');
            errorMessageElement.style.display = 'block';
            return false;
        } else {
            inputField.classList.remove('error');
            errorMessageElement.style.display = 'none';
            return true;
        }
    }
});
