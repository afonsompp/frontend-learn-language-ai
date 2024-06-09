import React from 'react';
import { Controller, Control} from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface SelectFieldProps {
    name: string,
    control: Control<any>,
    label: string,
    helperText?: string,
    sx?: React.CSSProperties,
    defaultValue?: string,
    width?: number | string,

}

export const TextAreaField: React.FC<SelectFieldProps> = ({
                                                           name,
                                                           control,
                                                           label,
                                                           helperText = '',
                                                           defaultValue = '',
                                                           sx = '',
                                                       }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <TextField
                    sx={{sx}}
                    {...field}
                    label={label}
                    fullWidth
                    multiline
                    rows={4}
                    defaultValue={defaultValue}
                    helperText={helperText}
                    variant="filled"
                />
            )}
        />
    );
};

