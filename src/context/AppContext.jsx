import { createContext, useState } from "react";

export const AppContext = createContext(null);
export const AppProvider = ({ children }) => {
  const [skillsInView, setSkillsInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  return (
    <AppContext.Provider
      value={{
        skillsInView,
        setSkillsInView,
        projectsInView,
        setProjectsInView,
        contactInView,
        setContactInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
