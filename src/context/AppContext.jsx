import React, { useState, createContext, useContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context == undefined) {
    throw new Error("useAppContext must be within a App provider");
  }
  return context;
}
