// app/privacy/page.tsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <p className="mb-4"><strong>Дата вступления в силу:</strong> 20 мая 2025</p>

      <p className="mb-6">
        Добро пожаловать в <strong>DapMeet</strong> — инструмент для автоматической транскрипции и анализа встреч в Google Meet, Zoom и Microsoft Teams с помощью расширения Chrome.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Какие данные мы собираем</h2>

      <h3 className="text-xl font-medium mb-2">a. Информация аккаунта Google</h3>
      <p className="mb-4">
        При входе через Google OAuth мы собираем:
        <ul className="list-disc list-inside ml-4">
          <li>Уникальный идентификатор пользователя Google</li>
          <li>Ваше имя и адрес электронной почты</li>
        </ul>
        Эти данные используются <strong>только</strong> для аутентификации и привязки транскрипций к вашему аккаунту.
      </p>

      <h3 className="text-xl font-medium mb-2">b. Транскрипции встреч</h3>
      <p className="mb-4">
        При активации транскрипции:
        <ul className="list-disc list-inside ml-4">
          <li>Захватывается аудио с вкладки или микрофона</li>
          <li>Аудио отправляется на сервер для расшифровки</li>
          <li>Сохраняется текст, ID встречи, ID пользователя и метка времени</li>
        </ul>
        Мы <strong>не храним</strong> сами аудиофайлы без вашего согласия.
      </p>

      <h3 className="text-xl font-medium mb-2">c. Технические данные</h3>
      <p className="mb-4">
        Мы можем собирать анонимную информацию о:
        <ul className="list-disc list-inside ml-4">
          <li>Версии браузера</li>
          <li>Ошибках и использовании расширения</li>
          <li>IP-адресе (временно для логирования)</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Как мы используем ваши данные</h2>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Для аутентификации и идентификации</li>
        <li>Для генерации и хранения транскрипций</li>
        <li>Для анализа и предоставления сводок</li>
        <li>Для улучшения стабильности и производительности сервиса</li>
      </ul>
      <p className="mb-4"><strong>Мы не продаём и не передаём</strong> ваши данные третьим лицам в рекламных целях.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Хранение и защита данных</h2>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Данные хранятся в защищённой базе данных</li>
        <li>Вся информация передается через защищенный протокол HTTPS</li>
        <li>Токены и ключи доступа защищены</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ваши права</h2>
      <p className="mb-4">Вы можете:</p>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Запросить доступ к данным</li>
        <li>Удалить аккаунт и транскрипции</li>
        <li>Отозвать доступ через Google-аккаунт</li>
      </ul>
      <p className="mb-4">Для этого свяжитесь с нами: <strong>info@dapmeet.kz</strong></p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Сторонние сервисы</h2>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Google OAuth — аутентификация</li>
        <li>Text To Speech Service — расшифровка речи</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies и локальное хранилище</h2>
      <p className="mb-4">
        Расширение использует `chrome.storage.local` для хранения токена и настроек.  
        Мы <strong>не используем cookies</strong> в расширении.  
        Веб-сайт может использовать cookies для аналитики.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Изменения в политике</h2>
      <p className="mb-4">
        Мы можем обновить политику, уведомив вас через расширение или по электронной почте.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Контакты</h2>
      <p className="mb-2">Если у вас есть вопросы:</p>
      <ul className="list-none ml-4">
        <li>📧 Email: info@dapmeet.kz</li>
        <li>🌐 Сайт: <a href="https://dapmeet.kz" className="text-blue-600 underline">dapmeet.kz</a></li>
        <li>🏢 Адрес: г. Алматы, ул. Солодовникова 21</li>
      </ul>
    </main>
  );
}
