import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import TopicActions from './TopicActions';

import '../styles/components/Topic.scss';

import topicsInformation from '../topics/information';

const Topic = props => {
  const topicName = props.match.params.topicName;
  const topicInfo = topicsInformation.find(topic => topic.pathname === topicName);

  return (
    <div className="container topic">
      <Header />

      <Card className="topic__body">
        <TopicActions history={props.history} />

        <CardContent>

          <Typography variant="h5" component="h2" className="topic__body__title">
            { topicInfo.title }
          </Typography>

          <Typography color="textSecondary" className="topic__body__createdAt">
            { topicInfo.createdAt }
          </Typography>

        </CardContent>

        <TopicActions history={props.history} />
      </Card>
    </div>
  );
};

export default Topic;