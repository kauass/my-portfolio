import { Container, Typography, Grid, Box, Card, CardContent, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import codarImg from '../../assets/images/codar.png';
import nftImg from '../../assets/images/nft.png';

const projetos = [
  {
    nome: "Codar",
    descricao: "Site pessoal para mostrar minhas habilidades e projetos.",
    tecnologias: ["HTML", "CSS3"],
    link: "https://github.com/kauass/Codar",
    imagem: codarImg
  },
  {
    nome: "Ecommerce NFT",
    descricao: "Site pessoal para mostrar minhas habilidades e projetos.",
    tecnologias: ["HTML", "CSS3"],
    link: "https://github.com/seuusuario/filmes-api",
    imagem: nftImg
  },
]

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: "#0d1117",
  padding: "100px 0",
  minHeight: "100vh",
  color: "#fff"
}))

const NeonCard = styled(Card)(() => ({
  backgroundColor: "#161b22",
  border: "1px solid #30363d",
  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
  transition: "0.3s ease",
  "&:hover": {
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
  }
}))

const NeonButton = styled(Button)(() => ({
  background: "linear-gradient(90deg, #00f2ff, #8a2be2)",
  color: "#fff",
  fontWeight: "bold",
  boxShadow: "0 0 1px #00f2ff",
  "&:hover": {
    background: "linear-gradient(90deg, #8a2be2, #00f2ff)"
  }
}))

const NeonChip = styled(Chip)(() => ({
  borderColor: "#00f2ff",
  color: "#00f2ff"
}))

const Projects = () => {
  return (
    <StyledProjects>
      <Container maxWidth="lg">
 
        <Grid container spacing={4}>
          {projetos.map((projeto, index) => (
            <Grid item xs={12} md={6} key={index}>
              <NeonCard>
              <Box
                component="img"
                src={projeto.imagem}
                alt={projeto.nome}
                sx={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderBottom: "1px solid #30363d"
                }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    {projeto.nome}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#8b949e" }} paragraph>
                    {projeto.descricao}
                  </Typography>
                  <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
                    {projeto.tecnologias.map((tec, i) => (
                      <NeonChip key={i} label={tec} variant="outlined" />
                    ))}
                  </Box>
                  <NeonButton href={projeto.link} target="_blank">
                    Ver no GitHub
                  </NeonButton>
                </CardContent>
              </NeonCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  )
}

export default Projects
