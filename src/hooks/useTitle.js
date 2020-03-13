import { useState, useEffect } from 'react';

function useTitle(newTitle) {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    if (newTitle && !newTitle.includes('undefined')) {
      setTitle(newTitle);
      document.title = title;
    }
  }, [title, newTitle]);
}

export default useTitle;
