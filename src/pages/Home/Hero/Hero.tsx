import { styled } from '@mui/material/styles';
import Avatar from "../../../assets/images/profile.jpeg"
import { Container, Typography, Grid, Box} from '@mui/material';
import { AnimatedBackground } from '../../../components/AnimatedBackground/AnimatedBackground';

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        paddingTop: 0,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "0", 
        },
      }));

      const StyledImg = styled("img")(({ theme }) => ({
        width: "90%",
        borderRadius: "60%",
      
      }));
      
    return (
      <>
         <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                 <AnimatedBackground/>
                            </Box>   
                            <Box position="relative" textAlign="center">
                            <StyledImg src={Avatar}/>
                            </Box>
                        </Box>            
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography color='primary.contrastText' variant='h1' textAlign="center" pb={2}>Kauã Santos</Typography>
                        <Typography color='primary.contrastText' variant='h2' textAlign="center">I'm a Software Developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>

                        </Grid>         
                    </Grid>
                </Grid>
            </Container>
         </StyledHero>
      </>
    )
  }
  export default Hero
  