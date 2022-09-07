const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmname: '',
      
    };
  },
  methods: {

    submitAlert() {
      alert('form submitted')
    },

    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },

    Sname(event, sec) {
      this.name = event.target.value +' '+ sec;
    },

    confirmed() {
      this.confirmname = this.name;
    }
  }
});

app.mount('#events');
