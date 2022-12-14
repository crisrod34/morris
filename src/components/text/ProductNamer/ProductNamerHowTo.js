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
                <ul>
                    <li>Product description: a fashion website that finds stylists according to your fashion taste</li>
                    <li>Key Characteristics: easy, modern, stylish, trendy, popular</li>
                </ul>
                <ul>
                    <li>Product description: A bottle than automatically purifies any liquid inside of it</li>
                    <li>Key Characteristics: clean, sleek, techy, hygenic, pure, healthy</li>
                </ul>
            </Typography>
        </Box>
    )
}