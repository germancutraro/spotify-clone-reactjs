import React, { useState } from 'react';
import { Switch, useParams, Route } from 'react-router-dom';
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
  followArtistStart,
  getArtistRelatedStart,
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
  ArtistSection,
} from './artistStyles';

import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import {
  SectionTitleContainer,
  SectionTitle,
  LibraryItemsContainer,
} from '../../components/LibraryItem/playlistItemStyles';
import MoreMenu from '../../components/MoreMenu/MoreMenu';
import { checkLikeSongStart } from '../Playlists/playlistsActions';

const Artist = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const { likedSongs, loading: playlistLoading } = useSelector(
    ({ playlists }) => playlists
  );
  const { artist, tracks, following, loading } = useSelector(
    ({ artist }) => artist
  );
  const { albums, singles, appears } = useSelector(
    ({ artist: { albums } }) => ({
      albums: albums.filter(({ album_type }) => album_type === 'album'),
      singles: albums.filter(({ album_type }) => album_type === 'single'),
      appears: albums.filter(({ album_type }) => album_type === 'compilation'),
    })
  );

  useTitle(`Spotify - ${artist.name}`);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getArtistStart({ id }));
    dispatch(isUserFollowingStart({ id }));
    dispatch(getArtistTracksStart({ id }));
    dispatch(getArtistAlbumsStart({ id }));
    dispatch(getArtistRelatedStart({ id }));
    dispatch(checkLikeSongStart());
  }, [dispatch, id]);

  const handleFollow = () => {
    dispatch(
      followArtistStart({ id, action: following ? 'unfollow' : 'follow' })
    );
  };

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  if (loading || playlistLoading) return <Loader isLoading={loading} />;

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
    '#BAF2F3',
  ];

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          {
            title: 'Copy artist link',
          },
        ]}
      />
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
              <ArtistMoreIconContainer
                onClick={handleOnClickMore}
                active={isMoreMenuOpen}
              >
                <MoreIcon fill='#fff' width={24} />
              </ArtistMoreIconContainer>
            </ArtistButtonsContainer>
            <ul>
              <LibraryLink exact to={`/app/artist/${id}`}>
                OVERVIEW
              </LibraryLink>
              <LibraryLink exact to={`/app/artist/${id}/related`}>
                RELATED ARTISTS
              </LibraryLink>
              <LibraryLink exact to={`/app/artist/${id}/about`}>
                ABOUT
              </LibraryLink>
            </ul>
          </ArtistHeader>

          <Switch>
            <Route
              path={`/app/artist/${id}`}
              exact
              component={() => (
                <>
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
                            cover: artist.images && artist.images[0].url,
                          }}
                          liked={likedSongs.includes(track.id)}
                        />
                      ))}
                    </ArtistSection>
                  ) : null}

                  {albums.length ? (
                    <ArtistSection>
                      <SectionTitleContainer hasPadding={false}>
                        <SectionTitle>Albums</SectionTitle>
                      </SectionTitleContainer>
                      <LibraryItemsContainer
                        hasPadding={false}
                        itemMinWidth={220}
                      >
                        <ArtistContentItem albums={albums} />
                      </LibraryItemsContainer>
                    </ArtistSection>
                  ) : null}

                  {singles.length ? (
                    <ArtistSection>
                      <SectionTitleContainer hasPadding={false}>
                        <SectionTitle>Singles</SectionTitle>
                      </SectionTitleContainer>
                      <LibraryItemsContainer
                        hasPadding={false}
                        itemMinWidth={220}
                      >
                        <ArtistContentItem albums={singles} />
                      </LibraryItemsContainer>
                    </ArtistSection>
                  ) : null}

                  {appears.length ? (
                    <ArtistSection>
                      <SectionTitleContainer hasPadding={false}>
                        <SectionTitle>Appears on</SectionTitle>
                      </SectionTitleContainer>
                      <LibraryItemsContainer
                        hasPadding={false}
                        itemMinWidth={220}
                      >
                        <ArtistContentItem albums={appears} />
                      </LibraryItemsContainer>
                    </ArtistSection>
                  ) : null}
                </>
              )}
            />
            <ArtistRoutes />
          </Switch>
        </ArtistSubContainer>
      </ArtistContainer>
    </>
  );
};

export default Artist;
