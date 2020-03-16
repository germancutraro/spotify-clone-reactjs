import React from 'react';
import PropTypes from 'prop-types';
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
  ModalButtonOutlineText
} from './createPlaylistStyles';

const CreatePlaylist = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const { user } = useSelector(({ auth }) => auth);

  const handleCreatePlaylist = () => {
    if (value.length)
      dispatch(createPlaylistStart({ userId: user?.id, name: value }));
  };

  return isOpen ? (
    <ModalDialog>
      <ModalContainer>
        <ModalCrossContainer onClick={handleClose}>
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
          <ModalButtonOutline onClick={handleClose}>
            <ModalButtonOutlineText>Cancel</ModalButtonOutlineText>
          </ModalButtonOutline>
          <ModalButton onClick={handleCreatePlaylist}>Create</ModalButton>
        </ModalButtonsContainer>
      </ModalContainer>
    </ModalDialog>
  ) : null;
};

CreatePlaylist.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CreatePlaylist;
