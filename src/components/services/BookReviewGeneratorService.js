import { useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import BookReviewGeneratorInput from '../input/BookReviewGeneratorInput';
import BookReviewGeneratorDescription from '../text/BookReviewGenerator/BookReviewGeneratorDescription';

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
            model: "text-davinci-003",
            prompt: `Give me a book review for: \n\n${data.bookTitle}`,
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
                    fontSize: "2.5rem",
                    textAlign: "center",
                    lineHeight: "2.5rem"
                }}>
                    Book Review Generator
            </Typography>      
            <BookReviewGeneratorDescription />   
            <BookReviewGeneratorInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
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
                        Book Review:
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