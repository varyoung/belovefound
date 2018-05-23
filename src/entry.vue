<template>
    <div class="layout">
        <Layout>
            <Header>
                <Headercomponent @isphone="isphones" @showSide="showSide" />
            </Header>
            <div class="phone-box" v-if="isphone">
                <Collapse @click="clickNode">
                    <Panel name="1">
                        史蒂夫·乔布斯
                        <div slot="content">
                            <div>
                                1
                            </div>
                            <div>
                                1
                            </div>
                        </div>
                    </Panel>
                </Collapse>

            </div>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        Content
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
import Headercomponent from "@components/Header";
export default {
  name: "enteryViews",
  components: {
    Headercomponent
  },
  data() {
    return {
      isphone: false,
      isshow: false,
      showitem: ""
    };
  },
  methods: {
    isphones(val) {
      val > 640 ? (this.isphone = false) : (this.isphone = true);
    },
    showSide(val) {
      this.isshow = val;
      this.isshow ? (this.showitem = "active") : (this.showitem = "");
      var node = document.getElementsByClassName("ivu-collapse-header")[0];
      var parent = document.getElementsByClassName("ivu-collapse-header");
      node.click();
    },
    clickNode() {
      console.log(1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    .ivu-layout-header {
        background: -webkit-linear-gradient(left, #8590fb, #4cc2d7); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #8590fb, #4cc2d7); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #8590fb, #4cc2d7); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #8590fb, #4cc2d7); /* 标准的语法 */
    }
}

.ivu-icon ivu-icon-arrow-right-b {
    display: none;
}

.layout-footer-center {
    text-align: center;
}

.hide-box {
    opacity: 0;
    transition: opacity 1s;
}

.active {
    opacity: 1;
    transition: opacity 1s;
}
</style>
