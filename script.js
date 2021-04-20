function initVue(){
  new Vue({
    el:'#app',
    data:{
     search:'',
     arrFilms:[],
     arrSeries:[],
    },
    computed: {
      // filteredFilm: function(){
      //   return this.film.filter(data => {
      //     const res = data.
      //   })
      // }
    },
    methods:{
      clickSearch: function(){
        axios.get("https://api.themoviedb.org/3/search/movie", {
          params:{
           "api_key":"ddde7396f3d042a400eadf2474278e89",
           "query": this.search,
          }
        })
        .then(data => {
          const films = data.data.results;
          this.arrFilms = films;
          console.log(this.arrFilms);

        });
        axios.get("https://api.themoviedb.org/3/search/tv", {
          params:{
           "api_key":"ddde7396f3d042a400eadf2474278e89",
           "query": this.search,
          }
        })
        .then(data => {
          const serieTv = data.data.results;
          this.arrSeries = serieTv;
          console.log(this.arrSeries);

        })
        .catch(() => console.log('error'));
      },
      getFlag: function(language){
        if (language == "it"){
          return "img/it.png"
        } else if (language == "en"){
          return "img/en.png"
        }
      },
      // filteredFilm: function() {
      //     if (this.search == '') {
      //         return this.film;
      //     }
    },
    mounted() {
    },
  });
}

function init(){
  initVue();
}
$(init);
