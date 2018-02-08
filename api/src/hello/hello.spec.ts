import micro from 'micro'
import { hello } from './hello';
import listen from '../test-helpers/test-listen';
import * as request from 'request-promise-native';

describe('Hello', () => {
    it('should return an hello object', async() => {
        const service = micro(hello);
        const url = await listen(service);
        const body = await request(url);

        expect(JSON.parse(body).message).toBe('Hello')
    })
});

