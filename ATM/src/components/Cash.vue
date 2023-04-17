<template>
  <div class="container">
    <div class="container text-center my-5">
      <h2>Fue un placer servirte</h2>
      <h1>Por favor retira tu dinero</h1>
    </div>

    <!-- dispense cash -->
    <div class="container box d-flex justify-content-center align-items-center my-5">
      <div class="dispenser"></div>
    </div>
    <div class="cash text-center">
      <div class="container m-0 p-0 box-1">
        <img class="img-fluid" src="../assets/img/anverso10000.png" alt="cash" />
      </div>
      <div class="container m-0 p-0 box-2">
        <img class="img-fluid" src="../assets/img/anverso20000.png" alt="cash" />
      </div>
      <div class="container m-0 p-0 box-3">
        <img class="img-fluid" src="../assets/img/anverso50000.png" alt="cash" />
      </div>
      <div class="container m-0 p-0 box-4">
        <img class="img-fluid" src="../assets/img/anverso100000.png" alt="cash" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 62px;
  font-weight: 700 !important;
}
h2 {
  font-size: 54px;
  font-weight: 300 !important;
}
.box {
  overflow: hidden;
  position: relative;
  width: 600px;
  height: 50px;
  padding: 2px;
  background-color: #000;
  border: 10px ridge #fff;
  z-index: 20 !important;
}
.dispenser {
  width: 100%;
  height: 100%;
  z-index: 10 !important;
  background-color: #f2f2f2;
  border: 1px solid #000;
  transition: 0.3s linear;
}

.box:hover .dispenser {
  transform: translateY(-40px);
}

@keyframes cashTransform {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-90px);
  }
  50% {
    opacity: 0;
    visibility: visible;
    transform: translateY(-45px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.cash {
  position: relative;
  margin: 0 auto;
  top: -50px;
  width: 500px;
  height: 250px;
  transform: perspective(250px) rotateX(10deg);
  transition: 0.3s linear;
}

.box-1 {
  position: absolute;
  animation: cashTransform 0.5s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-2 {
  position: absolute;
  animation: cashTransform 1s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-3 {
  position: absolute;
  animation: cashTransform 1.5s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
.box-4 {
  position: absolute;
  animation: cashTransform 2s ease-in-out 1;
  box-shadow: 0 2px 4px #000;
}
</style>
