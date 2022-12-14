import { Box, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"}>
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                This is the perfect service for anyone who needs to know the important details
                of a book without reading all of it.
            </Typography>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.2rem',
            }}>
                Enter the title of the book and the author in the box below:
            </Typography>
        </Box>
    );
}