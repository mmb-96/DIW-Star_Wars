new Vue({
    el: '#starships',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/starships/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })