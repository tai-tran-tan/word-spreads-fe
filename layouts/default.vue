<template>
  <div>
    <div id="banner" class="flex flex-column text-center justify-content-center">top banner</div>
    <div class="flex flex-column">
      <div class="grid">
        <div class="col text-center">Left</div>
        <div class="col-6"><slot /></div>
        <div class="col text-center">Right</div>
      </div>
    </div>
  </div>
</template>
<style>
#banner {
  background-color: blanchedalmond;
  height: 7vh;
}
</style>