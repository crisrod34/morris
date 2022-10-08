import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function ProductNamerInput() {
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
                />
                <TextField
                    required
                    id="outline-required"
                    label="Seed Words"
                    placeholder="Essential product traits"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="outline-required"
                    label="Style"
                    placeholder="E.g. 'Quirky, weird, simple, clean'"
                    fullWidth
                    margin="normal" 
                />
            </div>
        </Box>
        
    );
}