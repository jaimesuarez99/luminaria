<template>
    <div class="loader-container">
      <div class="loader">
          <span style="--i:0; border-bottom-color:#2172b8; border-right-color:#2172b8;"></span>
          <span style="--i:1; border-bottom-color:#18a39b; border-right-color:#18a39b;"></span>
          <span style="--i:2; border-bottom-color:#82c545; border-right-color:#82c545;"></span>
          <span style="--i:3; border-bottom-color:#f8b739; border-right-color:#f8b739;"></span>
          <span style="--i:4; border-bottom-color:#f06045; border-right-color:#f06045;"></span>
          <span style="--i:5; border-bottom-color:#ed2861; border-right-color:#ed2861;"></span>
      </div>
    </div>
</template>

<script setup>

</script>

<style>

.loader-container{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light);
  opacity: 0;
}

.loader-container.show-loader{
  display: flex;
  opacity: 1;
  animation: showloader 0.5s forwards;
}

@keyframes showloader {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}



.loader {
  position: relative;
  width: 150px;
  height: 150px;
  animation: loader 8s linear infinite;
}

.loader span {
  position: absolute;
  top: calc(6px * var(--i));
  bottom: calc(6px * var(--i));
  right: calc(6px * var(--i));
  left: calc(6px * var(--i));
  border: solid 5px transparent;
  border-bottom: solid 5px #fff;
  border-right: solid 5px #fff;
  border-radius: 50%;
  animation: loader 2s cubic-bezier(.1, .63, .78, -0.29) infinite;
  animation-delay: calc(.1s * var(--i));
  border-bottom-right-radius: 50%; 
  border-top-right-radius: 50%; 
}

@keyframes loader {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}

</style>