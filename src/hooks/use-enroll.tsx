import { createContext, useContext, useState, ReactNode } from "react";

interface EnrollContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const EnrollContext = createContext<EnrollContextType>({ open: false, setOpen: () => {} });

export const useEnroll = () => useContext(EnrollContext);

export const EnrollProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <EnrollContext.Provider value={{ open, setOpen }}>
      {children}
    </EnrollContext.Provider>
  );
};
