import { styled } from "@mui/material/styles"

const useStyles = styled((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    cardGrid: {
        paddingTop: '20px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    }
}))

export default useStyles