import { Spinner } from '@vkontakte/vkui';
import React from 'react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Spinner size="medium" style={{ margin: '20px 0' }} />
    </div>
  );
};

export default Loader;
