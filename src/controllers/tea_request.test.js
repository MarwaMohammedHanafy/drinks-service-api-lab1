const request = require('supertest');
const app = require('../app');
describe('Test tea API endpoint request', () => {
    test('GET /tea should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ teaName: 'Mint tea' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'tea',
            name: 'Mint tea',
        });
    });
    test('GET /tea with Mango Coconut tea as teaName param should return correct object',
        async () => {
            const res = await request(app)
                .get('/tea')
                .query({ teaName: 'Mango Coconut tea' });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                drinkType: 'tea',
                name: 'Mango Coconut tea',
            });
        }
    );
    test('GET /tea with empty  param should return correct object',
        async () => {
            const res = await request(app)
                .get('/tea')
                .query({ teaName: '' });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
                drinkType: 'tea',
                name: '',
            });
        }
    );
});