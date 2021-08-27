// Получаем кнопку из HTML
let changeColor = document.getElementById('blackBg');

// Если она есть, то выполняем код
if(changeColor != null) {
  // Вешаем обработчик события
  changeColor.onclick = function(el) {
    // Переменные для цвета
    let colorBg = '#333';
    let colorText = '#fff';
    // Обращаемся к текущей вкладке
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Выполняем скрипт
      chrome.tabs.executeScript(
        tabs[0].id, // Указываем эту вкладку
        // Указываем код, что сработает на этой странице
        {code: 'document.body.style.backgroundColor = "' + colorBg + '";document.body.style.color = "' + colorText + '";'}
      );
    })
  }
}
