new Vue({
    el: '#films',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/films/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })