import Box from '@mui/material/Box';
import Container from '@mui/material/'
import Grid from '@mui/material'
import Link from '@mui/material'

function Footer(props) {
return(
<>
<Box>
<Container maxWidth="lg">
    <Grid container space={5}>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
                <Link href="/" color="inherit">
                    Contact
                </Link>
            </Box>
        </Grid>
    </Grid>
</Container>
</Box>
</>
)
}

export default Footer