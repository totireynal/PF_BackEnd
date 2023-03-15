EXPRESS:
//npm i -g express-generator //
//express --view-hbs nombreproyecto//
: crea todas las carpetas, crea el server todo (supuestamente, no lo probe)
- en la carpeta del proyecto
//- cd nombreproyecto / npm i //
//SET DEBUG=nombreproyecto:* & npm start//
: esto instala dependencias y "prende" el server

SEQUELIZE-CLI:
//npm i --save-dev sequelize-cli//
:instala el paqueted
//npx sequelize-cli init//
:crea un proyecto arriba del ya creado (sobreescribe carpetas)
- modificar config.json /podemos declarar la db y con 
//npx sequelize-cli db:create// --> la crea
//npx sequelize-cli model:generate --name Nombremodelo --attributes firstName:string//
:crea modelo y migracion
//npx sequelize-cli db:migrate// esas migraciones se van a convertir en las tablas y modelo en la db

REVERTIR MIGRACION:
//npx sequelize-cli db:migrate:undo// vuelve a la ultima
//npx sequelize-cli db:migrate:undo:all// deshace todo
//npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js// deshace hasta esa migracion especifica


//RESOL .ENV//
git rm --cached .env 
git commit -m "stopped tracking .env file"
git push 
 --el .env desaparece de GITHUB -- lo metemos en el .gitignore
 y volvemos a commitear y pushear y vemos que ya no sube


 
 