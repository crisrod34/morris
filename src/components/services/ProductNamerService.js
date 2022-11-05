import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

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
        getApiResponse(data);
    }

    const getApiResponse = (data) => {
        openai.createCompletion({
            model: "text-davinci-002",
            prompt: `Product description: A home milkshake maker\nSeed words: fast, healthy, compact. \nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: ${data.productDescription}.\nSeed words: ${data.seedWords}.`,
            temperature: 1.0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.9,
            presence_penalty: 0.9,
          })
          .then((response) => {
            setOpenApiResponse({
                productNames: `${response.data.choices[0].text}`
            });
          })
          .then(() => {
            setState("responseReceived");
          })
          .catch((error) => {
            setOpenApiResponse("Error, please try again.")
        });
    }

    return (
        <Grid item>            
            <ProductNamerDescription />
            <ProductNamerInput childToParent={childToParent} submitApiRequest={submitApiRequest}/>
            
            {state == "responseReceived" && (
                <Grid item>
                    <Typography>
                        {openApiResponse.productNames}
                    </Typography>
                </Grid>
            )}
        </Grid>
    )
}