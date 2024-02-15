#!/bin/bash

echo "Поточна дата та час: $(date)"

# Встановлення express-generator
npm install -g express-generator

# Створення нового застосунку ExpressJS з інтерактивним введенням даних
echo "Створення нового застосунку ExpressJS..."
echo "Будь ласка, введіть назву вашого застосунку:"
read app_name
echo "Будь ласка, введіть шлях для створення застосунку (або натисніть Enter для використання поточного каталогу):"
read app_path

# Перевірка, чи вказаний шлях для створення застосунку
if [ -n "$app_path" ]; then
  # Якщо вказаний шлях, перейти в цей каталог
  mkdir -p "$app_path"
  cd "$app_path"
fi

# Виклик express-generator з введеними даними
npx express-generator "$app_name" --view=pug .

# Запуск сервера Node.js
cd "$app_name"
npm install
npm start