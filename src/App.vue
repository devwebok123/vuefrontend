<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.modal-body {
  font-family: "Times New Roman", Times, serif;
}
table {
  position: relative;
  z-index: 10;
}
.btn:focus {
  box-shadow: none !important;
}
.card {
  padding: 20px;
  border: none !important;
  border-radius: 10px !important;
  display: block !important;
  overflow: auto;
  text-align: left;
  width: 100%;
}
.health.progress {
  height: 12px;
  width: 70px !important;
}
.health .progress-bar {
  background: #5aea16;
}
.health.progress-bar {
  background: #5aea16;
}
.impediment.progress {
  height: 12px;
  width: 85px !important;
  margin: auto;
  border-radius: 15px;
}
.page-item.active .page-link,
.page-link {
  color: #002958 !important;
  font-size: 18px !important;
  background-color: transparent !important;
}
.page-link {
  border: none !important;
}
.page-item.active .page-link {
  border: 1px solid #007bff !important;
}
</style>
