import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function RecommendationGeneratorInput({childToParent, submitApiRequest}) {

    const [details, setDetails] = useState({
        subject: '',
        reasons: '',
        recipient: '',
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
                    label="Subject"
                    placeholder="Who or What are you recommending?"
                    fullWidth
                    margin="normal"
                    name="subject"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Reasons"
                    placeholder="What do you recommending about it?"
                    fullWidth
                    margin="normal"
                    name="reasons"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    id="outline-required"
                    label="Recipient"
                    placeholder="Who will be reading this recommendation?"
                    fullWidth
                    margin="normal"
                    name="recipient"
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
                Generate Recommendation</Button>
                
            </div>
        </Box>
        
    );
}