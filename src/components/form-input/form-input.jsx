import React from 'react';

import {Group, FormInputLabel, Input } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <Group>
        <Input onChange={handleChange} {...otherProps}/>
        {
            label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>)
        }
    </Group>
)

export default FormInput