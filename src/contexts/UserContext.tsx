import { User } from "@/types/User";
import { setCookie, getCookie } from "cookies-next";
import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as api from '@/api/api';

type UserContextType = {
   user: User | null;
   isLogged: () => void;
   logout: () => void;
   login: (user: User, token: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);


export const UserProvider = ( { children } : { children : ReactNode} ) => {

    const router = useRouter();

    const [ user, setUser ] = useState<User | null>(null);

    const login = ( user: User, token: string) => {
        setCookie('token', token);
        setUser(user);
        router.replace('/dashboard');
    }

    const logout = () => {
        setUser(null);
        setCookie('token', '');
        router.replace('/auth/login');
    }

    const isLogged = async () => {

        const token = getCookie('token');

        if (token){

            const data = await api.updateToken(token);
            if(data.user){
                setUser(data.user);
                setCookie('token', data.token);
            } else {
                logout();
            }
                      
        } else {
           logout();           
        }
    }

    return (
        <UserContext.Provider value={ { user, login, logout, isLogged } }>
            { children }
        </UserContext.Provider>
    )
}


export const useUser = () => useContext(UserContext);