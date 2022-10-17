import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ProductNamerInput({childToParent}) {

    const [details, setDetails] = useState({
        productDescription: '',
        seedWords: '',
        style: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value}
        })
    };

    const handleSubmit = () => {
        console.log(details);
        childToParent(details);
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
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Seed Words"
                    placeholder="Essential product traits"
                    fullWidth
                    margin="normal"
                    name="seedWords"
                    onChange={handleChange}
                />
                <TextField
                    id="outline-required"
                    label="Style"
                    placeholder="E.g. 'Quirky, weird, simple, clean'"
                    fullWidth
                    margin="normal" 
                    name="style"
                    onChange={handleChange}
                />
                <Button 
                variant="contained"
                onClick={() => {
                    handleSubmit();
                }}
            >
                Generate</Button>
                
            </div>
        </Box>
        
    );
}