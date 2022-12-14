import { Box, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"}>
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                This is a summarization service that transforms long-form text into
                clear and concise text that includes the main ideas only.
            </Typography>
            <Typography sx={{
                fontWeight: 700,
                fontSize: '1.2rem',
            }}>
                Simply copy and paste what you need summarized in the box belox.
            </Typography>
        </Box>
    );
}