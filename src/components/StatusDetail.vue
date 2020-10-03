<template>
  <div class="card mb-2 mb-md-0">
    <header class="mb-5">
      <h2 class="w-50 float-left">{{ title }}</h2>
      <span class="float-right">+ Add New</span>
    </header>
    <div class="blank" v-if="param == 'false'">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum congue
        augue orci, metus. Nibh turpis fermentum scelerisque nec. Nisl massa
        aliquam nec euismod sit pulvinar varius sit ut. Amet laoreet et a, ipsum
        semper massa ultrices.
      </p>
    </div>
    <div class="statusList" v-else>
      <p>
        <span class="mr-1">1</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <img src="../assets/images/Pencil.png" />
      </p>
      <p>
        <span class="mr-1">2</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <img src="../assets/images/Pencil.png" />
      </p>
      <p>
        <span class="mr-1">3</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <img src="../assets/images/Pencil.png" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusDetail",
  data() {
    return {};
  },
  props: {
    param: String,
    title: String
  },
  components: {},
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.card {
  height: 210px;
  overflow-y: auto;
  header {
    h2 {
      font-size: 14px;
      color: #002958;
    }
    span {
      font-size: 10px;
      color: #6896cc;
      padding: 7px;
      border: none;
      border-radius: 15px;
      background: #e7f2f8;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .blank {
    padding: 15px;
    color: #5485bd;
    font-size: 10px;
    background: #deecf3;
  }
  .statusList {
    p {
      color: #fff;
      font-size: 10px;
      padding: 5px;
      border: none;
      border-radius: 15px;
      background: #0f5bce;
      position: relative;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 20px;
        text-align: center;
        color: #0f5bce;
        background: #fff;
      }
      img {
        position: absolute;
        left: 95%;
        top: -5px;
        padding: 3px;
        border-radius: 20px;
        background: #fff;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .card {
    height: 240px !important;
  }
}
</style>
