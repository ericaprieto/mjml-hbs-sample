import React, { createContext, useContext } from "react";
import get from "lodash.get";

const I18NContext = createContext({ t: (key) => key });

export function createI18NProvider(translations) {
  const t = (key) => get(translations, key);

  return function I18NProvider({ children }) {
    return <I18NContext.Provider value={t}>{children}</I18NContext.Provider>;
  };
}

export function useI18N() {
  return useContext(I18NContext);
}
