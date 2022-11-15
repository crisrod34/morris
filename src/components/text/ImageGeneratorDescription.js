import { Box, Stack, Typography } from "@mui/material";

export default function ImageGeneratorDescription() {
    return (
        <Box>
            <Stack 
                alignItems="left"    
                spacing={1}>
                <Typography sx={{
                    fontSize: "20px"
                }}>
                    This service turns your wildest dreams into beautiful images. Just enter your ideas and we'll turn it into a 
                    stunning image that you can share with your friends and family. The art is all yours to use how you please!
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    lineHeight: '24px',
                    fontSize: '20px',
                }}>
                    Examples of well written prompts:
                </Typography>
                <ul sx={{ listStyleType: 'disc'}}>
                    <li sx={{ display: 'list-item' }}>
                        3D render of a cute tropical fish in an aquarium on a dark blue background, digital art
                    </li>
                    <li sx={{ display: 'list-item' }}>
                        An armchair in the shape of an avocado
                    </li>
                    <li sx={{ display: 'list-item' }}>
                        A van Gogh style painting of an American football player
                    </li>
                    <li sx={{ display: 'list-item' }}>
                        A cartoon of a monkey in space
                    </li>
                </ul>
            </Stack>
        </Box>
    );
}