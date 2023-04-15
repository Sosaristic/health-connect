
import React, {createContext,useContext} from 'react';
import useAuthState from '../custom/useAuthState';

  
  


const AuthContext = createContext()
  
  export function AuthProvider({ children }) {
       const { signUp,logIn,isAuth,signOut,userInfo} = useAuthState();
      
    
    const value = {
        signUp,
        logIn,
        isAuth,
        signOut,
        userInfo
    }

    return <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
  }
  
  export function useAuthContext() {
    const context = useContext(AuthContext)
    if (context == undefined) {
      throw new Error('useAuthContext must be within a App provider')
    }
    return context
  }