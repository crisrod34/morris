import { useState } from 'react';
import { Box, Grid, Typography, CircularProgress } from "@mui/material";

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
            console.log(response.data.data[0].b64_json);
            var base64 = response.data.data[0].b64_json;
            setOpenApiResponse({
                imageBase64: base64
            });
            /* setOpenApiResponse({
                imageUrl: `${response.data.data[0].url}`
            }); */
          })
          .then(() => {
            setState("response-received");
          })
          .catch((error) => {
            console.log(error);
            setState("error-in-request")
        });
    }

    return (
        <Grid item>
            <ImageGeneratorDescription />            
            <ImageGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            {state == "waiting-for-response" && (
                <Grid item>
                    <CircularProgress />
                </Grid>
            )}
            {state == "response-received" && (
                <Grid item >
                    {/* <Link href={openApiResponse.imageUrl} underline='hover' target='blank'>
                        Your Beautiful Image
                    </Link> */}
                    <Box
                        component="img"
                        sx={{
                            height: 512,
                            width: 512,
                        }}
                        src={"data:image/png;base64," + openApiResponse.imageBase64}
                        padding={2}
                    />
                </Grid>
            )}
            {state == "error-in-request" && (
                <Grid item>
                <Typography>
                    Error in request
                </Typography>
            </Grid>
            )}
        </Grid>
    )
}