# Vue 3 + TypeScript + Vite

## husky
``` 
npx husky install
npx husky add .husky/commit-msg "node scripts/verifyCommit.js"
```

## eslint

```
npm install -D eslint typescript
npm install -D  eslint-plugin-vue @vue/eslint-config-typescript
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
vue add @vue/cli-plugin-eslint
npx husky add .husky/pre-commit "npm run lint"
```

lint-staged 只校验暂存区
pettier配合eslint优化代码格式

`npm install -D prettier eslint-plugin-prettier @vue/eslint-config-prettier`

