import React, { useEffect, useState } from 'react';
import { Caption, Card, Div, Title } from '@vkontakte/vkui';
import BlogCardImage from './BlogCardImage';
import ImagePreviewModal from './ImagePreviewModal';

const BlogCard = ({ title, image, updated, children }) => {
  const [isShowingImagePreview, setIsShowingImagePreview] = useState(false);

  useEffect(() => {
    if (isShowingImagePreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isShowingImagePreview]);

  return (
    <>
      <Card style={{ margin: '0 0 16px 0' }} mode="outline">
        {image && (
          <div onClick={() => setIsShowingImagePreview(true)}>
            <BlogCardImage src={image} alt={title} height={350} />
          </div>
        )}
        <Div>
          <Title level="3" weight="outline" style={{ marginBottom: 8 }}>
            {title}
          </Title>
          <Caption level="1" weight="regular" style={{ marginBottom: 8 }}>
            {children}
          </Caption>
          <Caption level="1" weight="regular">
            {children}
          </Caption>
          <Caption
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '8px 0 0 0',
              color: 'gray',
            }}
            level="1"
            weight="regular"
          >
            {updated}
          </Caption>
        </Div>
      </Card>
      {isShowingImagePreview && (
        <ImagePreviewModal
          setIsShowingImagePreview={setIsShowingImagePreview}
          src={image}
          alt={title}
        />
      )}
    </>
  );
};

export default BlogCard;
