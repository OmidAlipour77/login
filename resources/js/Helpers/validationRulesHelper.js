const createValidationRule = (rules, confirmPasswordFieldName = '') => {
    let validationRule = {};

    // If 'required' is not explicitly set to false, we add the required rule
    if (rules.required !== false) {
        validationRule.required = rules.required || "This field is required"; // Default message if no custom message
    }

    // If there's a pattern rule, we add it
    if (rules.pattern) {
        validationRule.pattern = rules.pattern;
    }

    // If there's a minLength rule, we add it
    if (rules.minLength) {
        validationRule.minLength = rules.minLength;
    }

    // If there's a maxLength rule, we add it
    if (rules.maxLength) {
        validationRule.maxLength = rules.maxLength;
    }

    // If there's a custom message for validation, we add it
    if (rules.message) {
        validationRule.message = rules.message;
    }

    // If it's a confirmPassword field, add validation to check if it matches the password
    if (confirmPasswordFieldName) {
        validationRule.validate = {
            value: (value, context) => {
                const { [confirmPasswordFieldName]: password } = context || {};
                if (value !== password) {
                    return 'Passwords do not match';
                }
                return true;
            }
        };
    }

    return validationRule;
};

// Email validation rule
export const emailValidation = (required = true) => createValidationRule({
    required: required ? "Email is required" : false,
    pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: "Invalid email format"
    }
});

// Password validation rule
export const passwordValidation = (required = true) => createValidationRule({
    required: required ? "Password is required" : false,
    minLength: {
        value: 8,
        message: "Password must be at least 8 characters"
    },
    maxLength: {
        value: 20,
        message: "Password can't be longer than 20 characters"
    }
});

// Username validation rule
export const usernameValidation = (required = true) => createValidationRule({
    required: required ? "Username is required" : false,
    minLength: {
        value: 3,
        message: "Username must be at least 3 characters"
    },
    maxLength: {
        value: 15,
        message: "Username can't be longer than 15 characters"
    }
});

// Phone validation rule
export const phoneValidation = (required = true) => createValidationRule({
    required: required ? "Phone number is required" : false,
    pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be exactly 10 digits"
    }
});

// Age validation rule
export const ageValidation = (required = true) => createValidationRule({
    required: required ? "Age is required" : false,
    min: {
        value: 18,
        message: "You must be at least 18 years old"
    },
    max: {
        value: 100,
        message: "Age can't be greater than 100"
    }
});

// Custom helper for other fields
export const requiredField = (message = "This field is required") => ({
    required: message
});

// Password confirmation validation rule
export const confirmPasswordValidation = (passwordFieldName) => createValidationRule({
    required: "Confirm Password is required",
}, passwordFieldName);
