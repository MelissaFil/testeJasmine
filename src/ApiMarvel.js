function ApiMarvel() {
}

ApiMarvel.prototype.conectarAPI = function(urlAPI){  

   fetch(urlAPI)
   .then(this.Conectado=true)

}

