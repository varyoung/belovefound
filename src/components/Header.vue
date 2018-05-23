<template>
    <div class="header-box flex">
        <div class="nav-icon">
            <i>1</i>
        </div>
        <Nav v-if="this.screenWidth>640?true:false" />
        <i @click="showSide" v-if="this.screenWidth>640?false:true" class="iconfont icon-fenleiliebiao header-icon"></i>
    </div>

</template>

<script>
import Nav from "@components/Nav";
export default {
  name: "headercomponent",
  components: { Nav },
  data() {
    return {
      isshow: false,
      screenWidth: document.body.clientWidth ,// 这里是给到了一个默认值 （这个很重要）
                      value1: '1'

    };
  },
  created() {
    this.up();
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      this.up();
    }
  },
  methods: {
    up() {
      console.log(this.screenWidth);
      this.$emit("isphone", this.screenWidth); //主动触发upup方法，'hehe'为向父组件传递的数据
    },
    showSide() {
        this.isshow = !this.isshow;
      this.$emit("showSide", this.isshow);
    }
  }
};
</script>



<style lang="stylus" scoped>
.header-box {
    position: relative;

    .header-icon {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>

