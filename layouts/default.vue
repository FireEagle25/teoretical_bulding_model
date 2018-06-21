<template>
  <div style="background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%,rgba(255,255,255,0.8) 100%), url('http://www.mvestnik.ru/mvfoto/2018/01/23/rosatom.jpg'); background-position: center;background-repeat: no-repeat; background-size: cover;); ">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/teoretical_bulding_model/">Теоретическая модель</a>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer" style="padding-top: 30px">
      <div class="container">
        <p class="text-muted" style="text-align: right">Выполнил - магистрант группы М3219 Якименко М.А. <br>
          Научный руководитель - к.т.н, доцент, зав.кафедрой Цимбельман Н.Я.</p>
      </div>
    </footer>
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
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.base-container {
  min-height: 84vh;
  display: flex;
  text-align: center;
}

img {
  border-radius: 10px;
  border: 1px solid grey;
}

#card {
  text-align: left;
  width: 100%;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid grey;
  margin-top: 10px;
}

.navbar {
  border-radius: 0;
  border: 0;
}
</style>
