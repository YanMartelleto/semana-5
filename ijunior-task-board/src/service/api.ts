import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  headers: { 
    // ✔️ Cole aqui o seu token pessoal!
    // Acesse trainee.fidelis.workers.dev/inicio para pegar o seu.
    'Authorization': 'Bearer a91711dd-e43d-4fc4-b840-3befa2a9f195',
    'Content-Type': 'application/json',
  },
});