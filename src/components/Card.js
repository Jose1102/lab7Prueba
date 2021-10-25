import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import enProgreso from '../assets/images/progress.png'
import review from '../assets/images/review.png'
import success from '../assets/images/success.png'
import todo from '../assets/images/todo.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    
    container : {
      minWidth : "350px",
      margin : "1em",
      boxSizing : "content-box",
      

    }
  }))

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ id, taskName, taskDescription ,taskAssignedTo, taskDueDate, taskStatus }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles()

  let temporalImage=todo;
  if(taskStatus=="TODO"){
      temporalImage = todo;

  }
  if(taskStatus=="IN_PROGRESS"){
      temporalImage = enProgreso;
  }
  if(taskStatus=="REVIEW"){
    temporalImage = review;
  }
  if(taskStatus=="DONE"){
    temporalImage = success;
  }

  return (
    
    <Card  className={classes.container} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src = {temporalImage} />
        }
        
        title={taskName}
        subheader={taskDueDate}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        
          {taskDescription}
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
            <ModeEditIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={"primary"}>Tarea:</Typography>
          <Typography paragraph>
            {taskName}
          </Typography>
          <Typography paragraph color={"primary"}>Descripción:</Typography>
          <Typography paragraph>
            {taskDescription}
          </Typography>
          <Typography paragraph color={"primary"}>Asignado a:</Typography>
          <Typography paragraph>
            {taskAssignedTo}
          </Typography>
          <Typography paragraph color={"primary"}>Fecha de vencimiento:</Typography>
          <Typography paragraph>
            {taskDueDate}
          </Typography>
          <Typography paragraph color={"primary"}>Estado:</Typography>
          <Typography paragraph>
            {taskStatus}
          </Typography>          
        </CardContent>
      </Collapse>
    </Card>
  );
}