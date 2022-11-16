import { useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import SimpleSummarizationInput from "../input/SimpleSummarizationInput";
import SimpleSummarizationDescription from "../text/SimpleSummarizationDescription";

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export default function SimpleSummarizationService() {

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
        openai.createCompletion({
            model: "text-davinci-002",
            prompt: `Summarize this text by gathering the main points: \n\n${data.longText}`,
            temperature: 0.7,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          })
          .then((response) => {
            let summarizedText = response.data.choices[0].text;
            setOpenApiResponse({
                summarizedText: `${summarizedText}`
            });
          })
          .then(() => {
            setState("responseReceived");
          })
          .catch((error) => {
            setState("error-in-request")
        });
    }

    return (
        <Grid item>   
            <Typography sx={{
                    textDecoration: "underline",
                    fontSize: "4rem",
                    textAlign: "center"
                }}>
                    Simple Summarization
            </Typography>      
            <SimpleSummarizationDescription />   
            <SimpleSummarizationInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            {state == "waiting-for-response" && (
                <Stack 
                    alignItems="center"
                    sx={{ pt:3, pb: 3 }}>
                    <CircularProgress size="6rem" />
                </Stack>
            )}
            {state == "responseReceived" && (
                <Grid item>
                    <Typography sx={{
                        fontSize: "2rem"
                    }}>
                        Simple Summarization:
                    </Typography>
                    <Typography sx={{
                        fontSize: "1.4rem"
                    }}>
                        {openApiResponse.summarizedText}
                    </Typography>
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