<template>
  <div class="card text-center">
    <h2 class="mb-3">SCOPE (EPICS)</h2>
    <div class="col-md-3 float-left pl-md-0 mb-2 mb-md-0">
      <div class="part">
        <div class="float-left">
          <img src="../assets/images/redScope.png" width="36" />
        </div>
        <div class="float-left ml-3">
          <b>
            16%
            <svg
              width="13"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M1 1L7 6L13 1"
                stroke="#002958"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </b>
          <p>New this Period</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 float-left mb-2 mb-md-0">
      <div class="part">
        <div class="float-left">
          <img src="../assets/images/greenScope.png" width="36" />
        </div>
        <div class="float-left ml-3">
          <b>
            14%
            <svg
              width="13"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M1 1L7 6L13 1"
                stroke="#002958"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </b>
          <p>Completed</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 float-left mb-2 mb-md-0">
      <div class="part">
        <div class="float-left">
          <img src="../assets/images/blueScope.png" width="36" />
        </div>
        <div class="float-left ml-3">
          <b>
            20%
            <svg
              width="13"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M1 1L7 6L13 1"
                stroke="#002958"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </b>
          <p>Not Started</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 float-left pr-md-0 mb-2 mb-md-0">
      <div class="part">
        <div class="float-left">
          <img src="../assets/images/orangeScope.png" width="36" />
        </div>
        <div class="float-left ml-3">
          <b>
            40%
            <svg
              width="13"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M1 1L7 6L13 1"
                stroke="#002958"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </b>
          <p>In Progress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scope",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.card {
  h2 {
    font-size: 19px;
    color: #002958;
  }
  .part {
    border: 1px solid #deecf3;
    border-radius: 7px;
    padding: 15px;
    overflow: auto;
    text-align: left;
    img {
      margin-top: 10px;
    }
    b {
      font-size: 20px;
      color: #002958;
    }
    p {
      margin: 0;
      padding: 0;
      color: #6896cc;
      font-size: 16px;
    }
  }
}
@media (max-width: 1200px) {
  .card {
    .part {
      b {
        font-size: 18px !important;
      }
      p {
        font-size: 10px !important;
      }
    }
  }
}
</style>
