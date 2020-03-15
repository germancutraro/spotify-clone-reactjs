import React from 'react';
import { Route } from 'react-router-dom';
import ArtistAbout from './ArtistAbout';
import ArtistRelated from './ArtistRelated';

const ArtistRoutes = () => (
  <>
    <Route path={`/app/artist/:id/about`} component={ArtistAbout} exact />
    <Route path={`/app/artist/:id/related`} component={ArtistRelated} exact />
  </>
);

export default React.memo(ArtistRoutes);
