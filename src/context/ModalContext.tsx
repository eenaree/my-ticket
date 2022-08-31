import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';

type ModalActions =
  | { type: 'OPEN_MODAL'; name: string }
  | { type: 'CLOSE_MODAL' };

const ModalContext = createContext<string | undefined>(undefined);
const ModalDispatchContext = createContext<
  React.Dispatch<ModalActions> | undefined
>(undefined);

const modalReducer: React.Reducer<string, ModalActions> = (_, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;
    case 'CLOSE_MODAL':
      return '';
  }
};

export function ModalProvider({ children }: React.PropsWithChildren<unknown>) {
  const [modal, dispatch] = useReducer(modalReducer, '');

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export function useModal() {
  const state = useContext(ModalContext);
  if (state === undefined) {
    throw new Error('ModalContext Provider can not found');
  }
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext);
  if (dispatch === undefined) {
    throw new Error('ModalDispatchContext Provider can not found');
  }
  return dispatch;
}
