import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const RootPortal = ({ children }: any) => {
  const portalRoot = document.getElementById('portal-root') as HTMLElement;
  const toastContainer = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    portalRoot.appendChild(toastContainer);
    return () => {
      toastContainer.remove();
    };
  });

  return createPortal(children, portalRoot);
};
