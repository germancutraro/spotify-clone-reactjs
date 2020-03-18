import React from 'react';
import { Switch, useParams } from 'react-router-dom';
import { LibraryLink } from '../../components/LibraryMenu/libraryMenuStyles';
import TrackItem from '../../components/TrackItem/TrackItem';
import ArtistContentItem from '../../components/ArtistContentItem/ArtistContentItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getArtistStart,
  getArtistTracksStart,
  getArtistAlbumsStart,
  isUserFollowingStart,
  followArtistStart
} from './artistActions';

import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import ArtistRoutes from './ArtistRoutes';
import {
  ArtistContainer,
  ArtistBackground,
  ArtistSubContainer,
  ArtistHeader,
  ArtistName,
  ArtistButtonsContainer,
  ArtistPlayButton,
  ArtistFollowContainer,
  ArtitstFollowText,
  ArtistMoreIconContainer,
  ArtistSection
} from './artistStyles';

import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import {
  SectionTitleContainer,
  SectionTitle,
  LibraryItemsContainer
} from '../../components/LibraryItem/playlistItemStyles';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, tracks, following, loading } = useSelector(
    ({ artist }) => artist
  );
  const { albums, singles, appears } = useSelector(
    ({ artist: { albums } }) => ({
      albums: albums.filter(({ album_type }) => album_type === 'album'),
      singles: albums.filter(({ album_type }) => album_type === 'single'),
      appears: albums.filter(({ album_type }) => album_type === 'compilation')
    })
  );

  useTitle(`Spotify - ${artist.name}`);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getArtistStart({ id }));
    dispatch(isUserFollowingStart({ id }));
    dispatch(getArtistTracksStart({ id }));
    dispatch(getArtistAlbumsStart({ id }));
  }, [dispatch, id]);

  const handleFollow = async () => {
    // await is important here!
    await dispatch(
      followArtistStart({ id, action: following ? 'unfollow' : 'follow' })
    );
    dispatch(isUserFollowingStart({ id }));
  };

  if (loading) return <Loader isLoading={loading} />;

  const randomColors = [
    '#1db954',
    '#ffffff',
    '#9A952B',
    '#509BF5',
    '#BA2323',
    '#de681d',
    '#de1d79',
    '#2ad6bc',
    '#312883',
    '#BAF2F3'
  ];

  return (
    <ArtistContainer style={{ color: '#fff' }}>
      <ArtistBackground
        color={randomColors[artist?.followers?.total?.toString()[0]]}
      />
      <ArtistSubContainer>
        <ArtistHeader>
          <ArtistName>{artist.name}</ArtistName>
          <ArtistButtonsContainer>
            <ArtistPlayButton onClick={() => alert('play')}>
              Play
            </ArtistPlayButton>
            <ArtistFollowContainer onClick={handleFollow}>
              <ArtitstFollowText color={following ? '#1db954' : '#fff'}>
                {following ? 'UnFollow' : 'Follow'}
              </ArtitstFollowText>
            </ArtistFollowContainer>
            <ArtistMoreIconContainer onClick={() => alert('more')}>
              <MoreIcon fill='#fff' width={24} />
            </ArtistMoreIconContainer>
          </ArtistButtonsContainer>
          <ul>
            <LibraryLink to={`/app/artist/${id}`}>OVERVIEW</LibraryLink>
            <LibraryLink to={`/app/artist/${id}/related`}>
              RELATED ARTISTS
            </LibraryLink>
            <LibraryLink to={`/app/artist/${id}/about`}>ABOUT</LibraryLink>
          </ul>
        </ArtistHeader>

        <Switch>
          <ArtistRoutes />
        </Switch>

        {tracks.length ? (
          <ArtistSection>
            <SectionTitleContainer hasPadding={false}>
              <SectionTitle>Popular</SectionTitle>
            </SectionTitleContainer>
            {tracks.map((track, i) => (
              <TrackItem
                key={i}
                added_at={track?.added_at}
                hasSubtext={false}
                hasImage={true}
                align='center'
                hasPadding={false}
                song={{
                  ...track,
                  cover: artist.images[0].url
                }}
              />
            ))}
          </ArtistSection>
        ) : null}

        {albums.length ? (
          <ArtistSection>
            <SectionTitleContainer hasPadding={false}>
              <SectionTitle>Albums</SectionTitle>
            </SectionTitleContainer>
            <LibraryItemsContainer hasPadding={false} itemMinWidth={220}>
              <ArtistContentItem albums={albums} />
            </LibraryItemsContainer>
          </ArtistSection>
        ) : null}

        {singles.length ? (
          <ArtistSection>
            <SectionTitleContainer hasPadding={false}>
              <SectionTitle>Singles</SectionTitle>
            </SectionTitleContainer>
            <LibraryItemsContainer hasPadding={false} itemMinWidth={220}>
              <ArtistContentItem albums={singles} />
            </LibraryItemsContainer>
          </ArtistSection>
        ) : null}

        {appears.length ? (
          <ArtistSection>
            <SectionTitleContainer hasPadding={false}>
              <SectionTitle>Appears on</SectionTitle>
            </SectionTitleContainer>
            <LibraryItemsContainer hasPadding={false} itemMinWidth={220}>
              <ArtistContentItem albums={appears} />
            </LibraryItemsContainer>
          </ArtistSection>
        ) : null}
      </ArtistSubContainer>
    </ArtistContainer>
  );
};

export default Artist;
