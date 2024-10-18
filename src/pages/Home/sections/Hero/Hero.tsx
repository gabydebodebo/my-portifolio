import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/kitteh mustache you a question_ but he will shave it for laterz_.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";



const Hero = () => {

  const Styledhero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"

  }));

  const Styledimage = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "58%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <Styledhero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <Styledimage src={Avatar} />
                                </Box>
                            </Box>
             </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb= {2}>
                Gabrielle
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                {" "}
                Projetos
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt= {3}>
                <Grid item xs={12} md= {4} display="flex" justifyContent="center" >
                  <StyledButton>
                  <DownloadIcon />
                  <Typography>
                  Dowload CV
                  </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md= {4} display="flex" justifyContent="center" >
                <StyledButton>
                    <MailOutlineIcon />
                   <Typography>
                   Contact me
                   </Typography>
                    </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Styledhero>
    </>
  );
};

export default Hero;
