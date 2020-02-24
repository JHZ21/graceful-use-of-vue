<template>
  <div class="hello">
    <h1>各位小哥哥小姐姐们好</h1>
    <child1></child1>
    <child2></child2>
    <Button :type="type" :text="text" @myEvent="parDemo"></Button>
    <div v-display-key="'10'"><button>权限10</button></div>
    <div v-display-key="'2'"><button>权限2</button></div>
    <div v-display-key="'1'"><button>权限1</button></div>
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script>
import Button from "../views/Button";
export default {
  name: "HelloWorld",
  components: { Button },
  data() {
    return {
      type: "success",
      text: "成功",
      inputVal: ""
    };
  },
  methods: {
    parDemo: function() {
      console.log("1+1=2");
    }
  },
  watch: {
    inputVal: {
      handler(oldVal, newVal) {
        this.parDemo();
        console.log(newVal);
      }
    },
    immediate: true
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
