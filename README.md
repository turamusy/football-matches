# Football List

Приложение для просмотра списка футбольных команд, игроков и матчей.

Реализован базовый функционал и логика, использована модульность при разработке для дальнейшего переиспользования.

## Структура проекта

```
football-ls/
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
cd football-ls
npm install
cd ios 
pod install

```

## Запуск

```bash
npm start
```
