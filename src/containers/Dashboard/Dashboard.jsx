import React, { useEffect } from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from '../Auth/authActions';
import { getUserPlaylistsStart } from '../Playlists/playlistsActions';
import {
  getRecentlyPlayedStart,
  getRecommendationsStart,
  getNewReleasesStart,
  getFeaturedPlaylistsStart
} from './dashboardActions';
import {
  LibraryItemsContainer,
  SectionTitleContainer,
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import useNotifier from '../../hooks/useNotifier';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  useTitle('Spotify - Clone');

  const {
      played,
      recommendations,
      featured,
      releases,
      loading,
      error
    } = useSelector(({ dashboard }) => dashboard),
    authLoading = useSelector(({ auth }) => auth.loading),
    playlistLoading = useSelector(({ playlists }) => playlists.loading);

  useEffect(() => {
    dispatch(getUserStart());
    dispatch(getUserPlaylistsStart());
    dispatch(getRecentlyPlayedStart());
    dispatch(getRecommendationsStart());
    dispatch(getNewReleasesStart());
    dispatch(getFeaturedPlaylistsStart());
  }, [dispatch]);

  if (loading || authLoading || playlistLoading)
    return <Loader isLoading={loading || authLoading || playlistLoading} />;

  if (!loading && error) showSnackbar();

  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>Recently played</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {played.map(({ track }, i) => (
          <LibraryItem
            key={i}
            id={track.album.id}
            title={track.name}
            subtitle={track.artists[0].name}
            cover={track.album.images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>Country</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {recommendations.country &&
          recommendations.country.map(({ name, id, album }, i) => (
            <LibraryItem
              key={i}
              id={album.id}
              title={name}
              subtitle={album.artists[0].name}
              cover={album.images[0].url}
              type='album'
            />
          ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>Classical</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {recommendations.classical &&
          recommendations.classical.map(({ name, id, album }, i) => (
            <LibraryItem
              key={i}
              id={album.id}
              title={name}
              subtitle={album.artists[0].name}
              cover={album.images[0].url}
              type='album'
            />
          ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>Featured Playlists</SectionTitle>
      </SectionTitleContainer>

      <LibraryItemsContainer>
        {featured.map(({ id, name, images, owner: { display_name } }, i) => (
          <LibraryItem
            key={i}
            id={id}
            title={name}
            subtitle={display_name}
            cover={images[0].url}
            type='playlist'
          />
        ))}
      </LibraryItemsContainer>
      <SectionTitleContainer>
        <SectionTitle>New Releases</SectionTitle>
      </SectionTitleContainer>

      <LibraryItemsContainer>
        {releases.map(({ id, name, images, artists }, i) => (
          <LibraryItem
            key={i}
            id={id}
            title={name}
            subtitle={artists[0].name}
            cover={images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
    </>
  );
};

export default Dashboard;
