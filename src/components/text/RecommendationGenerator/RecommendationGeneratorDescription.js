import { Box, Typography } from "@mui/material";

export default function ProductNamerDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"} >
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                Use this service to write a thoughtful recommendation for something that you enjoy.
            </Typography>
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                Be specific with the reasons that you are recommending!
            </Typography>
        </Box>
    );
}