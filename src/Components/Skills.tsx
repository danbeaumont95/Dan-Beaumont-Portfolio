import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssIcon from '../Images/css.png';
import AwsIcon from '../Images/awsIcon.svg';
import JavascriptIcon from '../Images/javascript.png';
import NodeIcon from '../Images/node.png';
import TypescriptIcon from '../Images/typescript.png';
// import TypescriptIcon from '../Images/tsIcon.png';
import ReactIcon from '../Images/react.png';
import MongoIcon from '../Images/mongoIcon.svg';
import ExpressIcon from '../Images/express.jpg';
import HtmlIcon from '../Images/html.webp';
import PsqlIcon from '../Images/psql.jpeg';
import ReduxIcon from '../Images/redux.png';
import MaterialUiIcon from '../Images/materialui.png';

const useStyles = makeStyles((theme) => ({
  allContent: {
    height: '100%',
    backgroundColor: 'black'
  },
  backAndFront: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    paddingBlock: 20,
    marginBottom: theme.spacing(2)
  },
  endTitle: {
    color: 'white',
    textAlign: 'left',
    marginLeft: theme.spacing(4)
  },
  backEnd: {
    marginLeft: '35%'
  },
  frontEnd: {
    marginRight: '35%'
  },
  text: {
    color: 'white'
  }
}));

export const Skills: () => JSX.Element = () => {
  const classes = useStyles();
  return (
    <div className={classes.allContent}>
      <Typography variant='h5' className={classes.title}>My Skills</Typography>
      <div className={classes.backAndFront}>
        <div className={classes.backEnd}>
          <Typography variant='h6' className={classes.endTitle}>Backend</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <List >

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={NodeIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Node JS"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={JavascriptIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="JavaScript"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AwsIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="AWS"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={MongoIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Mongo DB"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={TypescriptIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="TypeScript"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={ExpressIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Express"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={PsqlIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="PSQL"
                    className={classes.text}
                  />
                </ListItem>

              </List>

            </Grid>
          </Grid>
        </div>

        <div className={classes.frontEnd}>
          <Typography variant='h6' className={classes.endTitle}>Frontend</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <List >

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={ReactIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="React"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={HtmlIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="HTML"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={CssIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="CSS"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={ReduxIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Redux"
                    className={classes.text}
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={MaterialUiIcon} alt="language" width="50px" height="50px" />

                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Material UI"
                    className={classes.text}
                  />
                </ListItem>

              </List>

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
