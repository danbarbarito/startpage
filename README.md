# Startpage
## My custom homepage

------

## Dependencies
1. perl + cpanm
2. node.js


## Install
1. Clone repo
2. `cpanm -n --installdeps .` to install Perl dependencies
3. In the `client` folder, run `npm install` to install Node dependencies
4. In the `client` folder, run  `npm run build` to build production application, or `npm run dev` to run the development server
5. `cp startpage.conf.template startpage.conf`
6. Modify `startpage.conf` to fit your needs
7. In the root folder, run `morbo script/startpage` to run the server

![Screenshot](https://raw.githubusercontent.com/danielbarbarito/startpage/master/screenshot.png) 
