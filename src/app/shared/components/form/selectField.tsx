import React from 'react';
import {Controller, Control} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface SelectFieldProps {
    name: string;
    control: Control<any>;
    label: string;
    helperText?: string;
    className?: string;
    defaultValue?: string;
    options: Array<{ value: string; label: string }>;
    width?: number | string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
                                                     name,
                                                     control,
                                                     label,
                                                     helperText = '',
                                                     defaultValue = '',
                                                     options,
                                                     className
                                                 }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <TextField
                    {...field}
                    className={className}
                    select
                    fullWidth
                    label={label}
                    defaultValue={defaultValue}
                    helperText={helperText}
                    variant="standard"
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
};

