class MovieService{
    getApiBaseUrl(){
        return "http://localhost:5289/api/"  //api base url
    }
    async createMovie(data){
        await fetch (this.getApiBaseUrl()+ 'Movie/AddMovie',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res =>res.json())
        .then(res=>msg=res)
        .catch(err=>msg=err)
    }
    getMovies(){

    }
}
export default new MovieService();