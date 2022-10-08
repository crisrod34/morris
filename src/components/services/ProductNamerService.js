import React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

import ProductNamerInput from "../input/ProductNamerInput";
import ProductNamerDescription from '../text/ProductNamerDescription';

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const axios = require('axios');
const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.",
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
});

export default function ProductNamerService() {
    const [state, setState] = React.useState('enter-product-name');

    return (
        <Grid item>
            <ProductNamerDescription />
            <ProductNamerInput />
            <Button 
                variant="contained"
                onClick={() => {
                    setState('show-generated-prompt');
                }}
            >
                Generate</Button>

            {state == 'show-generated-prompt' &&
                <p>response data here</p>
                
            }    
        </Grid>
    );
}
