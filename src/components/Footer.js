import { Typography, Link } from "@mui/material"

export default function Footer(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pb: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://contentspawn.com/">
        Morris
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
}