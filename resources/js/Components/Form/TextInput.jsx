import React from 'react';
import {Link} from '@inertiajs/react';
import InputLabel from "./InputLabel.jsx";
import InputError from "./InputError.jsx";

export default function TextInput({label, error, type = "text", ...props}) {
    const errorClass = error ? 'border border-red-600 shadow-red-400 shadow-sm' : '';
    return (
        <div className={'relative'}>

            {label ?
                <InputLabel htmlFor={props?.id} title={label} required={props?.inputRequired}/> : ''}

            <input
                type={type}
                className={`${errorClass} w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-light-primary focus:shadow-light-primary focus:shadow-sm  focus:border-transparent`}
                {...props}
                value={props?.value ?? ''}
            />

            {error ? <InputError className={'absolute pt-[3px]'} message={error}/> : ''}
        </div>
    );
};
