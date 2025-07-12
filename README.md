# Football List

Приложение для просмотра списка футбольных команд, игроков и матчей.

Реализован базовый функционал и логика, использована модульность при разработке для дальнейшего переиспользования.

<img width="300" height="900" alt="Simulator Screenshot - iPhone 15 Pro - 2025-07-11 at 12 22 21" src="https://github.com/user-attachments/assets/9fc1aaef-7cf1-4713-bdd7-12b72954c3cb" />
<img width="300" height="900" alt="Simulator Screenshot - iPhone 15 Pro - 2025-07-11 at 12 22 47" src="https://github.com/user-attachments/assets/267199c2-0b7c-4577-b737-db23822f6824" />
<img width="300" height="900" alt="Simulator Screenshot - iPhone 15 Pro - 2025-07-11 at 12 23 04" src="https://github.com/user-attachments/assets/35c37428-371e-40d4-88b2-6625ce9ba122" />

## Структура проекта

```
football-matches/
├── public/                     # Статические файлы
├── src/
│   ├── api/                    # Настройки и базовые функции для работы с API
│   ├── components/             # UI-компоненты (карточки, разделители и др.)
│   ├── constants/              # Константы (тексты, API endpoints)
│   ├── hooks/                  # Пользовательские хуки
│   ├── interfaces/             # TypeScript интерфейсы и типы данных
│   ├── navigation/             # Навигация приложения
│   ├── screens/                # Экраны приложения (Home, Details)
│   ├── services/               # Логика работы с API (RTK Query)
│   ├── store/                  # Redux store и слайсы
│   ├── styles/                 # Глобальные стили и темы
│   ├── types/                  # Глобальные типы и enum'ы
│   └── utils/                  # Вспомогательные функции
├── package.json
├── README.md
└── ...
```

## Установка

```bash
git clone https://github.com/turamusy/football-matches.git
cd football-matches
npm install
cd ios 
pod install

```

## Запуск

Перед запуском, необходимо создать файл env, который будет содержать ваш токен и URL (api.football-data.org)

```bash
npm start
```
