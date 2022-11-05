import { useState } from 'react';
import { Grid, Typography, Link } from "@mui/material";

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
        getApiResponse(data);
    }

    const getApiResponse = (data) => {
        openai.createImage({
            prompt: `${data.imagePrompt}`,
            n: 1,
            size: "1024x1024",
          })
          .then((response) => {
            setOpenApiResponse({
                imageUrl: `${response.data.data[0].url}`
            });
          })
          .then(() => {
            setState("response-received");
          })
          .catch((error) => {
            setState("error-in-request")
            setOpenApiResponse("Error, please try again.")
        });
    }

    return (
        <Grid item>
            <ImageGeneratorDescription />            
            <ImageGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            {state == "response-received" && (
                <Grid item>
                    <Link href={openApiResponse.imageUrl} underline='hover' target='blank'>
                        Your Beautiful Image
                    </Link>
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