import { styled } from '@mui/material/styles';
import Avatar from "../../../assets/images/profile.png"
import { Container, Typography, Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
       width: "20%",
       borderRadius: "50%"
    }))

    return (
      <>
         <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4}>
                        <StyledImg src={Avatar}/>
                    </Grid>

                    <Grid item xs={8} md={8}>
                        <Typography color='primary' variant='h1'>Adriana Saty</Typography>
                        <Typography color='primary' variant='h2'>I'm a Software Developer</Typography>
                        <Button>
                            <DownloadIcon/>
                            Donwload CV</Button>
                        <Button>Contact Me</Button>
                    </Grid>
                </Grid>
            </Container>
         </StyledHero>
      </>
    )
  }
  export default Hero
  