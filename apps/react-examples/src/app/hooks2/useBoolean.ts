// https://www.robinwieruch.de/react-custom-hook/

import { useState } from "react";

type VoidFn = () => void;

type StateControl = {
  setTrue: VoidFn;
  setFalse: VoidFn;
  setToggle: VoidFn;
};


export function useBoolean(initialState = false): [boolean, StateControl] {
  const [state, setState] = useState<boolean>(initialState);

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
}
