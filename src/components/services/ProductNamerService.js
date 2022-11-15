import { useState } from 'react';
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import ProductNamerInput from "../input/ProductNamerInput";
import ProductNamerDescription from '../text/ProductNamerDescription';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


export default function ProductNamerService() {

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
            prompt: `Product description: 
                    A home milkshake maker\n
                    Seed words: fast, healthy, compact. \n
                    Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n
                    \nProduct description: an apocalyptic coffee maker \n
                    Seed words: clean, dangerous, modern\n
                    Product names: Last Chance Coffee, Hazardous Grounds, End of the Line Coffee\n
                    \n Product description: a non-profit that helps people find homeless people in need\n
                    Seed words: kind, caring, humanitarian, charity\n
                    Product names: Web of Care, Find A Friend, Helping Hands, Safe Haven \n
                    \n Product description: a fashion website that finds stylists according to your fashion taste\n
                    Seed words: easy, modern, stylish, trendy, popular\n
                    Product names: Fashion Finder, Style Seeker, Trend Tracker, Popularity Meter \n
                    \nProduct description: ${data.productDescription}.\n
                    Seed words: ${data.seedWords}.`,
            temperature: 1.0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.9,
            presence_penalty: 0.9,
          })
          .then((response) => {
            let productNames = response.data.choices[0].text.split(":")[1].split(',');
            setOpenApiResponse({
                productNames: `${productNames}`
            });
            console.log(productNames);
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
                    Find a Product Name
            </Typography>         
            <ProductNamerDescription />
            <ProductNamerInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
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
                        We found the following names for your product:
                    </Typography>
                    <Typography sx={{
                        fontSize: "3rem"
                    }}>
                        {openApiResponse.productNames}
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