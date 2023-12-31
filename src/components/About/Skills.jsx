import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CircularProgress from "./CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fbf8cc",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "unset",
}));
const skills = {
  languages: [
    { title: "JavaScript", percentage: 98 },
    { title: "TypeScript", percentage: 90 },
    { title: "C#", percentage: 90 },
  ],
  frameworks: [
    { title: "React", percentage: 99 },
    { title: "React Native", percentage: 98 },
    { title: "Expo", percentage: 98 },
    { title: "NodeJS (ExpressJS/HapiJS)", percentage: 90 },
    { title: "ASP.NET Core", percentage: 85 },
    { title: "AWS Lightsail/Amplify", percentage: 85 },
  ],
};
export default function Skills() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {skills.languages.map((lan, index) => (
            <Grid item xs={"auto"} sm={4} md={4} key={index}>
              <Item>
                <CircularProgress
                  size={250}
                  strokeWidth={20}
                  percentage={lan.percentage}
                  color="#03045E"
                  title={lan.title}
                />
              </Item>
            </Grid>
          ))}
          {skills.frameworks.map((lan, index) => (
            <Grid item xs={"auto"} sm={4} md={4} key={index}>
              <Item>
                <CircularProgress
                  size={250}
                  strokeWidth={20}
                  percentage={lan.percentage}
                  color="#03045E"
                  title={lan.title}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
