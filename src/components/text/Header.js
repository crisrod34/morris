import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Welcome() {
    return (
        <Box sx={{ my:4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Free AI Content Generator
            </Typography>
            <Typography variant="h4" component="h2">
                Free AI Content Generator is a free online platform that enables users to create content by submitting ideas so that GPT-3 can turn them into dynamic content.
            </Typography>
        </Box>
    );
}