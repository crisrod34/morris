import { Typography, Link } from "@mui/material"

export default function Footer() {
    return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pb: 4 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://contentspawn.com/">
        Content Spawn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
}