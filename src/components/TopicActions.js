import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';

const TopicActions = props => {
  return (
    <CardActions>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={4}>
          <Tooltip title="">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Tooltip title="Quay về trang chủ">
            <IconButton onClick={() => props.history.push('/')}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'right' }}>
          <Tooltip title="">
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default TopicActions;