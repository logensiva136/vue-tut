const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      theName: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    getName(e, ln) {
      this.theName = e.target.value + ln;
    },
  },
});

app.mount("#events");
