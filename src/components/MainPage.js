import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from './Header';
import SearchBar from './SearchBar';

import '../styles/components/MainPage.scss';

import topicsInformation from '../topics/information';

const MainPage = props => {
  const [searchPattern, changeSearchPattern] = useState('');
  
  return (
    <div className="container main-page">
      <Header />

      <SearchBar
        searchPattern={searchPattern}
        changeSearchPattern={changeSearchPattern}
      />

      <div className="main-page__body">
      {
        topicsInformation.map(topicInfo => {
          if (topicInfo.title.toLowerCase().includes(searchPattern.toLowerCase())) {
            return (
              <Card key={topicInfo.id} className="main-page__body__card">
                <CardActionArea onClick={() => props.history.push(`/${topicInfo.pathname}`)}>
                  <CardContent>
                    <Typography variant="h5" component="h2" className="main-page__body__card__title">
                      { topicInfo.title }  
                    </Typography>

                    <Typography color="textSecondary" className="main-page__body__card__createdAt">
                      { topicInfo.createdAt }
                    </Typography>

                    <Typography variant="body2" component="p" className="main-page__body__card__description">
                      { topicInfo.description }
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" onClick={() => props.history.push(`/${topicInfo.pathname}`)}>
                    Xem thêm
                  </Button>
                </CardActions>
              </Card>
            );
          }

          return null;
        })
      }
      </div>
    </div>
  );
};

export default MainPage;