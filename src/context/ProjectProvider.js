import React, { useContext, useState, useEffect } from 'react'
const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  const [loginModal, setLoginModal] = useState(false)
  const loginModalClose = () => setLoginModal(false)
  const loginModalShow = () => setLoginModal(true)

  const [registerModal, setRegisterModal] = useState(false)
  const RegisterClose = () => setRegisterModal(false)
  const RegisterShow = () => setRegisterModal(true)

  return (
    <ProjectContext.Provider
      value={{
        loginModal,
        loginModalClose,
        loginModalShow,
        registerModal,
        RegisterClose,
        RegisterShow,
        userData,
        setUserData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export const useProjectContext = () => {
  return useContext(ProjectContext)
}
