import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTrackToPlaylistStart } from '../../containers/Playlists/playlistsActions';
import { ModalsContext } from '../ModalsContext/ModalsContextContainer';
// styles
import { AddTrackContainer, AddTrackTitle } from './addTrackStyles';
import {
  ModalDialog,
  ModalCrossContainer,
  ModalCross,
  ModalButtonsContainer,
  ModalButton,
} from '../CreatePlaylist/createPlaylistStyles';
import { LibraryItemsContainer } from '../LibraryItem/playlistItemStyles';
import {
  ItemContainer,
  ImageContainer,
  Image,
  Title,
} from '../ArtistContentItem/artistContentItemStyles';

const AddTrack = () => {
  const playlists = useSelector(({ playlists }) => playlists),
    { id: userId } = useSelector(({ auth }) => auth.user);

  const dispatch = useDispatch();

  const modalsContext = useContext(ModalsContext);

  let { addTrack } = modalsContext;

  const handleOnClick = playlistId => {
    dispatch(
      addTrackToPlaylistStart({ playlistId, tracks: addTrack.addTrackData.uri })
    );
    addTrack.setAddTrackData({ isVisible: false, uri: '' });
  };

  return addTrack.addTrackData.isVisible ? (
    <ModalDialog>
      <AddTrackContainer>
        <ModalCrossContainer
          onClick={() =>
            addTrack.setAddTrackData({ isVisible: false, uri: '' })
          }
        >
          <ModalCross stroke='#fff' width={52} height={52} />
        </ModalCrossContainer>
        <AddTrackTitle>Add to playlist</AddTrackTitle>

        <ModalButtonsContainer>
          <ModalButton onClick={() => alert('new playlist')}>
            New playlist
          </ModalButton>
        </ModalButtonsContainer>
        <LibraryItemsContainer itemMinWidth={220}>
          {playlists.list
            .filter(playlist => playlist.owner.id === userId)
            .map(playlist => (
              <ItemContainer
                hasAnimation={false}
                key={playlist.id}
                onClick={() => handleOnClick(playlist.id)}
              >
                <ImageContainer>
                  <Image src={playlist.images[0].url} />
                </ImageContainer>
                <Title color='#fff'>{playlist.name}</Title>
              </ItemContainer>
            ))}
        </LibraryItemsContainer>
      </AddTrackContainer>
    </ModalDialog>
  ) : (
    <div></div>
  );
};

export default AddTrack;
