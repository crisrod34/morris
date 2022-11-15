import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Grid, Stack, Typography } from "@mui/material";

import monkey_basketball from '../../media/monkey_basketball.png';
import banksy from '../../media/banksy.png';
import astro_beach from '../../media/astro_beach.png';
import dali from '../../media/dali.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ImageGeneratorDescription() {
    return (
        <Box flexGrow={1} >
                <Typography sx={{
                    fontSize: "1.4rem"
                }}>
                    This service turns your wildest dreams into beautiful images. Just enter your ideas and we'll turn it into a 
                    stunning image that you can share with your friends and family. The art is all yours to use how you please!
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: '1.4rem',
                }}>
                    Well written prompts include:
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: '1.3rem',
                }}>
                    <ol>
                        <li>A main subject of the image (an astronaut; a blue octopus; a green alien)</li>
                        <li>Context for the subject (discovering a new planet; playing with a green rhinocerous; teaching sign language)</li>
                        <li>The art style for the image (as a salvador dali painting, a 3d render, digital art)</li>
                    </ol>
                </Typography>
                <Typography sx={{
                    fontWeight: 700,
                    lineHeight: '40px',
                    fontSize: '20px',
                }}>
                    Examples:
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} maxWidth="100%">
                        <Item>
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    xs={6}
                                    src={monkey_basketball}
                                    padding={1}
                                />
                                <Typography>
                                    A monkey watching a basketball game in the jungle, digital art
                                </Typography>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={6} maxWidth="100%">
                        <Item>
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    src={banksy}
                                    padding={1}
                                />
                                <Typography>
                                    A couple holding hands walking together during sunset, by banksy
                                </Typography>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={6} maxWidth="100%">
                        <Item>
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    src={astro_beach}
                                    padding={1}
                                />
                                <Typography>
                                    An astronaut drinking a beer while relaxing on the beach, in a photorealistic style
                                </Typography>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={6} maxWidth="100%">
                        <Item>
                            <Stack>
                                <Box
                                    component="img"
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    src={dali}
                                    padding={1}
                                />
                                <Typography>
                                    Human beings meeting aliens for the first time, as a salvador dali painting
                                </Typography>
                            </Stack>
                        </Item>
                    </Grid>
                </Grid>
        </Box>
    );
}