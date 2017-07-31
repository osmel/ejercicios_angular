 1- actualizar el npm
 	npm i -g npm 

2- 
 sudo npm install -g typescript
  tsc -v

 3- Instalar angular estable
    cdo instale asi me dio el error q hay debajo
 	sudo npm install -g angular-cli@latest
		******Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/angular-cli/node_modules/node-sass/build
	luego para solucionarlo:
	cd /usr/local/bin
	sudo apt-get install nodejs npm
	sudo npm install -g n
	sudo n lts
	sudo npm install -g angular-cli

	ng -v //me surgeria que hiciera lo siguiente:
	ng set --global warnings.packageDeprecation=false


4- sudo npm install -g cordova ionic 
5-   //NO me funcionohttps://atom.io/download/deb 
	sudo add-apt-repository ppa:webupd8team/atom 
	sudo apt-get update 
	sudo apt-get install atom

6- Los plugins de Atom que usaremos: -> 
	edit/preferences/packages 
	• Angular 2 Type Script Snippets (Extensión de Atom: que agrega fragmentos para "Angular 2", "TypeScript" y "HTML".)
	• Atom Bootstrap3  (herramienta de vista previa en vivo para Atom Editor.)
	• Atom Typescript 
	• File Icons 
	• Platformio Ide Terminal 
	• V Bootstrap4



///////////////////////////////////////////////////

https://github.com/osmel/ejercicios_angular.git	

