### Blog Develop Environment Setup

#### Setup And Startup

```bash
# create project
npm create vite@latest tech-blog -- --template react-ts
cd tech-blog
npm install

# package install
npm install lucide-react
npm install -D tailwindcss@v3.4.17 postcss autoprefixer gh-pages @types/node
npx tailwindcss init -p

# startup
npm run dev
```

