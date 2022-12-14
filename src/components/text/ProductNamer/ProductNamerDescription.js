import { Box, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"} >
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                To find the perfect name for your product, submit a brief description of your product
                and tell us a few key characteristics that define your product.
            </Typography>
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                You can generate product names until you have found the perfect one!
            </Typography>
        </Box>
    );
}