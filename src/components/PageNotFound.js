import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import Header from './Header';

import '../styles/components/PageNotFound.scss';

const PageNotFound = props => {
  return (
    <div className="container page-not-found">
      <Header />

      <Card className="page-not-found__body">
        <CardContent>
          <Typography variant="h3" component="h3">Lỗi 404.</Typography>
          <Typography
            variant="h4"
            component="h4"
            style={{ marginTop: '20px' }}
          >
            Không tồn tại trang cần tìm
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
    </div>
  );
};

export default PageNotFound;