<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    text: {
      type: String,
      default: "normal"
    }
  },
  render(h) {
    return h("button", {
      //v-bind:class
      class: {
        btn: true,
        "btn-success": this.type === "success",
        "btn-danger": this.type === "danger",
        "btn-warning": this.type === "warning",
        noraml: !this.type
      },
      //dom属性
      domProps: {
        innerText: this.text || "默认"
      },
      on: {
        click: this.handleClick
      }
    });
  },
  methods: {
    handleClick() {
      this.$emit("myEvent");
    }
  }
};
</script>
<style scoped>
.btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.btn-success {
  background: green;
}
.btn-danger {
  background: red;
}
.btn-warning {
  background: orange;
}
.normal {
  background: grey;
}
</style>
