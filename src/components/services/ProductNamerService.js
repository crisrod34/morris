import { useState } from 'react';
import Grid from '@mui/material/Grid';

import ProductNamerInput from "../input/ProductNamerInput";
import ProductNamerDescription from '../text/ProductNamerDescription';


export default function ProductNamerService() {

    const [data, setData] = useState({});

    const childToParent = (childData) => {
        setData(childData)
    }

    return (
        <Grid item>
            <ProductNamerDescription />
            <ProductNamerInput childToParent={childToParent}/>
            {data['productDescription']}
        </Grid>
    )
}
