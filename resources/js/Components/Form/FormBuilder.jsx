import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";

const FormBuilder = ({ fields, onSubmit,buttonText }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    return (
        <form noValidate={true} onSubmit={handleSubmit(onSubmit)} className={'space-y-7'}>
            {fields.map(({ name, label, type, placeholder,rules }) => (
                    <Controller
                        key={`item_${name}`}
                        name={name}
                        control={control}
                        rules={rules}
                        render={({ field}) => (
                            <TextInput
                                label={label}
                                {...field}
                                type={type || 'text'}
                                placeholder={placeholder || ''}
                                error={errors[name]?.message}
                            />
                        )}
                    />
            ))}
            <Button type='submit'>{buttonText}</Button>
        </form>
    );
};

export default FormBuilder;
