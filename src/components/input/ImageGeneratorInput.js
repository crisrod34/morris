import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function ImageGeneratorInput({childToParent, submitApiRequest}) {

    const [details, setDetails] = useState({
        imageSubject: '',
        imageContext: '',
        imageStyle: '',
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
                    placeholder="E.g. A Chimpanzee, Bigfoot, A group of friends"
                    fullWidth
                    margin="normal"
                    name="imageSubject"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Situation or Context"
                    placeholder="E.g. Playing football underwater, Eating watermelon, Crying"
                    fullWidth
                    margin="normal"
                    name="imageContext"
                    onKeyDown={handleEnter}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outline-required"
                    label="Style"
                    placeholder="Pixel Art, 3D Render, Photorealist, As A Dali Painting"
                    fullWidth
                    margin="normal"
                    name="imageStyle"
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