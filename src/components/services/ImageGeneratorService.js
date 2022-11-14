import { useState } from 'react';
import { Box, Grid, Stack, Typography, CircularProgress } from "@mui/material";

import ImageGeneratorInput from './../input/ImageGeneratorInput';
import ImageGeneratorDescription from '../text/ImageGeneratorDescription';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export default function ImageGeneratorService() {

    const [state, setState] = useState("noInput");

    const [data, setData] = useState('');

    const [openApiResponse, setOpenApiResponse] = useState('');

    const childToParent = (childData) => {
        setData(childData);
    }

    const submitApiRequest = () => {
        setState("waiting-for-response");
        getApiResponse(data);
    }

    const getApiResponse = (data) => {
        openai.createImage({
            prompt: `${data.imagePrompt}`,
            n: 1,
            size: "512x512",
            response_format: "b64_json",
          })
          .then((response) => {
            var base64 = response.data.data[0].b64_json;
            setOpenApiResponse({
                imageBase64: base64
            });
          })
          .then(() => {
            setState("response-received");
          })
          .catch((error) => {
            setState("error-in-request")
        });
    }

    return (
        <Grid item>
            <Typography sx={{
                    textDecoration: "underline",
                    fontSize: "30px",
                    textAlign: "center"
                }}>
                    Create Your Art
            </Typography>
            <ImageGeneratorDescription />            
            <ImageGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            {state == "waiting-for-response" && (
                <Stack 
                    alignItems="center"
                    sx={{ pt:3, pb: 3 }}>
                    <CircularProgress size="6rem" />
                </Stack>
            )}
            {state == "response-received" && (
                <Grid item >
                    {/* <Link href={openApiResponse.imageUrl} underline='hover' target='blank'>
                        Your Beautiful Image
                    </Link> */}
                    <Stack
                        sx={{ pt:2 }}
                        direction="column"
                        spacing={2}
                        alignItems="center">
                    <Box
                        component="img"
                        sx={{
                            height: "20rem",
                            width: "20rem",
                            borderRadius: 5,
                        }}
                        src={"data:image/png;base64," + openApiResponse.imageBase64}
                        padding={1}
                    />
                    </Stack>
                </Grid>
            )}
            {state == "error-in-request" && (
                <Grid item>
                <Typography>
                    Error. Please try again.
                </Typography>
            </Grid>
            )}
        </Grid>
    )
}