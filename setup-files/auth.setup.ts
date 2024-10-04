import { test as setup } from '@playwright/test'
import user from '../.auth/user.json'
import fs from 'fs'

const authFile = '.auth/user.json'

// if (!fs.existsSync('./.auth')) {
//     fs.mkdirSync('./.auth');
// }



setup('Authentication', async ({request})=>{

    const response = await request.post('https://api.realworld.io/api/users/login', {
        data: {
            "user": { "email": "davitebralidze@gm.cm", "password": "Dato747292!" }
        }
    });


    const responseBody = await response.json();
    const accessToken = responseBody.user.token;

    user.origins[0].localStorage[0].value = accessToken;

    fs.writeFileSync(authFile, JSON.stringify(user))
})