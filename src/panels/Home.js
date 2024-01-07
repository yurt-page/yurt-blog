import { Icon16Add, Icon28GhostSimpleOutline } from '@vkontakte/icons';
import {
  Button,
  Div,
  Panel,
  PanelHeader,
  PanelHeaderContent
} from '@vkontakte/vkui';
import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../utils/API';
import BlogCard from '../components/ui/BlogCard/BlogCard';
import PropTypes from 'prop-types';

const Home = ({ id }) => {
  const [posts, setPosts] = useState({ isLoading: true, data: [] });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = useCallback(async () => {
    setPosts((prevState) => ({ ...prevState, isLoading: true }));
    const posts = await API.getBlogPosts(currentPage);
    setPosts({ isLoading: false, data: posts });
  });

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const onClickShowMoreButton = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <Panel id={id}>
      <PanelHeader>
        <PanelHeaderContent status="Public Blog" before={<Icon28GhostSimpleOutline />}>
          Name Surname
        </PanelHeaderContent>
      </PanelHeader>
      <Div style={{ padding: '5px 10px 0 10px' }}>
        <Button
          style={{ margin: '7px 0 14px 0' }}
          before={<Icon16Add />}
          size="l"
          mode="outline"
          stretched
        >
          Add post
        </Button>
        {posts.data.length > 0
          ? posts.data.map(({ id, title, image, updated, text }) => (
            <BlogCard key={id} title={title} image={image} updated={updated}>
              {text}
            </BlogCard>
          ))
          : 'No posts in this blog yet'}
        {API.pageCount > currentPage && (
          <Div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Button onClick={() => onClickShowMoreButton()} loading={posts.isLoading}>
              Show more posts
            </Button>
          </Div>
        )}
      </Div>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  /*
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
      photo_200: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      city: PropTypes.shape({
        title: PropTypes.string
      })
    })
  */
};


export default Home;
