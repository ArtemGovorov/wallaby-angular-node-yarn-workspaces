import { IncomingMessage, ServerResponse } from 'http';
import { send } from 'micro';

export async function hello(req: IncomingMessage, res: ServerResponse) {
    const statusCode = 200;
    const data = { message: 'Hello'};
    send(res, statusCode, data)
}


