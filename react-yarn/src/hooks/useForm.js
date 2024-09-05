import { useState } from 'react';

// Define validation function type
const useForm = (initialValues, validations) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        // Validate input
        if (validations[name]) {
            const error = validations[name](value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {};
        Object.keys(values).forEach((key) => {
            if (validations[key]) {
                const error = validations[key](values[key]);
                if (error) newErrors[key] = error;
            }
        });

        setErrors(newErrors);

        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', values);
        }
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useForm;
