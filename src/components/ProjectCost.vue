<template>
  <div class="card">
    <h2 class="mb-3">Project Cost</h2>
    <div class="col-lg-8 float-left p-0 mb-3 mb-lg-0">
      <div class="col-md-4 float-left pl-lg-0 mb-3 mb-lg-0">
        <div class="cost_part">
          <svg
            width="25"
            height="25"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mark1"
          >
            <path
              d="M1 1L7 6L13 1"
              stroke="#0f5bce"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <br />
          <b>On Budget</b>
          <p>423$ Used</p>
        </div>
      </div>
      <div class="col-md-4 float-left mb-3 mb-lg-0">
        <div class="cost_part">
          <svg
            width="25"
            height="25"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mark2"
          >
            <path
              d="M1 1L7 6L13 1"
              stroke="#0f5bce"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <br />
          <b>Scope</b>
          <p>87% Achieved</p>
        </div>
      </div>
      <div class="col-md-4 float-left mb-3 mb-lg-0">
        <div class="cost_part">
          <svg
            width="25"
            height="25"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mark1"
          >
            <path
              d="M1 1L7 6L13 1"
              stroke="#0f5bce"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <br />
          <b>Resource</b>
          <p>60% Used</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 float-left p-0">
      <div class="graph">
        <canvas id="canvas" width="200" height="240"></canvas>
        <h2>$980</h2>
        <div class="score">
          <div class="onethird">
            <i class="blue">&nbsp;</i>
            <span>Time</span>
          </div>
          <div class="onethird">
            <i class="yellow">&nbsp;</i>
            <span>Task</span>
          </div>
          <div class="onethird">
            <i class="red">&nbsp;</i>
            <span>Team</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCost",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.createArc("#e7f2f8", 98, (3 * Math.PI) / 2);
    this.createArc("#0f5bce", 98, (2 * Math.PI) / 2);
    this.createArc("#e7f2f8", 90, (3 * Math.PI) / 2);
    this.createArc("#ff9900", 90, (6 * Math.PI) / 7);
    this.createArc("#e7f2f8", 80, (3 * Math.PI) / 2);
    this.createArc("#f93149", 80, (1 * Math.PI) / 2);
  },
  created() {},
  methods: {
    createArc(color, radius, end) {
      const center_x = 100;
      const center_y = 100;
      const start = -Math.PI / 2;

      let c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      ctx.beginPath();
      ctx.arc(center_x, center_y, radius, start, end);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  h2 {
    font-size: 18px;
    color: #002958;
  }
  .cost_part {
    width: 156px;
    height: 224px;
    position: relative;
    background: url("../assets/images/costbg.png");
    padding-left: 17px;
    padding-top: 25px;
    color: #fff;
    margin: auto;
    .mark1 {
      padding: 6px;
      border-radius: 15px;
      background: #fff;
    }
    .mark2 {
      padding: 6px;
      border-radius: 15px;
      border: 1px solid #fff;
      path {
        stroke: #fff;
      }
    }
    b {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
  .graph {
    width: 250px;
    height: 250px;
    position: relative;
    margin: auto;
    text-align: center;
    h2 {
      position: absolute;
      left: 83px;
      top: 77px;
      font-size: 36px;
      color: #002958;
    }
    .score {
      position: absolute;
      top: 217px;
      width: 100%;
      .onethird {
        width: 33%;
        float: left;
        font-size: 12px;
        color: #6896cc;
        position: relative;
        i {
          width: 8px;
          height: 8px;
          display: inline-block;
          margin-right: 5px;
          &.blue {
            background: #0f5bce;
          }
          &.yellow {
            background: #ff9900;
          }
          &.red {
            background: #f93149;
          }
        }
      }
    }
  }
}
</style>
