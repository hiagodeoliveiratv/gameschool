"use client"

import { InputField } from '@/components/auth/InputField';
import { useEffect, useState } from 'react';
import { Button } from '@/components/auth/Button';
import { z } from "zod";
import { ErrorItem, getErrorsFromZod } from '@/utils/getErrorsFromZod';
import * as api from '@/api/api';
import { useUser } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import Logo from '../../../../public/logo.png';
import Image from 'next/image';
import { toast } from 'react-toastify';


const Page = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ errors, setErrors ] = useState<ErrorItem[]>([]);
    

    const userCtx = useUser();
    
    const authSchema = z.object({
        email: z.string().email({message: "E-mail inválido"}),
        password: z.string().min(6, { message: "As senhas precisam ter no mínimo 6 caracteres"}),
    });
    
    const handleLoginButton = async () => {

        if(errors.length > 0) return;
        setLoading(true);

        const data = await api.login(email, password);

       
        if(data.error) {
            toast.error(data.error);
            setLoading(false);
            return;
        }

        userCtx?.login(data.user, data.token);

        setLoading(false);

        // Salvo os dados do usuário no contexto, salvo o cookie e encaminho para o Dashboard

    }
    

    useEffect(() => {
        const data = authSchema.safeParse({email, password});

        if(!data.success){
            if(email.length > 0 || password.length > 0){
                setErrors(getErrorsFromZod(data.error))    
            }        
        } else {
            setErrors([]);
        }

    }, [email, password]);

    
    return (

        <div className="flex-1 md:max-w-md md:p-10 rounded-md ">
           
            <Image
                className="mx-auto mb-10"
                src={Logo}
                width={150}
                alt="Logo"
            
            />

            <div className='mb-5'>
                <InputField
                    placeholder="Digite seu email"
                    value={email}
                    label='E-mail'
                    onChange={ (e) => setEmail(e.target.value) }
                    errorMessage={errors.find(item=>item.field === 'email')?.message}
                    disabled={loading}
                   
                />
            </div>
            <div className='mb-5'>
                <InputField
                    value={password}
                    label='Senha'
                    placeholder="Sua senha"
                    type="password"
                    onChange={ (e) => setPassword(e.target.value) }
                    errorMessage={errors.find(item=>item.field === 'password')?.message}
                    disabled={loading}
                />
            </div>
           

            <div className="mt-20">
                <Button
                    label="Entrar"
                    onClick={handleLoginButton}
                    disabled={loading}
                />
            </div>
            <a className="block text-sm text-center mt-8 cursor-pointer">Esqueceu sua senha?</a>
          
            
        </div>
    )
}


export default Page;