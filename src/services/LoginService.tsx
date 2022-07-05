import React from 'react';
import AxiosInstance from '../api/AxiosInstance';
import jwt_decode from 'jwt-decode';

const LoginService = async (email: string, senha: string) => {

    var tokenDecoded:any = null;

    try{
        const response = await AxiosInstance.post('autenticacao',{
            email,
            senha
        });

        if (response.status === 200) {
            console.log('LoginService.ResponseStatus: ' + JSON.stringify(response.data));

            tokenDecoded = jwt_decode(response.data.token);
            tokenDecoded['token'] = response.data.token;

            return tokenDecoded;
        } else {

        }
    } catch (error) {
        console.log('Erro ao realizar login: ' + JSON.stringify(error));
    }
}

export default LoginService;