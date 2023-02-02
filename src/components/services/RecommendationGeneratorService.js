import { useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import RecommendationGeneratorInput from '../input/RecommendationGeneratorInput';
import RecommendationGeneratorDescription from '../text/RecommendationGenerator/RecommendationGeneratorDescription';

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
    if (data.recipient) {
        prompt = `Write a recommendation that follows this structure:
        \nSubject of recommendation: ${data.subject};\n
        \nReasons for recommending: ${data.reasons};\n
        \nRecommendation is addressed to: ${data.recipient}.`;
    } else {
        prompt = `Write a recommendation that follows this structure:
        \nSubject of recommendation: ${data.subject};\n
        \nReasons for recommending: ${data.reasons}`;
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
            let recommendation = response.data.choices[0].text;
            setOpenApiResponse({
                recommendation: `${recommendation}`
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
                    Write a simple recommendation
            </Typography>         
            <RecommendationGeneratorDescription />
            <RecommendationGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
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
                        Recommendation:
                    </Typography>
                    <Typography sx={{
                        fontSize: "3rem"
                    }}>
                        {openApiResponse.recommendation}
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