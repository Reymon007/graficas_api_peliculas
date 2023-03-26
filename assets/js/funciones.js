const chartPeliculasPopulares = document.querySelector('#peliculas_populares')

const urlBase = "https://api.themoviedb.org/3/movie/popular?api_key=f81fa3c12f98c8ce35ced4ac660702b1&language=es-MX"; //API

document.addEventListener('DOMContentLoaded',() => {

    //Ejecutar Peticion Api
    obtenerPeliculas();

})

const obtenerPeliculas = async () =>{

    //Metodo Fetch
    const response = await fetch(urlBase); //GET
    console.log(response);

    //Json

    /* const json = await response.json();
    console.log(response); */

    const { results } = await response.json(); //Destructuración { msg, error, results}
    console.log(results);

    //Manipular Json en chart
    const primerPelicula = results[0];
    console.log(primerPelicula);


    //Crear configuracion del chart, viene de la config del chart en la pagina web

    const chartConfiguracion = {
        type: 'bar',
        data:{
            labels:results.map(title =>title.title ),
            datasets:[{
                label: 'Peliculas más votadas',
                data: results.map( popularity => popularity.popularity),
                backgroundColor: results.map(() => 'rgba(255, 99, 132, 0.2)')
            }]
        },
        options: {
            scales:{
                y: {
                    beginAtZero: true
                }
            }
        },
    }




   //Recibe el canvas del html
   const chart = new Chart(
    chartPeliculasPopulares,
    chartConfiguracion
);
}
