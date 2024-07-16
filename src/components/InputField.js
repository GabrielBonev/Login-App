import React from 'react';

const InputField = ({ label, type, value, onChange, onBlur }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type={type} value={value} onBlur={onBlur} onChange={onChange} />
        </div>
    );
};

export default InputField;

