import { useRef, useEffect } from 'react';

export const useEffectOnlyOnce = (callback, dependencies, condition) => {
  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (condition(dependencies)) {
      callback(dependencies);

      calledOnce.current = true;
    }
  }, [callback, condition, dependencies]);
};
