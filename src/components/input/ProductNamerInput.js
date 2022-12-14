import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function ProductNamerInput({childToParent, submitApiRequest}) {

    const [details, setDetails] = useState({
        productDescription: '',
        keyCharacteristics: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value}
        })
    };
    
    useEffect(() => {
        childToParent(details);
    });

    const handleSubmit = () => {
        submitApiRequest(details);
    };

    const handleEnter = (e) => {
        if(e.keyCode == 13){
            e.preventDefault();
            handleSubmit();
         }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off">
            <div>
                <TextField
                    required
                    id="outline-required"
                    label="Product Description"
                    placeholder="What does your product do?"
                    fullWidth
                    margin="normal"
                    name="productDescription"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Key Characteristics"
                    placeholder="Essential product traits"
                    fullWidth
                    margin="normal"
                    name="keyCharacteristics"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <Button 
                variant="contained"
                fullWidth
                onClick={() => {
                    handleSubmit();
                }}
            >
                Generate Product Name</Button>
                
            </div>
        </Box>
        
    );
}