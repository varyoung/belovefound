<template>
  <div class="nav-box flex">
    <div class="nav-item-box flex">
      <div class="nav-item">
        <Icon type="ios-keypad"></Icon>
        1
      </div>
      <div class="nav-item">
        <Icon type="ios-keypad"></Icon>
        2
      </div>
      <div class="nav-item">
        <Icon type="ios-keypad"></Icon>
        3
      </div>
      <div class="nav-item">
        <Icon type="ios-keypad"></Icon>

        4
      </div>
      <div class="nav-item">
        <Icon type="ios-keypad"></Icon>
        5
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "navcomponent"
};
</script>

<style lang="stylus" scoped>
.nav-box {
  align-items: center;
  >.nav-item-box {
    flex-direction: row;

    >.nav-item {
      width: 150px;
      margin: 0 10px;
      color: #ffffff;
    }
  }
}
</style>

