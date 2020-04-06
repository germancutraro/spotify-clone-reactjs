import React, { useContext } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylistStart } from '../../containers/Playlists/playlistsActions';
// styles
import {
  ModalContainer,
  ModalDialog,
  ModalCross,
  ModalTitle,
  ModalLabel,
  ModalInputTitle,
  ModalInput,
  ModalButtonOutline,
  ModalButton,
  ModalCrossContainer,
  ModalButtonsContainer,
  ModalButtonOutlineText,
} from './createPlaylistStyles';
import { ModalsContext } from '../ModalsContext/ModalsContextContainer';

const CreatePlaylist = () => {
  const { user } = useSelector(({ auth }) => auth);

  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const { createPlaylist } = useContext(ModalsContext);

  const handleCreatePlaylist = async () => {
    await dispatch(
      createPlaylistStart({ userId: user?.id, name: value || 'New playlist' })
    );

    createPlaylist.setIsVisible(false);
  };

  return createPlaylist.isVisible ? (
    <ModalDialog>
      <ModalContainer>
        <ModalCrossContainer onClick={() => createPlaylist.setIsVisible(false)}>
          <ModalCross stroke='#fff' width={52} height={52} />
        </ModalCrossContainer>
        <ModalTitle>Create new playlist</ModalTitle>

        <ModalLabel>
          <ModalInputTitle>Playlist Name</ModalInputTitle>
          <ModalInput
            type='text'
            placeholder='New Playlist'
            onChange={e => setValue(e.target.value.trim())}
          />
        </ModalLabel>

        <ModalButtonsContainer>
          <ModalButtonOutline
            onClick={() => createPlaylist.setIsVisible(false)}
          >
            <ModalButtonOutlineText>Cancel</ModalButtonOutlineText>
          </ModalButtonOutline>
          <ModalButton onClick={handleCreatePlaylist}>Create</ModalButton>
        </ModalButtonsContainer>
      </ModalContainer>
    </ModalDialog>
  ) : null;
};

export default CreatePlaylist;
