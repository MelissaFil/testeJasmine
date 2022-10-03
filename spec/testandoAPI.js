describe("Acesso à API", function() {
    let api = new ApiMarvel()

    it("GET ok", function() {
        let urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137';

        api.conectarAPI(urlAPI);
        expect(api.Conectado).toEqual(true);
    });
  

});