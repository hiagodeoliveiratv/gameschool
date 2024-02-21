"use client";


import { ReactNode } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { UserProvider } from '../contexts/UserContext';

export const Providers = ( { children } : { children: ReactNode } ) => {
    return (
        <>
            <UserProvider>
                { children }
            </UserProvider>
            <ToastContainer
                position="top-center"
                theme="colored"
                autoClose={2000}
            />
        </>
   
    )
}