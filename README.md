<img src="https://github.com/angelinaivanova16/collection-of-recipes-react/actions/workflows/workflow.yml/badge.svg" alt="sign of workflow state">

# Collection of recipes

- Deploy: https://angelinaivanova16.github.io/collection-of-recipes-react/
- API: https://dummyjson.com/docs/recipes

---
## Основной функционал:
- Регистрация и авторизация пользователей (страницы регистрации и входа)
- Главная страница со всеми рецептами
- Просмотр карточки рецепта с деталями приготовления (страница единицы инфрмации)
- Поиск по названию рецепта, выпадающее меню из рецептов (страница поиска)
- История поиска: сохранение названий рецептов, возможность перейти на страницу поиска (страница истории)
- Избранные рецепты: пользователь может добавлять и удалять рецепты из избранного (страница избранное)
---
## функциональность:
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использую LocalStorage
- [x] Использую функциональные компоненты c хуками
- [x] Есть рендеринг [списков](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/cards/CardsList.tsx)
- [x] Реализованы формы ([FormRegistrationLogin](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/login/FormRegistrationLogin.jsx), [SearchForm](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/search/SearchForm.tsx))
- [x] Есть применение Контекст API ([ThemeContext](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/context/ThemeContext.tsx))
- [x] Есть применение предохранителя ([ErrorBoundary](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/common/errorBoundary.jsx))
- [x] Есть кастомный хук ([useDebounce](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/hooks/hooks.ts), [useTheme](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/context/ThemeContext.tsx))
- [x] Пара компонентов использует PropTypes ([FormRegistrationLogin](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/login/FormRegistrationLogin.jsx), [Card](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/cards/Card.tsx))
- [x] Использую useDebounce ([useDebounce](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/hooks/hooks.ts), [SearchForm](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/componets/search/SearchForm.tsx))
- [x] Есть применение [lazy + Suspense](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/App.tsx)
- [x] Использую Modern Redux with Redux Toolkit ([store](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/redux/store.ts))
- [x] Использую слайсы ([favoritesSlice](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/redux/favorites-reducer.ts), [historySlice](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/redux/history-reducer.ts))
- [x] Есть кастомная [мидлвара](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/redux/middleware.js)
- [x] Используется [RTK Query](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/api/recipesApi.ts)
- [x] Используется [Transforming Responses](https://github.com/angelinaivanova16/collection-of-recipes-react/blob/main/src/api/recipesApi.ts)
- [x] Настроен CI/CD
- [x] Использую TypeScript.
