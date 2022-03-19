import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link'

function Footer(props) {
  return (
    <footer>
      <Box 
        px={{ xs:3, sm:10}} 
        py={{ xs:5, sm:10}} 
        bgcolor="text.secondary" color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Project</Box>
              <Box >
                <Link href="https://github.com/CabralE/skate-shop-ecommerce-client" color="inherit">
                    Frontend Repo
                </Link>
              </Box>
              <Box>
                <Link href="https://github.com/Gregorio-Moreta/Skate-Ecommerce-Backend" color="inherit">
                    Backend Repo
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                    Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                    Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Socials</Box>
              <Box>
                <Link href="https://edward-cabral-portfolio.netlify.app/" color="inherit">
                    Ed's portfolio website
                </Link>
              </Box>
              <Box>
                <Link href="https://www.linkedin.com/in/edward-cabral/" color="inherit">
                    Ed's LinkedIn
                </Link>
              </Box>
              <Box>
                <Link href="https://gregorio-moreta-portfolio.netlify.app/" color="inherit">
                    Greg's portfolio website
                </Link>
              </Box>
              <Box>
                <Link href="https://www.linkedin.com/in/gregorio-moreta/" color="inherit">
                    Greg's LinkedIn
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box textAlign="center" pt={{xs:5, sm: 10}} pb={{xs: 5, sm:0}}>
            Greg and Ed's Ecommerce Skateshop &reg; {new Date().getFullYear()}
        
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
