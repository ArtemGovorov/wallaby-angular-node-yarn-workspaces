import { Server } from 'http';
const listen = (srv: Server, hostname = 'localhost') => new Promise((resolve, reject) => {
    srv.on('error', reject);

    srv.listen(() => {
        const {port} = srv.address();
        const url: string = `http://${hostname}:${port}`;
        resolve(url)
    })
}) as Promise<string>;

export default listen;