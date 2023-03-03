import { useEffect } from 'react';

const useScrollToTop = (ref=window, dependencies=[]) => {
  useEffect(() => {
    if(ref) ref.scrollTo(0, 0);
  }, dependencies);

  return null;
}

export default useScrollToTop;