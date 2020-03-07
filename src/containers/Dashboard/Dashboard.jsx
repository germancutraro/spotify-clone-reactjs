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

const Dashboard = () => {
  const dispatch = useDispatch();

  const { played, recommendations, featured, releases, loading } = useSelector(
      ({ dashboard }) => dashboard
    ),
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
    return <h1 style={{ color: '#fff' }}>loading</h1>;

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
            name={track.name}
            author={track.artists[0].name}
            cover={track.album.images[0].url}
            isAlbum
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
              name={name}
              author={album.artists[0].name}
              cover={album.images[0].url}
              isAlbum
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
              name={name}
              author={album.artists[0].name}
              cover={album.images[0].url}
              isAlbum
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
            name={name}
            author={display_name}
            cover={images[0].url}
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
            name={name}
            author={artists[0].name}
            cover={images[0].url}
            isAlbum
          />
        ))}
      </LibraryItemsContainer>
    </>
  );
};

export default Dashboard;
