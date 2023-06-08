import { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type ContextType<T> = [ value: T, setValue: Dispatch<SetStateAction<T>> ];

export function createContextFor<T>(defaultValue: T) {
  const Context = createContext<ContextType<T>>({} as ContextType<T>);

  const Provider = ({ children }: { children: ReactNode; }) => {
    const [value, setValue] = useState<T>(defaultValue);

    return (
      <Context.Provider value={ [value, setValue] }>
        {children}
      </Context.Provider>
    );
  };

  const useValue = () => useContext(Context);

  return { Context, Provider, useValue };
}
