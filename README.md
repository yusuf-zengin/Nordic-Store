# ToyEcommerce

This project is a monorepo that built by nx. There are 2 applications: frontend and server. To clone and run the project you can follow the instructions below:


```bash 
git clone https://github.com/yusuf-zengin/Nordic-Store.git
cd Nordic-Store
git checkout feature/demo-app
yarn
yarn nx run-many --target=build --all
echo "UNSPLASH_CLIENT_ID=<your unsplas client_id>" >> dist/packages/server/.env
node dist/packages/server/main.js
```

