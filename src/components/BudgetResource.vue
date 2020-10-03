<template>
  <div class="card">
    <h2>Budget & Resource</h2>
    <div class="col-lg-6 pl-lg-0 float-left mb-2 mb-lg-0">
      <div class="item">
        <div class="w-50 float-left">
          <p>Budget</p>
          <b class="blue">1200$</b>
        </div>
        <div class="w-50 float-left">
          <img src="../assets/images/Graphblue.png" />
        </div>
      </div>
    </div>
    <div class="col-lg-6 pr-lg-0 float-left mb-2 mb-lg-0">
      <div class="item">
        <div class="w-50 float-left">
          <p>Resource</p>
          <b class="orange">1000</b>
        </div>
        <div class="w-50 float-left">
          <img src="../assets/images/Graphorange.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudgetResource",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.card {
  height: 220px;
  overflow-y: auto;
  text-align: center;
  padding-top: 40px;
  h2 {
    font-size: 22px;
    color: #002958;
    margin-bottom: 30px;
  }
  .item {
    border: 1px solid #deecf3;
    border-radius: 15px;
    overflow: auto;
    text-align: left;
    padding: 17px;
    p {
      margin: 0;
      font-size: 16px;
    }
    b {
      font-size: 20px;
      &.blue {
        color: #0f5bce;
      }
      &.orange {
        color: #ff9900;
      }
    }
  }
}
@media (max-width: 1200px) {
  .card {
    height: 336px !important;
    .item {
      p {
        font-size: 15px !important;
      }
    }
  }
}
</style>
