import { useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import SloganGeneratorInput from "../input/SloganGeneratorInput";
import SloganGeneratorDescription from '../text/SloganGenerator/SloganGeneratorDescription';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export default function SloganGeneratorService() {

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

    let prompt = "";
    if (data.serviceName) {
        prompt = `Give me a creative slogan that for a service with the following characteristics:
        \nService name: ${data.serviceName};\n
        \nService description: ${data.serviceDescription};\n
        \nEmotion that the slogan provokes: ${data.emotion}.`;
    } else {
        prompt = `Give me a creative slogan that for a service with the following characteristics:
        \nService description: ${data.serviceDescription};\n
        \nEmotion that the slogan provokes: ${data.emotion}.`;
    }
    
    const getApiResponse = (data) => {
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 1.0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.9,
            presence_penalty: 0.9,
          })
          .then((response) => {
            let slogan = response.data.choices[0].text;
            setOpenApiResponse({
                slogan: `${slogan}`
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
                    fontSize: "2.5rem",
                    textAlign: "center",
                    lineHeight: "2.5rem"
                }}>
                    Find the perfect Slogan
            </Typography>         
            <SloganGeneratorDescription />
            <SloganGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            {state == "waiting-for-response" && (
                <Stack 
                    alignItems="center"
                    sx={{ pt:3, pb: 3 }}>
                    <CircularProgress size="6rem" />
                </Stack>
            )}
            {state == "response-received" && (
                <Grid item>
                    <Typography sx={{
                        fontSize: "2rem"
                    }}>
                        We found the following slogan for your service:
                    </Typography>
                    <Typography sx={{
                        fontSize: "3rem"
                    }}>
                        {openApiResponse.slogan}
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