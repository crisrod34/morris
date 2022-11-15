import { Stack, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Stack>
            <Typography sx={{
                fontSize: "1.4rem"
            }}>
                To find the perfect name for your product, submit a brief description of your product
                and tell us a few key characteristics (seed words) that define your product.
            </Typography>
            <Typography sx={{
                fontSize: "1.4rem"
            }}>
                You can generate product names until you have found the perfect one!
            </Typography>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.4rem',
            }}>
                Examples of well written input:
            </Typography>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.3rem',
            }}>
                <ul>
                    <li>Product description: a non-profit that helps people find homeless people in need</li>
                    <li>Seed words: kind, caring, humanitarian, charity</li>
                </ul>
                <ul>
                    <li>Product description: a fashion website that finds stylists according to your fashion taste</li>
                    <li>Seed words: easy, modern, stylish, trendy, popular</li>
                </ul>
                <ul>
                    <li>Product description: A bottle than automatically purifies any liquid inside of it</li>
                    <li>Seed words: clean, sleek, techy, hygenic, pure, healthy</li>
                </ul>
            </Typography>
        </Stack>
    );
}