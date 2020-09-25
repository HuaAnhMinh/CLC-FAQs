/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import marked from 'marked';

import Header from './Header';
import TopicActions from './TopicActions';

import '../styles/components/Topic.scss';

import topicsInformation from '../topics/information';
import TopicNotFound from './TopicNotFound';

const Topic = props => {
  const [topicInfo, setTopicInfo] = useState(null);
  const [topicPosition, setTopicPosition] = useState(0);
  const [markdown, setMarkdown] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);

    const topicName = props.match.params.topicName;
    const topicFound = topicsInformation.find((topic, index) => {
      if (topic.pathname === topicName) {
        setTopicPosition(index);
        return true;
      }
      return false;
    });

    if (topicFound) {
      setTopicInfo(topicFound);
    }
    else {
      setNotFound(true);
    }
  }, [props.match.params.topicName]);

  const fetchContent = async (path) => {
    try {
      const response = await fetch(path);
      const text = await response.text();
      setMarkdown(marked(text));
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (topicInfo) {
      const path = require(`../topics/${topicInfo.ref}`);
      fetchContent(path);
    }
  }, [topicInfo]);

  return (
    <div className="container topic">
      <Header />

    {
      !notFound &&
      <Card className="topic__body">
        <TopicActions
          history={props.history}
          position={topicPosition}
        />

        <CardContent>

          <Typography
            variant="h4"
            component="h2"
            className="topic__body__title"
          >
            { topicInfo && topicInfo.title }
          </Typography>

          <Typography
            color="textSecondary"
            className="topic__body__createdAt"
          >
            { topicInfo && topicInfo.createdAt }
          </Typography>

          <Typography
            variant="body1"
            component="p"
            dangerouslySetInnerHTML={{ __html: markdown }}
            className="topic__body__content"
          />

        </CardContent>

        <TopicActions
          history={props.history}
          position={topicPosition}
        />
      </Card>
    }

    {
      notFound &&
      <TopicNotFound history={props.history} />
    }
    </div>
  );
};

export default Topic;