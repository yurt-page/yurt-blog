import { Icon12Cancel } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside';

const modalRoot = document.querySelector('#modal-root');

const ImagePreviewModal = ({ setIsShowingImagePreview, src, alt }) => {
  const contentRef = useRef(null);

  useOnClickOutside(contentRef, () => setIsShowingImagePreview(false));

  return (
    modalRoot &&
    ReactDOM.createPortal(
      <div
        style={{
          position: 'fixed',
          zIndex: '999',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, .8)',
        }}
      >
        <Button
          onClick={() => setIsShowingImagePreview(false)}
          size="s"
          mode="secondary"
          before={<Icon12Cancel />}
          style={{
            position: 'fixed',
            zIndex: '999',
            top: 20,
            right: 20,
          }}
        ></Button>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ height: '100vh' }} aria-hidden="true">
            &#8203;
          </span>
          <img
            ref={contentRef}
            style={{
              minHeight: '100%',
              maxWidth: '100%',
              display: 'inline-block',
              justifyContent: 'center',
            }}
            src={src}
            alt={alt}
          />
        </div>
      </div>,
      modalRoot
    )
  );
};

export default ImagePreviewModal;
