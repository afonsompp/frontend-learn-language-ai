import React from 'react';
import {Controller, Control} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import {Slider} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

interface SliderFieldProps {
    name: string,
    control: Control<any>,
    min: number,
    max: number,
    defaultValue: number,
    step?: number,


}

export const SliderField: React.FC<SliderFieldProps> = ({
                                                            name,
                                                            control,
                                                            min = 1,
                                                            max = 10,
                                                            step = 1,
                                                            defaultValue = 5

                                                        }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Slider
                    {...field}
                    defaultValue={defaultValue}
                    min={min}
                    step={step}
                    max={max}
                    aria-label="Default"
                    valueLabelDisplay="auto"/>
            )}
        />
    )
};

