import { List, ListSubheader, ListItem, Typography } from "@mui/material";

export default function ImageGeneratorDescription() {
    return (
        <Typography>
            <List sx={{ listStyleType: 'disc'}}>
                <ListSubheader sx={{
                    lineHeight: '24px', fontSize: '16px', color: 'black'
                }}>
                    This service turns your wildest dreams into beautiful images. Just enter your ideas and we'll turn it into a 
                    stunning image that you can share with your friends and family. The art is all yours to use how you please!
                </ListSubheader>
                <ListSubheader sx={{
                    fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                }}>
                    Examples of well written prompts:
                </ListSubheader>
                <ListItem sx={{ px: "1rem", display: 'list-item' }}>
                    3D render of a cute tropical fish in an aquarium on a dark blue background, digital art
                </ListItem>
                <ListItem sx={{ px: "1rem", display: 'list-item' }}>
                    An armchair in the shape of an avocado
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    A van Gogh style painting of an American football player
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    A cartoon of a monkey in space
                </ListItem>
                
            </List>
        </Typography>
    );
}