import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Box, Button, Grid, LinearProgress, Slider} from "@mui/material";
import {SelectField, InputField, Item, ResponsiveAppBar, SliderField, TextAreaField} from "../../shared/components";
import Typography from "@mui/material/Typography";
import {generateText} from "../../shared/services/TextGeneratorService";

interface IFormInput {
    words: number
    nativeLanguage: string;
    theme: string;
    learningLanguage: string;
    level: { label: string; value: string };
}

const options = [
    {value: 'beginner', label: 'Beginner'},
    {value: 'intermediate', label: 'Intermediate'},
    {value: 'advanced', label: 'Advanced'}
];


export const Home = () => {
    const {control, handleSubmit} = useForm<IFormInput>();

    const [loading, setLoading] = useState(false);


    const onSubmit = (data: IFormInput) => {
        setLoading(true); // Set loading state to false after the operation is complete
        setTimeout(() => {
            setLoading(false); // Set loading state to false after the operation is complete
        }, 1000);

    }

    return (
        <div>
            <ResponsiveAppBar/>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                noValidate
                autoComplete="off"
                sx={{flexGrow: 1, margin: '3vw'}}
            >
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Item>
                            <InputField
                                name="nativeLanguage"
                                control={control}
                                label="Native language"
                                helperText="Please enter the you native language"
                                defaultValue=""
                            />
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <InputField
                                name="learningLanguage"
                                control={control}
                                label="Language to learn"
                                helperText="Please enter the language you wish to learn"
                                defaultValue=""
                            />
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <SelectField
                                name="level"
                                control={control}
                                label="Select your experience"
                                helperText="Please select your experience level"
                                defaultValue=""
                                options={options}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <Typography sx={{color: 'rgba(255, 255, 255, 0.7)', mt: 1}} id="input-slider">
                                Text Length:
                            </Typography>
                            <SliderField
                                name="words"
                                control={control}
                                defaultValue={1000}
                                min={100}
                                step={100}
                                max={3000} />
                        </Item>
                    </Grid>
                    <Grid xs={12}>
                        <Item>
                            <TextAreaField
                                name="theme"
                                control={control}
                                label="The topic of the text that the AI will generate for you."
                                defaultValue=""
                            />
                        </Item>
                    </Grid>
                    <Grid xs={12}>
                        <Item>
                            <Button type="submit" disabled={loading} fullWidth variant="contained">Submit</Button>
                        </Item>
                    </Grid>
                    <Grid xs={12}>
                        <Item>
                            {loading && <LinearProgress/>}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};
