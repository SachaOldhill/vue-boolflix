function initVue(){
  new Vue({
    el:'#app',
    data:{
     search:'',
     film:[],
    },
    computed: {
      // filteredGenre: function(){
      //   return this.arrayData.filter(data => {
      //     // const result = data.genre.toLowerCase().includes(this.searchText.toLowerCase());
      //     const result = data.genre.toLowerCase().includes(this.textInput.toLowerCase());
      //     return result;
      //   } );
      // },
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
      //     let fDischi = [];
      //     for (let i=0;i<this.dischi.length;i++) {
      //         const disco = this.dischi[i];
      //         if (disco.genre == this.selected) {
      //             fDischi.push(disco);
      //         }
      //     }
      //     return fDischi;
      // }
    },
    mounted() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params:{
         "api_key":"ddde7396f3d042a400eadf2474278e89",
         "query": "matrix",
        }
      })
      .then(data => {
        const film = data.data.results;
        console.log(film, film.title);

      })
      .catch(() => console.log('error'));
    },
  });
}

function init(){
  initVue();
}
$(init);
