import { Typography, Grid, ImageList, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssIcon from '../Images/css.png';
import AwsIcon from '../Images/aws.png';
import JavascriptIcon from '../Images/javascript.png';
import NodeIcon from '../Images/node.png';
import TypescriptIcon from '../Images/typescript.png';
import ReactIcon from '../Images/react.png';
import MongoIcon from '../Images/mongo.webp';
import ExpressIcon from '../Images/express.jpg';
import ReduxIcon from '../Images/redux.png';
import MaterialUiIcon from '../Images/materialui.png';
import { Language } from './Language';

const useStyles = makeStyles((theme) => ({
  techStack: {
    color: 'white',
    marginTop: theme.spacing(2)
  },
  imageList: {
    ['@media (max-width:900px)']: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
}));

export const Languages = (props) => {
  const { languages } = props;
  const classes = useStyles();

  const getIconImage = (el) => {
    if (el.toLowerCase() === 'TypeScript'.toLowerCase()) {
      return TypescriptIcon;
    }
    else if (el.toLowerCase().trim() === 'JavaScript'.toLowerCase()) {
      return JavascriptIcon;
    }
    else if (el.toLowerCase().trim() === 'Node'.toLowerCase()) {
      return NodeIcon;
    }
    else if (el.toLowerCase().trim() === 'React'.toLowerCase()) {
      return ReactIcon;
    }
    else if (el.toLowerCase().trim() === 'CSS'.toLowerCase()) {
      return CssIcon;
    }
    else if (el.toLowerCase().trim() === 'AWS'.toLowerCase()) {
      return AwsIcon;
    }
    else if (el.toLowerCase().trim() === 'MongoDB'.toLowerCase()) {
      return MongoIcon;
    }
    else if (el.toLowerCase().trim() === 'Express'.toLowerCase()) {
      return ExpressIcon;
    }
    else if (el.toLowerCase().trim() === 'Material UI'.toLowerCase()) {
      return MaterialUiIcon;
    }
    else if (el.toLowerCase().trim() === 'Redux'.toLowerCase()) {
      return ReduxIcon;
    }
    else {
      return JavascriptIcon;
    }
  };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid>

        <Typography variant="h6" component="div" className={classes.techStack}>
          Tech Stack Used
        </Typography>

        <ImageList className={classes.imageList}>
          {languages.length && languages.join().split(',').map((el) => (
            <Language language={el} icon={getIconImage(el)} />
          ))}
        </ImageList>

      </Grid>
    </Box >
  );
};
