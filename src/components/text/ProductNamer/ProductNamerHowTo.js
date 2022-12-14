import { Box, Typography } from "@mui/material";

export default function ProductNamerHowTo() {
    return (
        <Box flexGrow={1} padding={"1rem"}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.4rem',
            }}>
                Examples of well written input:
            </Typography>
            <Typography sx={{
                fontSize: '1.3rem',
            }}>
                <ul>
                    <li>Product description: a non-profit that helps people find homeless people in need</li>
                    <li>Key Characteristics: kind, caring, humanitarian, charity</li>
                </ul>
            </Typography>
        </Box>
    )
}