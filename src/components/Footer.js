import { Typography, Link } from "@mui/material"

export default function Footer(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Morris
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
}