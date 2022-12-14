import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function SimpleSummarizationInput({childToParent, submitApiRequest}) {

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
                    label="Long Text"
                    placeholder="Enter the long text you need summarized here"
                    fullWidth
                    multiline
                    margin="normal"
                    name="longText"
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
                Summarize</Button>
            </div>
        </Box>
        
    );
}