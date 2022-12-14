import { Box, Typography } from "@mui/material";

export default function ImageGeneratorDescription() {
    return (
        <Box flexGrow={1} padding={"1rem"} >
            <Typography sx={{
                fontSize: "1.2rem"
            }}>
                This service turns your wildest dreams into beautiful images. Just enter your ideas and we'll turn it into a 
                stunning image that you can share with your friends and family. The art is all yours to use how you please!
            </Typography>
        </Box>
    );
}