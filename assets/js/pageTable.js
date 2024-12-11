document.addEventListener('DOMContentLoaded', () => {
  // Получаем ссылки на необходимые элементы
  const selectWrapper = document.querySelector('.table__content-top__select');
  const mainButton = selectWrapper.querySelector('.select-btn');
  const selectList = selectWrapper.querySelector('.select-list');
  const listButtons = selectList.querySelectorAll('.select-list__btn');

  // Функция для обработки клика по основной кнопке
  mainButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    selectWrapper.classList.toggle('active'); // Добавляем или убираем класс active
  });

  // Функция для обработки кликов по кнопкам списка
  listButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Предотвращаем всплытие события

      // Извлекаем текст кнопки и вставляем в основную кнопку
      const selectedText = button.querySelector('p').textContent;
      mainButton.querySelector('p').textContent = selectedText;

      // Убираем класс active
      selectWrapper.classList.remove('active');
    });
  });

  // Функция для закрытия селекта при клике вне его области
  document.addEventListener('click', () => {
    selectWrapper.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Получаем ссылки на необходимые элементы
  const selectWrapper = document.querySelector('.estimation-select');
  const mainButton = selectWrapper.querySelector('.estimation-select__btn');
  const selectList = selectWrapper.querySelector('.estimation-select__list');
  const listButtons = selectList.querySelectorAll('.estimation-select__list-btn');

  // Функция для обработки клика по основной кнопке
  mainButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    selectWrapper.classList.toggle('active'); // Добавляем или убираем класс active
  });

  // Функция для обработки кликов по кнопкам списка
  listButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Предотвращаем всплытие события

      // Извлекаем текст кнопки и вставляем в основную кнопку
      const selectedText = button.querySelector('p').textContent;
      mainButton.querySelector('p').textContent = selectedText;

      // Убираем класс active
      selectWrapper.classList.remove('active');
    });
  });

  // Функция для закрытия селекта при клике вне его области
  document.addEventListener('click', () => {
    selectWrapper.classList.remove('active');
  });
});

