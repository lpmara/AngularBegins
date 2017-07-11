describe("Unit: Testing For Services", () => {
    describe('Customers Service test', () => {

        it('Get All Customers', (done) => {
            request(app)
                .get('/customers/')
                .set('Accept', 'application/json')
                .set('test', 'true')
                .send()
                .expect(200)
                .end((err, res) => {
                    done();
                });
        });
    });
});