import { useState } from "react";

export default function usePost() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [resp, setResp] = useState('');

    async function postData<T>({url, data, token} : {url: string, data: T, token?: string}) {
        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        }
        if (token) {
            headers['Authorization'] = `Barear ${token}`;
        }
        try{
            const resp = await fetch(`http://localhost:3000/${url}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            })
            setSuccess(true)
            const response = await resp.json();
            setResp(response.token);
        }
        catch (error) {
            setError('Não foi possível enviar os dados!');
        }
    }

    return {postData, success, error, resp}
}