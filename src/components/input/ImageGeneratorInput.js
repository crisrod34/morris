import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function ImageGeneratorInput({childToParent, submitApiRequest}) {

    const [details, setDetails] = useState({
        imagePrompt: '',
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
            autoComplete="off"
            flexGrow={1} 
            padding={"1rem"}>
            <div>
                <TextField
                    required
                    id="outline-required"
                    label="Prompt"
                    placeholder="What do you want your image to include?"
                    fullWidth
                    margin="normal"
                    name="imagePrompt"
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
                Generate Image</Button>

            </div>
        </Box>
        
    );
}