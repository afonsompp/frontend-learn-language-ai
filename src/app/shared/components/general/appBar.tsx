import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AutoAwesome} from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";

export const ResponsiveAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <AutoAwesome />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Learning Language
                        </Typography>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
