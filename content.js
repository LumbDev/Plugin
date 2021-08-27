let iframe = $("iframe"); // Находим все теги iframe

// Проверяем атрибут. Если есть слово Youtube, то скрываем
// такой тег со страницы
if(iframe.attr("src").split("youtube").length > 1) {
  iframe.remove();
}
