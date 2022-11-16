import { Stack, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Stack>
            <Typography sx={{
                fontSize: "1.4rem"
            }}>
                This is a summarization service that will take long pieces of text and
                 summarize them into short, easy to understand pieces of
                  text. This will be especially useful for busy people
                   who don't have time to read long articles or books, but still
                    want to be able to understand the main points.
            </Typography>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.4rem',
            }}>
                Simply copy and paste what you need summarized in the box belox.
            </Typography>
        </Stack>
    );
}