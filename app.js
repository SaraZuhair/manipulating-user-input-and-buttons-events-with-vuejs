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

    // the best way to output anything is to use computed property in vue which helps vue knows which dependency needs tp be changed
    // because while running methods vue will check all the methods available if they have that property that is being changed...etc.
    Sname(event, sec) {
      this.name = event.target.value;
    },

    confirmed() {
      this.confirmname = this.name;
    },

    reset() {
      this.confirmname= '';
      this.counter=0;
      this.name='';
    }
  }
});

app.mount('#events');
