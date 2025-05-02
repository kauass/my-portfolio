import { Container, Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const skillCategories = [
    {
      titulo: "Front-End",
      tecnologias: [
        { nome: "HTML", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { nome: "CSS", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { nome: "JavaScript", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { nome: "TypeScript", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      titulo: "Back-End",
      tecnologias: [
        { nome: "Node.js", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { nome: "Laravel", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original-wordmark.svg" } // Atualizado
      ]
    },
    {
      titulo: "Banco de Dados",
      tecnologias: [
        { nome: "MySQL", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { nome: "PostgreSQL", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    }
  ]
  

const StyledSkills = styled("div")(() => ({
  backgroundColor: "#0d1117",
  color: "#fff",
  minHeight: "100vh",
  padding: "100px 0"
}));

const SkillCard = styled(Box)(() => ({
  backgroundColor: "#161b22",
  borderRadius: "12px",
  padding: "10px",
  transition: "transform 0.3s ease",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 5px #00f2ffaa"
  }
}));

const SkillImage = styled("img")(() => ({
  height: "40px",
  marginBottom: "10px",
}));

const Skills = () => {
  return (
    <StyledSkills>
      <Container maxWidth="md">
  

        {skillCategories.map((categoria, i) => (
          <Box key={i} mb={6}>
            <Typography variant="h5" sx={{ color: "#58a6ff", mb: 2 }}>
              {categoria.titulo}
            </Typography>

            <Grid container spacing={4}>
              {categoria.tecnologias.map((tec, j) => (
                <Grid item xs={6} sm={4} md={3} key={j}>
                  <SkillCard>
                    <SkillImage src={tec.imagem} alt={tec.nome} />
                    <Typography sx={{ color: "#c9d1d9" }}>{tec.nome}</Typography>
                  </SkillCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </StyledSkills>
  );
};

export default Skills;
