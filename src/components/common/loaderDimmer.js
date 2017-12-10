import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const loaderDimmer = ({ active }) => {
  return (
    <Dimmer active={active}>
      <Loader />
    </Dimmer>
  );
};

export default loaderDimmer;
