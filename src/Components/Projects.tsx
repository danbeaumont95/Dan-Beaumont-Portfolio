import { useState, useEffect } from 'react';
import ProjectService from '../Services/projects';
import Swal from 'sweetalert2';
import { Typography, Card, Grid, CardContent, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Languages } from './Languages';

interface Project {
  createdAt: string;
  description: string;
  fullStack: boolean;
  image: string;
  languages: string[];
  link: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
  source: string;
}

const useStyles = makeStyles((theme) => ({
  allContent: {
    height: '100vh',
    backgroundColor: '#191919',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    color: 'white',
    paddingBlock: 20,
    marginBottom: theme.spacing(2)
  },
  projects: {
  },
  grid: {
    // backgroundColor: '#191919', // background color of whole section
    color: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  projectImage: {
    height: '200px',
    width: '250px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    border: '2px solid #191919',
    height: '550px',
    backgroundColor: 'black',
  },
  cardContent: {
    paddingTop: theme.spacing(2),
    backgroundColor: 'black',
  },
  box: {
    backgroundColor: '#191919',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  projectName: {
    color: 'white',
    marginBottom: theme.spacing(2)
  },
  projectDescription: {
    color: 'white'
  }
}));
export const Projects: () => JSX.Element = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    ProjectService.getAllProjects()
      .then((res) => {
        if (res.data.success !== true) {
          return Swal.fire({
            title: 'Error receiving projects'
          });
        }
        setProjects(res.data.data);
      });
  }, []);

  return (
    <div className={classes.allContent}>

      <div className={classes.container}>
        <Typography variant='h5' className={classes.title}>My Projects</Typography>
      </div>

      <div className={classes.projects}>
        <Grid container spacing={2}>
          <Grid justify='center' spacing={2} xs={12} className={classes.grid}>

            {projects.length && projects.map((el) => (
              <Box className={classes.box}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>

                    <img src={el.image} alt="project" className={classes.projectImage} />

                    <Typography variant='h5' className={classes.projectName}>
                      {el.name}
                    </Typography>

                    <Typography className={classes.projectDescription}>
                      {el.description}
                    </Typography>

                    <Languages languages={el.languages} />

                  </CardContent>
                </Card>
              </Box>
            ))}

          </Grid>
        </Grid>
      </div>

    </div>
  );
};
