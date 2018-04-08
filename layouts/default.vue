<template>
  <div style="background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%,rgba(255,255,255,0.8) 100%), url('http://www.mvestnik.ru/mvfoto/2018/01/23/rosatom.jpg'); background-position: center;background-repeat: no-repeat; background-size: cover;); ">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Теоретическая модель</a>
        </div>
      </div>
    </nav>
    <nuxt/>
    <div class="bottom-left">
      Выполнил - магистрант группы М3219 Якименко М.А. <br>
      Научный руководитель - к.т.н, доцент, зав.кафедрой Цимбельман Н.Я.
    </div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.bottom-left {
  position: fixed;
  text-align: right;
  bottom: 0;
  right: 0;
  font-weight: bold;
}
</style>
