new Vue({
    el: '#people',
    data () {
      return {
        info: []
      }
    },
    created () {
      axios.get('https://swapi.co/api/people/?format=json')
        .then(response => (
          this.info = response.data.results
          ))    
    }
  })