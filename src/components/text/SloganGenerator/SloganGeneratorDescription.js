import { Box, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"} >
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                To find the perfect slogan for your service, provide a brief description of what
                your service does, and what kind of emotion you would like the slogan to provoke
                in your customers.
            </Typography>
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                You can generate slogans until you have found the perfect one!
            </Typography>
        </Box>
    );
}