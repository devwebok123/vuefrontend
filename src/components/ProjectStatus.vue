<template>
  <div class="card">
    <div class="card-title">
      <h2>Hi-Tek (Prebook Visa)</h2>
      <span>Visa Management Website</span>
    </div>
    <div class="project-status">
      <div class="col-md-8 float-left">
        <div class="graph">
          <span class="text-white">graph</span>
          <img class="union d-none" src="../assets/images/Union1.png" />
          <canvas :id="arc" width="250" height="300" class="arc"></canvas>
          <canvas
            :id="'text' + arc"
            width="250"
            height="300"
            class="text"
          ></canvas>
          <div class="mobile">
            <span>83%</span>
          </div>
          <div class="startPoint">
            <div class="float-left">
              <svg
                width="20"
                height="20"
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
            <div class="float-left">
              <p>Started On</p>
              <b>14 Jan 2020</b>
            </div>
          </div>
          <div class="endPoint">
            <div class="float-left">
              <svg
                width="20"
                height="20"
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
      <div class="col-md-4 float-left">
        <div class="item">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0H6V2H12V0ZM8 13H10V7H8V13ZM16.03 6.39L17.45 4.97C17.02 4.46 16.55 3.98 16.04 3.56L14.62 4.98C13.0273 3.69833 11.0443 2.99969 9 3C4.03 3 0 7.03 0 12C0 16.97 4.02 21 9 21C10.6943 21.0009 12.3544 20.5232 13.7891 19.622C15.2238 18.7207 16.3748 17.4325 17.1094 15.9057C17.8441 14.379 18.1325 12.6758 17.9415 10.9923C17.7506 9.30874 17.088 7.71341 16.03 6.39ZM9 19C5.13 19 2 15.87 2 12C2 8.13 5.13 5 9 5C12.87 5 16 8.13 16 12C16 15.87 12.87 19 9 19Z"
              fill="#0F5BCE"
            />
          </svg>
          <p class="mt-2">Project Duration</p>
          <b class="mt-1">2 Months</b>
        </div>
        <div class="item mt-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM6.5 12H12C12.1326 12 12.2598 11.9473 12.3536 11.8536C12.4473 11.7598 12.5 11.6326 12.5 11.5C12.5 11.3674 12.4473 11.2402 12.3536 11.1464C12.2598 11.0527 12.1326 11 12 11H8C7.33696 11 6.70107 10.7366 6.23223 10.2678C5.76339 9.79893 5.5 9.16304 5.5 8.5C5.5 7.83696 5.76339 7.20107 6.23223 6.73223C6.70107 6.26339 7.33696 6 8 6H9V4H11V6H13.5V8H8C7.86739 8 7.74021 8.05268 7.64645 8.14645C7.55268 8.24021 7.5 8.36739 7.5 8.5C7.5 8.63261 7.55268 8.75979 7.64645 8.85355C7.74021 8.94732 7.86739 9 8 9H12C12.663 9 13.2989 9.26339 13.7678 9.73223C14.2366 10.2011 14.5 10.837 14.5 11.5C14.5 12.163 14.2366 12.7989 13.7678 13.2678C13.2989 13.7366 12.663 14 12 14H11V16H9V14H6.5V12Z"
              fill="#0F5BCE"
            />
          </svg>
          <p class="mt-2">Project Cost</p>
          <b class="mt-1">$1,500</b>
        </div>
        <div class="item mt-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00002 4.00002C4.80224 4.00002 4.6089 4.05867 4.44445 4.16855C4.28 4.27843 4.15182 4.43461 4.07614 4.61733C4.00045 4.80006 3.98065 5.00113 4.01923 5.19511C4.05782 5.38909 4.15306 5.56727 4.29291 5.70712C4.43276 5.84698 4.61095 5.94222 4.80493 5.9808C4.99891 6.01939 5.19997 5.99958 5.3827 5.9239C5.56543 5.84821 5.7216 5.72004 5.83149 5.55559C5.94137 5.39114 6.00002 5.1978 6.00002 5.00002C6.00002 4.7348 5.89466 4.48045 5.70712 4.29291C5.51959 4.10537 5.26523 4.00002 5.00002 4.00002ZM19.71 9.78002L10.23 0.320017C10.1368 0.21948 10.0239 0.139192 9.89828 0.0841425C9.7727 0.0290929 9.63713 0.000457809 9.50002 1.67143e-05H3.50002C3.36841 -0.000744179 3.23795 0.0244809 3.11611 0.0742455C2.99427 0.12401 2.88346 0.197335 2.79002 0.290017L0.290017 2.78002C0.197335 2.87346 0.12401 2.98427 0.0742455 3.10611C0.0244809 3.22795 -0.000744179 3.35841 1.67143e-05 3.49002V9.49002C0.0037002 9.75478 0.107283 10.0084 0.290017 10.2L9.78002 19.7C9.97165 19.8828 10.2253 19.9863 10.49 19.99C10.6216 19.9908 10.7521 19.9656 10.8739 19.9158C10.9958 19.866 11.1066 19.7927 11.2 19.7L19.71 11.19C19.8027 11.0966 19.876 10.9858 19.9258 10.8639C19.9756 10.7421 20.0008 10.6116 20 10.48C19.9938 10.2187 19.8904 9.96912 19.71 9.78002ZM10.49 17.59L2.00002 9.09002V3.90002L3.90002 2.00002H9.08002L17.58 10.49L10.49 17.59Z"
              fill="#0F5BCE"
            />
          </svg>
          <p class="mt-2">Pricing</p>
          <b class="mt-1">On Budget</b>
        </div>
      </div>
    </div>
    <div class="teamate">
      <img src="../assets/images/photo/photo6.png" />
      <img src="../assets/images/photo/photo7.png" />
      <img src="../assets/images/photo/photo8.png" />
      <img src="../assets/images/photo/photo9.png" />
      <img src="../assets/images/photo/photo10.png" />
      <span>Team member size 5</span>
    </div>
    <div class="milestone">
      <div class="text-center">
        <span class="float-left">milestone1</span>
        <span>milestone1</span>
        <span class="float-right">milestone1</span>
      </div>
      <div class="bar">
        <div class="mark">
          <i>&nbsp;</i>
        </div>
        <b-progress
          :value="50"
          :max="100"
          class="mb-3"
          variant="warning"
        ></b-progress>
      </div>
      <div class="text-center">
        <b class="float-left">04 Mar</b>
        <b>25 Mar</b>
        <b class="float-right">14 Apr</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectStatus",
  data() {
    return {
      value: 50
    };
  },
  props: {
    arc: String,
    text: String
  },
  components: {},
  mounted() {
    this.createArc("arc1", "#e7f2f8", 3, 2 * Math.PI - Math.PI / 4);
    this.createArc("arc1", "#f93149", 4, 2 * Math.PI - (3 * Math.PI) / 4);
    this.createArc("arc2", "#e7f2f8", 3, 2 * Math.PI - Math.PI / 4);
    this.createArc("arc2", "#f93149", 4, 2 * Math.PI - Math.PI);
    this.createArc("arc3", "#e7f2f8", 3, 2 * Math.PI - Math.PI / 4);
    this.createArc("arc3", "#f93149", 4, 2 * Math.PI - (3 * Math.PI) / 4);
    this.createArc("arc4", "#e7f2f8", 3, 2 * Math.PI - Math.PI / 4);
    this.createArc("arc4", "#f93149", 4, 2 * Math.PI - Math.PI);

    for (let i = 1; i < 5; i++) {
      this.drawPoint("arc1", -(45 * i), 1, "#f93149", "#f93149");
    }
    this.drawPoint("arc1", -225, 1, "#fff", "#f93149");
    this.drawPoint("arc1", -270, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc1", -315, 1, "#e7f2f8", "#e7f2f8");

    for (let i = 1; i < 4; i++) {
      this.drawPoint("arc2", -(45 * i), 1, "#f93149", "#f93149");
    }
    this.drawPoint("arc2", -180, 1, "#fff", "#f93149");
    this.drawPoint("arc2", -225, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc2", -270, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc2", -315, 1, "#e7f2f8", "#e7f2f8");

    for (let i = 1; i < 5; i++) {
      this.drawPoint("arc3", -(45 * i), 1, "#f93149", "#f93149");
    }
    this.drawPoint("arc3", -225, 1, "#fff", "#f93149");
    this.drawPoint("arc3", -270, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc3", -315, 1, "#e7f2f8", "#e7f2f8");

    for (let i = 1; i < 4; i++) {
      this.drawPoint("arc4", -(45 * i), 1, "#f93149", "#f93149");
    }
    this.drawPoint("arc4", -180, 1, "#fff", "#f93149");
    this.drawPoint("arc4", -225, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc4", -270, 1, "#e7f2f8", "#e7f2f8");
    this.drawPoint("arc4", -315, 1, "#e7f2f8", "#e7f2f8");

    this.createText("textarc1", "Dev", 45);
    this.createText("textarc2", "Dev", 90);
    this.createText("textarc3", "Dev", 45);
    this.createText("textarc4", "Dev", 90);
  },
  created() {},
  methods: {
    createArc(id, color, lineWidth, end) {
      const center_x = 125;
      const center_y = 150;
      const radius = 120;
      const start = Math.PI / 4;

      let c = document.getElementById(id);
      var ctx = c.getContext("2d");

      ctx.beginPath();
      ctx.arc(center_x, center_y, radius, start, end);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    },
    drawPoint(id, angle, distance, fillColor, lineColor) {
      const center_x = 125;
      const center_y = 150;
      const radius = 120;
      const point_size = 3;

      var c = document.getElementById(id);
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
    createText(id, label, angle) {
      const center_x = 125;
      const center_y = 150;
      const radius = 120;

      var c = document.getElementById(id);
      var ctx = c.getContext("2d");

      var x = center_x + radius * Math.cos((-angle * Math.PI) / 180);
      var y = center_y + radius * Math.sin((-angle * Math.PI) / 180);

      var imageObj = new Image();
      imageObj.onload = function() {
        ctx.drawImage(imageObj, x - 37, y - 35, 70, 42);
        ctx.font = 7;
        ctx.fillStyle = "#002958";
        ctx.fillText(label, x - 10, y - 13);
      };
      imageObj.src = document.getElementsByClassName("union")[0].src;
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  padding: 0;
  .card-title {
    padding: 15px;
    h2 {
      font-size: 18px;
      color: #002958;
      display: inline-block;
    }
    span {
      float: right;
      color: #6896cc;
      font-size: 14px;
    }
  }
  .project-status {
    margin-top: -10px;
    overflow: auto;
  }
  .graph {
    position: relative;
    width: 252px;
    height: 320px;
    margin: auto;
    .arc {
      position: absolute;
      left: 0;
      transform: rotate(90deg);
    }
    .text {
      position: absolute;
      left: 0;
    }
    .mobile {
      position: absolute;
      left: 100px;
      top: 97px;
      span {
        position: relative;
        left: -16px;
        top: 17px;
        font-size: 48px;
        color: #f93149;
      }
    }
    .startPoint {
      position: absolute;
      left: -15px;
      top: 247px;
      p {
        color: #6896cc;
        font-size: 12px;
        margin: 0;
        margin-bottom: 5px;
      }
      b {
        color: #002958;
        font-size: 14px;
        position: relative;
        top: -10px;
        font-weight: 500;
      }
      svg {
        margin-right: 5px;
        margin-top: 5px;
      }
    }
    .endPoint {
      position: absolute;
      left: 155px;
      top: 247px;
      width: 110px;
      p {
        color: #6896cc;
        font-size: 12px;
        margin: 0;
        margin-bottom: 5px;
      }
      b {
        color: #002958;
        font-size: 14px;
        position: relative;
        top: -10px;
        font-weight: 500;
      }
      svg {
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
  .item {
    display: inline-block;
    padding: 8px 10px;
    border: 1px solid #deecf3;
    border-radius: 15px;
    float: right;
    width: 110px;
    p {
      margin: 0;
      font-size: 12px;
      color: #6896cc;
    }
    b {
      margin: 0;
      font-size: 14px;
      color: #002958;
      font-weight: 500;
    }
  }
  .teamate {
    border-top: 1px solid #deecf3;
    border-bottom: 1px solid #deecf3;
    padding: 25px 15px;
    img {
      width: 48px;
      border-radius: 30px;
      margin-right: 5px;
    }
    span {
      font-size: 12px;
      color: #6896cc;
      margin-left: 10px;
    }
  }
  .milestone {
    padding: 25px 20px;
    span {
      font-size: 12px;
      color: #6896cc;
    }
    .progress {
      border-radius: 15px;
    }
    .mark {
      width: 21px;
      height: 21px;
      background: #fff;
      border-radius: 30px;
      border: 1px solid #deecf3;
      position: relative;
      top: 18px;
      left: calc(50% - 10px);
      i {
        display: inline-block;
        width: 9px;
        height: 9px;
        background: #f93149;
        border-radius: 30px;
        position: relative;
        left: 2px;
        top: -6px;
      }
    }
    b {
      font-size: 15px;
      color: #002958;
      font-weight: 400;
    }
  }
}
</style>
