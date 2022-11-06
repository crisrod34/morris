import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Welcome() {
    return (
        <Box sx={{ my:4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Morris.
            </Typography>
            <Typography variant="h4" component="h2">
                Morris is a content platform that enables users to submit ideas and have them turned into dynamic content.
            </Typography>
        </Box>
    );
}