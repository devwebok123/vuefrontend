<template>
  <div class="card">
    <div class="mb-3">
      <h2>Team</h2>
      <span class="viewall">View All</span>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="part">
        <span class="mark">A</span>
        <div class="photo">
          <img class="green" src="../assets/images/photo/photo6.png" />
        </div>
        <h3>Connie Robertson</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="part">
        <span class="mark">C</span>
        <div class="photo">
          <img class="red" src="../assets/images/photo/photo7.png" />
        </div>
        <h3>Bruce Cooper</h3>
        <p>Developer</p>
      </div>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="part">
        <span class="mark">A</span>
        <div class="photo">
          <img class="green" src="../assets/images/photo/photo8.png" />
        </div>
        <h3>Theresa Richards</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="part">
        <span class="mark">B</span>
        <div class="photo">
          <img class="yellow" src="../assets/images/photo/photo9.png" />
        </div>
        <h3>Ronald Mckinnon</h3>
        <p>Front-end Developer</p>
      </div>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="part">
        <span class="mark">A</span>
        <div class="photo">
          <img class="green" src="../assets/images/photo/photo10.png" />
        </div>
        <h3>Jason Rogers</h3>
        <p>Illustration Artist</p>
      </div>
    </div>
    <div class="col-md-2 float-left mb-2 md-md-0">
      <div class="moreteam">
        <div class="outborder">
          <div class="photo">
            <h4>+4</h4>
            <p>more</p>
          </div>
        </div>
        <p class="allteam">View All</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamComponent",
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
  h2 {
    font-size: 18px;
    color: #002958;
    display: inline-block;
  }
  .viewall {
    font-size: 14px;
    color: #6896cc;
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
  .part {
    border: 1px solid #deecf3;
    border-radius: 10px;
    position: relative;
    text-align: center;
    padding-bottom: 15px;
    height: 200px;
    .mark {
      position: absolute;
      top: 20px;
      right: 0;
      color: #fff;
      font-size: 12px;
      padding: 7px 12px;
      background: #0f5bce;
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
    }
    .photo {
      text-align: center;
      margin-top: 35px;
      img {
        width: 50%;
        padding: 3px;
        border-radius: 36px;
        &.green {
          border: 1px solid #5aea16;
        }
        &.red {
          border: 1px solid #f93149;
        }
        &.yellow {
          border: 1px solid #ff9900;
        }
      }
    }
    h3 {
      font-size: 14px;
      color: #002958;
      margin-top: 25px;
    }
    p {
      font-size: 11px;
      color: #6896cc;
    }
  }
  .moreteam {
    background: #0f5bce;
    border-radius: 10px;
    position: relative;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 15px;
    min-height: 200px;
    .outborder {
      border: 1px solid #fff;
      border-radius: 36px;
      display: inline-block;
      padding: 3px;
    }
    .photo {
      text-align: center;
      display: inline-block;
      padding: 11px 21px;
      border: 1px solid #fff;
      border-radius: 36px;
      background: #fff;
      color: #0f5bce;
      h4 {
        font-size: 22px;
        padding: 0;
        margin: 0;
      }
      p {
        font-size: 10px;
        margin: 0;
        padding: 0;
      }
    }
    .allteam {
      font-size: 14px;
      color: #fff;
      margin-top: 37px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 767px) {
  .part {
    .photo {
      margin-top: 9px !important;
      img {
        border-radius: 56px !important;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .part {
    h3 {
      font-size: 12px !important;
    }
    p {
      font-size: 9px !important;
    }
  }
}
</style>
