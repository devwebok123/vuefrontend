<template>
  <div class="card">
    <div class="firstPart col-lg-5 ml-0 float-left">
      <h2 class="mb-0">Percent Complete</h2>
      <h1 class="mb-0">96%</h1>
      <p>
        20 days remaining <br />
        <i>(Out of : 120 days)</i>
      </p>
    </div>
    <div class="secondPart col-lg-4 float-left">
      <img class="mountainBack" src="../assets/images/mountainBack.png" />
      <img id="union" src="../assets/images/Union.png" class="d-none" />
      <div class="graph">
        <span class="text-white">graph</span>
        <canvas id="arc" width="140" height="140"></canvas>
        <canvas id="text" width="170" height="140"></canvas>
        <div class="mobile">
          <img src="../assets/images/mobile.png" />
          <b class="text-white">96%</b>
        </div>
        <div class="startPoint">
          <div class="float-left">
            <p>Started On</p>
            <b>14 Jan 2020</b>
          </div>
          <div class="float-left">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.954891 3.86035H5.04378V2.05549C5.04378 1.77278 5.27218 1.54438 5.55489 1.54438H12.0716V0.905488C12.0716 0.83521 12.1291 0.77771 12.1993 0.77771H13.0938C13.1641 0.77771 13.2216 0.83521 13.2216 0.905488V13.4277C13.2216 13.498 13.1641 13.5555 13.0938 13.5555H12.1993C12.1291 13.5555 12.0716 13.498 12.0716 13.4277V9.21104H8.11045V11.0159C8.11045 11.2986 7.88204 11.527 7.59934 11.527H0.954891C0.672183 11.527 0.443781 11.2986 0.443781 11.0159V4.37146C0.443781 4.08875 0.672183 3.86035 0.954891 3.86035ZM12.0716 8.06104V2.69438H6.19378V8.06104H12.0716ZM1.59378 10.377H6.96045V9.21104H5.17156C5.10128 9.21104 5.04378 9.15354 5.04378 9.08327V5.01035H1.59378V10.377Z"
                fill="#0F5BCE"
              />
            </svg>
          </div>
        </div>
        <div class="endPoint">
          <div class="float-left">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2667 3.86041H8.17778V2.05555C8.17778 1.77284 7.94937 1.54444 7.66667 1.54444H1.15V0.905549C1.15 0.835271 1.0925 0.777771 1.02222 0.777771H0.127778C0.0575 0.777771 0 0.835271 0 0.905549V13.4278C0 13.498 0.0575 13.5555 0.127778 13.5555H1.02222C1.0925 13.5555 1.15 13.498 1.15 13.4278V9.2111H5.11111V11.016C5.11111 11.2987 5.33951 11.5271 5.62222 11.5271H12.2667C12.5494 11.5271 12.7778 11.2987 12.7778 11.016V4.37152C12.7778 4.08881 12.5494 3.86041 12.2667 3.86041ZM1.15 8.0611V2.69444H7.02778V8.0611H1.15ZM11.6278 10.3771H6.26111V9.2111H8.05C8.12028 9.2111 8.17778 9.1536 8.17778 9.08333V5.01041H11.6278V10.3771Z"
                fill="#0F5BCE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16652 2.4444H2.63874V3.97217H1.11096V5.49995H2.63874V7.02773H1.11096V8.55551H2.63874V7.02773H4.16652V8.55551H5.6943V7.02773H7.22207V5.49995L5.6943 5.49995V3.97217H7.22207V2.4444H5.69429L5.6943 3.97217H4.16652V2.4444ZM4.16652 5.49995H5.6943V7.02773H4.16652V5.49995ZM4.16652 5.49995V3.97217H2.63874V5.49995H4.16652Z"
                fill="#0F5BCE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.6111 4.66669H7.08332V6.19446H8.6111V7.72224H7.08332V9.25002H5.55554V10.7778H7.08332V9.25002H8.6111V10.7778H10.1389V9.25002L11.6667 9.25002V7.72224H10.1389V6.19446H11.6667V4.66669H10.1389V6.19446H8.6111V4.66669ZM10.1389 7.72224V9.25002H8.6111V7.72224H10.1389Z"
                fill="#0F5BCE"
              />
            </svg>
          </div>
          <div class="float-left">
            <p>Ended On</p>
            <b>21 Jan 2020</b>
          </div>
        </div>
      </div>
    </div>
    <div class="thirdPart col-lg-3 mr-0 float-left">
      <b>Need</b>
      <div class="needList">
        <p>% Complete</p>
        <p>Scope</p>
        <p>Budget</p>
        <p>Resources</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PercentComplete",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {
    this.createArc("#e7f2f8", 2, 2 * Math.PI - Math.PI / 4);
    this.createArc("#0f5bce", 3, 2 * Math.PI - Math.PI / 2);

    for (let i = 1; i < 6; i++) {
      this.drawPoint(-(45 * i), 1, "#0f5bce", "#0f5bce");
    }
    this.drawPoint(-270, 1, "#fff", "#0f5bce");
    this.drawPoint(-315, 1, "#e7f2f8", "#e7f2f8");

    this.createText("Dev", -270 - 90);
  },
  created() {},
  methods: {
    createArc(color, lineWidth, end) {
      const center_x = 70;
      const center_y = 70;
      const radius = 60;
      const start = Math.PI / 4;

      let c = document.getElementById("arc");
      var ctx = c.getContext("2d");

      ctx.beginPath();
      ctx.arc(center_x, center_y, radius, start, end);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    },
    drawPoint(angle, distance, fillColor, lineColor) {
      const center_x = 70;
      const center_y = 70;
      const radius = 60;
      const point_size = 3;

      var c = document.getElementById("arc");
      var ctx = c.getContext("2d");

      var x = center_x + radius * Math.cos((-angle * Math.PI) / 180) * distance;
      var y = center_y + radius * Math.sin((-angle * Math.PI) / 180) * distance;

      ctx.beginPath();
      ctx.arc(x, y, point_size, 0, 2 * Math.PI);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = fillColor;
      ctx.fill();
    },
    createText(label, angle) {
      const center_x = 70;
      const center_y = 70;
      const radius = 60;

      var c = document.getElementById("text");
      var ctx = c.getContext("2d");

      var x = center_x + radius * Math.cos((-angle * Math.PI) / 180);
      var y = center_y + radius * Math.sin((-angle * Math.PI) / 180);

      var imageObj = new Image();
      imageObj.onload = function() {
        ctx.drawImage(imageObj, x - 6, y - 21, 50, 38);
        ctx.font = 7;
        ctx.fillStyle = "#002958";
        ctx.fillText(label, x + 13, y);
      };
      imageObj.src = document.getElementById("union").src;
    }
  }
};
</script>
<style lang="scss" scoped>
.firstPart {
  padding-top: 40px;
  padding-bottom: 17px;
  h2 {
    font-size: 18px;
    color: #002958;
  }
  h1 {
    font-size: 33px;
    color: #0f5bce;
  }
  p {
    font-size: 12px;
    color: #6896cc;
    i {
      font-style: normal;
      font-size: 8px;
    }
  }
}
.secondPart {
  .mountainBack {
    width: 180%;
    position: relative;
    margin-left: -70%;
    margin-top: 25px;
  }
  .graph {
    margin-top: -160px;
    #arc {
      position: absolute;
      left: 0;
      transform: rotate(90deg);
    }
    #text {
      position: absolute;
      left: 0;
    }
    .mobile {
      position: absolute;
      left: 54px;
      top: 47px;
      img {
        width: 35px;
      }
      b {
        position: relative;
        left: -28px;
        top: 10px;
        font-size: 12px;
      }
    }
    .startPoint {
      position: absolute;
      left: -30px;
      top: 115px;
      p {
        color: #6896cc;
        font-size: 7px;
        margin: 0;
      }
      b {
        color: #002958;
        font-size: 8px;
        position: relative;
        top: -10px;
      }
      svg {
        margin-left: 5px;
        margin-top: -5px;
      }
    }
    .endPoint {
      position: absolute;
      left: 102px;
      top: 115px;
      width: 75px;
      p {
        color: #6896cc;
        font-size: 7px;
        margin: 0;
      }
      b {
        color: #002958;
        font-size: 8px;
        position: relative;
        top: -10px;
      }
      svg {
        margin-right: 5px;
        margin-top: -5px;
      }
    }
  }
}
.thirdPart {
  text-align: center;
  b {
    font-size: 12px;
    color: #0f5bce;
    margin: auto;
  }
  .needList {
    text-align: left;
    margin-top: 10px;
    padding-left: 5px;
    p {
      font-size: 12px;
      color: #6896cc;
    }
  }
}
@media (max-width: 767px) {
  .secondPart {
    img {
      width: 100% !important;
      margin-left: 0 !important;
      margin-top: 0 !important;
    }
    .graph {
      margin-top: 0 !important;
      #arc {
        position: absolute;
        left: 65px !important;
        top: -30px !important;
      }
      #text {
        position: absolute;
        left: 68px !important;
        top: -30px !important;
      }
      .mobile {
        left: 118px !important;
        top: 25px !important;
        img {
          width: 35px !important;
        }
      }
      .startPoint {
        left: 28px !important;
        top: 95px !important;
      }
      .endPoint {
        left: 177px !important;
        top: 95px !important;
      }
    }
  }
  .thirdPart {
    .needList {
      p {
        display: inline-block !important;
        margin-right: 10px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .firstPart {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .secondPart {
    margin-top: -45px !important;
    .mountainBack {
      width: 100% !important;
      margin: 0 !important;
    }
    .graph {
      margin-top: 0 !important;
      position: relative;
      top: -136px !important;
      #arc {
        left: 100px !important;
        transform: rotate(90deg);
      }
      #text {
        left: 100px !important;
      }
      .mobile {
        left: 153px !important;
      }
      .startPoint {
        left: 70px !important;
        top: 132px;
      }
      .endPoint {
        left: 210px !important;
        top: 132px;
      }
    }
  }
  .thirdPart {
    .needList {
      p {
        display: inline-block !important;
        margin-right: 20px;
      }
    }
  }
}
@media (min-width: 1024px) and (max-width: 1200px) {
  .card {
    padding-bottom: 0 !important;
  }
  .secondPart {
    margin-left: -25px !important;
    margin-right: 25px !important;
    .graph {
      margin-top: -125px !important;
    }
  }
  .thirdPart {
    .needList {
      p {
        font-size: 10px !important;
      }
    }
  }
}
</style>
