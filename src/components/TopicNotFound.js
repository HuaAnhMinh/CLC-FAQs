import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const TopicNotFound = props => {
  return (
    <Card className="topic__body">
      <CardContent>
        <Typography
          variant="h3"
          component="h3"
          className="topic__body__title"
        >
          Lỗi 404.
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          className="topic__body__title"
          style={{ marginTop: '20px' }}
        >
          Không tồn tại topic cần tìm
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton
          style={{ margin: 'auto' }}
          size="medium"
          onClick={() => props.history.push('/')}
        >
          <HomeIcon style={{ fontSize: '50px' }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TopicNotFound;