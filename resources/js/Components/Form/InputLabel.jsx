import React from 'react';
import { Link } from '@inertiajs/react';

export default function InputLabel({htmlFor,title,required=false}) {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-gray-800 mb-1"
        >
            {title} {(required ? <span className={'text-red-600'}>*</span> : '')}
        </label>
    );
};
