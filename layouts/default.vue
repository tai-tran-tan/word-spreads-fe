<template>
  <div>
    <NavBar id="banner" class="flex flex-column text-center justify-content-center"/>
    <div id="content" class="flex flex-column">
      <div class="grid justify-content-center">
        <div class="col hidden md:block text-center">Left</div>
        <div class="col md:col-6"><Nuxt/></div>
        <div class="col hidden md:block text-center">Right</div>
      </div>
    </div>
  </div>
</template>
<style>
body {
    margin: 0px;
    background-color: #f0f8ff3d;
}

#banner {
  background-color: #c3ffc2;
  height: 7vh;
  margin: 0px;
  padding: 0px;
}

#content {
    max-width: 85vw;
    margin: auto;
}

html {
	scroll-behavior: smooth;
}
</style>
