function initVue(){
  new Vue({
    el:'#app',
    data:{
     search:'',
     arrFilms:[],
    },
    computed: {
      // filteredFilm: function(){
      //   return this.film.filter(data => {
      //     const res = data.
      //   })
      // }
    },
    methods:{
      // filteredFilm: function() {
      //     if (this.search == '') {
      //         return this.film;
      //     }
    },
    mounted() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params:{
         "api_key":"ddde7396f3d042a400eadf2474278e89",
         "query": "matrix",
        }
      })
      .then(data => {
        const films = data.data.results;
        this.arrFilms = films;
        console.log(this.arrFilms);

      })
      .catch(() => console.log('error'));
    },
  });
}

function init(){
  initVue();
}
$(init);
