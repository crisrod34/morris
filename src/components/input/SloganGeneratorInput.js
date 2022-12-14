import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function SloganGeneratorInput({childToParent, submitApiRequest}) {

    const [details, setDetails] = useState({
        serviceName: '',
        serviceDescription: '',
        emotion: '',
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
                    id="outline-required"
                    label="Service Name"
                    placeholder="What is your service called?"
                    fullWidth
                    margin="normal"
                    name="serviceName"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Service Description"
                    placeholder="What does your service do?"
                    fullWidth
                    margin="normal"
                    name="serviceDescription"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Emotion"
                    placeholder="What emotion will your slogan provoke?"
                    fullWidth
                    margin="normal"
                    name="emotion"
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
                Generate Slogan</Button>
                
            </div>
        </Box>
        
    );
}