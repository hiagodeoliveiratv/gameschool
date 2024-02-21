import { req } from '@/api/axios';

import { AuthResponse } from '@/types/auth/AuthResponse';
import { AxiosError } from 'axios';

// Autenticação da API
export const login = async (email : string, password : string): Promise<AuthResponse>=> {

    try {
        const res = await req.post(`/auth/login`, {email, password}); 
        if(res.data){
            return res.data as AuthResponse;    
        } 

        return { error: 'Ocorreu um erro'} as AuthResponse

    } catch ( error : any) {
        return { error: error.response.data.error} as AuthResponse;  
    }
 
}

// Atualiza o token
export const updateToken = async (token: string) : Promise<AuthResponse> => {
    
    try {
        const res = await req.post(`/auth/token`, {token});

        if(res.data){
            return res.data as AuthResponse; 
        };

        return { error : 'Ocorreu um erro'} as AuthResponse;

    } catch ( error : any) {

        return { error: error.response.data.error } as AuthResponse; 
    }
}

