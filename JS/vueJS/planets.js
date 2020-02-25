new Vue({
    el: '#planets',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/planets/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })