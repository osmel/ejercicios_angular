# angular_udemy
https://www.udemy.com/angular-2-fernando-herrera/learn/v4/content




-------------------------------------------

1- 
Eliminar npm
	sudo apt-get remove nodejs
	sudo apt-get remove npm
	sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules 
	sudo rm -rf /usr/local/lib/node*
	sudo rm -rf /usr/local/include/node*
	sudo rm -rf /usr/local/bin/node*
	sudo apt-get uninstall nodejs npm node
	sudo apt-get remove nodejs npm node
	https://docs.npmjs.com/misc/removing-npm
	sudo apt-get update

Instalar	
	sudo apt-get update
				//sudo apt-get install nodejs
	sudo apt-get install npm

Actualizar
		actualizacion estable
		sudo npm --version
		sudo npm cache clean -f
		sudo npm install -g n
		sudo n stable
		sudo npm --version


2- sudo npm install -g typescript
    tsc -v 

3- 
sudo npm install -g @angular/cli
sudo npm install -g angular-cli@latest


4- npm install -g cordova ionic
5- https://atom.io/download/deb
		sudo add-apt-repository ppa:webupd8team/atom
		sudo apt-get update
		sudo apt-get install atom



6- Los plugins de Atom que usaremos:
    -> preferences/packages
		• Angular 2 Type Script Snippets
		• Atom Bootstrap3
		• Atom Typescript
		• File Icons
		• Platformio Ide Terminal
		• V Bootstrap4	


---------------------------------------		










			sudo npm install npm@latest -g

   actualizar ultima version estable. LO REQUIERE
      http://www.dbigcloud.com/bigdata/88-como-actualizar-node-js-a-la-ultima-version-estable.html

3- 


		
 		npm update check failed                 
		sudo chown -R $USER:$(id -gn $USER) /home/fidel/.config

		sudo npm install -g @angular/cli
		ng -v
		ng help 


		npm install -g node-sass
	

		git config --global http.proxy http://:@




git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
	change proxyuser to your proxy user
	change proxypwd to your proxy password
	change proxy.server.com to the URL of your proxy server
	change 8080 to the proxy port configured on your proxy server
git config --global --unset http.proxy
git config --global --get http.proxy




# list all npm configurations we've set
npm config list
 
# list all the settings, AND the defaults
npm config ls -l
 
# set a configuration value
npm config set registry https://npm.example.com/
 
# unset a configuration value
npm config rm registry




npm config set proxy "http://username:password@servername:port/"
	
	/home/fidel/.npm/_logs/2017-07-29T14_31_20_700Z-debug.log
	
	/* 

	git clone https://github.com/angular/angular-cli.git
	cd angular-cli
	sudo npm link
	sudo npm install -g @angular/cli
	ng -v
	npm list enhanced-resolve @angular/cli

	No se puede encontrar "@angular/cli" en devDependencies.
	Siga estos pasos para evitar problemas:
	npm install --save-dev @angular/cli@latest



Try running with sudo or get access           
        to the local update config store via   

	Estos no me funcionaron
	npm install -g @angular/cli
	ng help 

	Actualizar 
	sudo npm uninstall -g @angular/cli
	sudo npm cache clean
	sudo npm install -g @angular/cli@latest
	*/



Auto-completar imports en TypeScript 
Puede ser que no les funcione por defecto el auto completar de los imports, este plugin hace el truco.

autocomplete-js-import		


------------------------------------------

cap 4-5 son instalaciones
 1- sudo apt-get install npm
 2- instalar TypeScript
 	   TypeScript: "compila un código JavaScript simple y limpio" que se ejecuta en cualquier navegador, en Node.js o en cualquier motor de JavaScript que admita ECMAScript 3 (o más reciente).

      http://www.typescriptlang.org/

      El compilador TypeScript de línea de comandos se puede instalar como un paquete Node.js.
    
    sudo npm install -g typescript
	
	para compilar:
	   tsc helloworld.ts
  

  3- Angular CLI
		https://cli.angular.io/
		https://github.com/angular/angular-cli
		  npm install -g @angular/cli
		  
		  Generar y servir un proyecto Angular a través de un servidor de desarrollo
		  	ng new my-dream-app  ->La CLI facilita la creación de una aplicación que ya funciona, desde la caja. 
		  	cd my-dream-app
		  	ng serve  -->Pruebe fácilmente su aplicación localmente mientras se desarrolla.

		  	http://localhost:4200/. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.
				
				Puede configurar el host y el puerto HTTP predeterminados utilizados por el servidor de desarrollo con dos opciones desde línea de comandos:

				ng serve --host 0.0.0.0 --port 4201

		   

			ng generate->Genere componentes, rutas, servicios y tuberías(components, routes, services and pipes) con un simple comando. 
			ng help --> ayuda en linea
			         




  
  4- Instalar Ionic 2 y cordova
		http://ionicframework.com/getting-started/
		   npm install -g cordova ionic


	5. Atom
		https://atom.io/

		 Descargar .deb
		 https://atom.io/download/deb


   6- Los plugins de Atom que usaremos:
		• Angular 2 Type Script Snippets
		• Atom Bootstrap3
		• Atom Typescript
		• File Icons
		• Platformio Ide Terminal
		• V Bootstrap4



	