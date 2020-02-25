new Vue({
    el: '#species',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/species/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })