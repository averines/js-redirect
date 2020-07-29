let url = new URL(window.location.href) // получили текущий урл

let paramsString = url.search.replace('?','') //получили строку со всеми параметрами
paramsString = paramsString.split('&');

var params = {}



//превратили строку с параметрами в объект
paramsString.map(param =>  {
  let paramsArr = param.split('=')
  params[paramsArr[0]] = paramsArr[1]
})


switch (params.ref) {
  case '111': 
    window.location.href = 'https://yandex.ru/search/?lr=213&text=111'
    // window.open('https://ya.ru/', '_blank') // открыть в новой вкладке

   case '222':
    window.location.href = 'https://yandex.ru/search/?lr=213&text=222'

  default:
    console.log( 'указанный параметр ref не известен' )
}
