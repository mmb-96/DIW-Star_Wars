new Vue({
    el: '#vehicles',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/vehicles/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })