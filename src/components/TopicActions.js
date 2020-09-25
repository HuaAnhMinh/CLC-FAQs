import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HomeIcon from '@material-ui/icons/Home';

import topicsInformation from '../topics/information';

const TopicActions = props => {
  return (
    <CardActions>
      <Grid
        container
        justify="center"
        spacing={2}
      >
        <Grid
          item
          xs={4}
        >
          <Tooltip
            title={props.position === 0
              ?
              ""
              :
              topicsInformation[props.position - 1].title
            }
          >
            <IconButton
              disabled={props.position === 0}
              onClick={() => props.history.push(`/${topicsInformation[props.position - 1].pathname}`)}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        
        <Grid
          item
          xs={4}
          style={{ textAlign: 'center' }}
        >
          <Tooltip title="Quay về trang chủ">
            <IconButton onClick={() => props.history.push('/')}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid
          item
          xs={4}
          style={{ textAlign: 'right' }}
        >
          <Tooltip
            title={props.position === topicsInformation.length - 1
              ?
              ""
              :
              topicsInformation[props.position + 1].title
            }
          >
            <IconButton
              disabled={props.position === topicsInformation.length - 1}
              onClick={() => props.history.push(`/${topicsInformation[props.position + 1].pathname}`)}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default TopicActions;