import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '50px',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  image: {
    border: '1px solid pink',
  }
}));

export const Language: (props: any) => JSX.Element = (props) => {
  const classes = useStyles();
  const { language, icon } = props;

  return (
    <div>
      <Tooltip title={language} placement="top">
        <div className={classes.grid}>
          <img src={icon} alt="language" width="50px" height="50px" className={classes.image} />
        </div>
      </Tooltip>
    </div >
  );
};
