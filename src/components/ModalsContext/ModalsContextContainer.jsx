import React, { createContext, useState } from 'react';

export const ModalsContext = createContext();

const ModalsContextContainer = ({ children }) => {
  const [addTrackData, setAddTrackData] = useState({
    isVisible: false,
    uri: '',
  });

  return (
    <ModalsContext.Provider
      value={{
        addTrack: {
          addTrackData: addTrackData,
          setAddTrackData: setAddTrackData,
        },
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextContainer;
