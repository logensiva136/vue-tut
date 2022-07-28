const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      fullname: "",
    };
  },
  watch: {
    name(val) {
      val === "" ? (this.fullname = "") : (this.fullname = val + this.lastName);
    },
    lastName(val) {
      val === ""
        ? (this.fullname = "")
        : (this.fullname = this.name + " " + this.lastName);
    },
  },
  computed: {
    // fullname() {
    //   console.log("LOGEN");
    //   return this.name === ""
    //     ? (this.name = "")
    //     : this.name + " Maratthandavar";
    // },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
