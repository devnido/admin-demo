function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sFyk:function(e,t,a){"use strict";a.r(t);var r,i,n=a("ofXK"),o=a("tyNb"),c=a("fXoL"),s=a("Tj/N"),l=a("lvwd"),b=((i=function(){function e(t,a){_classCallCheck(this,e),this.authApiService=t,this.router=a,this.user=new s.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.user=this.authApiService.loggedUser}},{key:"logout",value:function(){this.authApiService.logout(),this.router.navigate(["/auth"])}}]),e}()).\u0275fac=function(e){return new(e||i)(c.Kb(l.a),c.Kb(o.c))},i.\u0275cmp=c.Eb({type:i,selectors:[["app-header"]],decls:58,vars:2,consts:[[1,"topbar"],[1,"navbar","top-navbar","navbar-expand-md","navbar-light"],[1,"navbar-header"],["href","index.html",1,"navbar-brand"],["src","assets/images/logo-icon.png","alt","homepage",1,"dark-logo"],["src","assets/images/logo-light-icon.png","alt","homepage",1,"light-logo"],["src","assets/images/logo-text.png","alt","homepage",1,"dark-logo"],["src","assets/images/logo-light-text.png","alt","homepage",1,"light-logo"],[1,"navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],["href","javascript:void(0)",1,"nav-link","nav-toggler","hidden-md-up","waves-effect","waves-dark"],[1,"ti-menu"],["href","javascript:void(0)",1,"nav-link","sidebartoggler","hidden-sm-down","waves-effect","waves-dark"],[1,"nav-item","hidden-sm-down"],[1,"navbar-nav","my-lg-0"],[1,"nav-item","hidden-xs-down","search-box"],["href","javascript:void(0)",1,"nav-link","hidden-sm-down","waves-effect","waves-dark"],[1,"ti-search"],[1,"app-search"],["type","text","placeholder","Search & enter",1,"form-control"],[1,"srh-btn"],[1,"ti-close"],[1,"nav-item","dropdown"],["href","","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"nav-link","dropdown-toggle","waves-effect","waves-dark"],["src","assets/images/default-user.jpg","alt","user",1,"profile-pic"],[1,"dropdown-menu","dropdown-menu-right","animated","fadeIn"],[1,"dropdown-user"],[1,"dw-user-box","text-center"],[1,"u-img"],["src","assets/images/default-user.jpg","alt","user"],[1,"u-text"],[1,"text-muted"],["routerLink","/perfil",1,"btn","btn-rounded","btn-danger","btn-sm"],["role","separator",1,"divider"],["routerLink","/perfil",1,"pointer"],[1,"ti-user"],["href","","routerLink","/configuracion"],[1,"ti-settings"],[1,"pointer",3,"click"],[1,"fa","fa-power-off"]],template:function(e,t){1&e&&(c.Nb(0,"header",0),c.Nb(1,"nav",1),c.Nb(2,"div",2),c.Nb(3,"a",3),c.Nb(4,"b"),c.Lb(5,"img",4),c.Lb(6,"img",5),c.Mb(),c.Nb(7,"span"),c.Lb(8,"img",6),c.Lb(9,"img",7),c.Mb(),c.Mb(),c.Mb(),c.Nb(10,"div",8),c.Nb(11,"ul",9),c.Nb(12,"li",10),c.Nb(13,"a",11),c.Lb(14,"i",12),c.Mb(),c.Mb(),c.Nb(15,"li",10),c.Nb(16,"a",13),c.Lb(17,"i",12),c.Mb(),c.Mb(),c.Lb(18,"li",14),c.Mb(),c.Nb(19,"ul",15),c.Nb(20,"li",16),c.Nb(21,"a",17),c.Lb(22,"i",18),c.Mb(),c.Nb(23,"form",19),c.Lb(24,"input",20),c.Nb(25,"a",21),c.Lb(26,"i",22),c.Mb(),c.Mb(),c.Mb(),c.Nb(27,"li",23),c.Nb(28,"a",24),c.Lb(29,"img",25),c.Mb(),c.Nb(30,"div",26),c.Nb(31,"ul",27),c.Nb(32,"li"),c.Nb(33,"div",28),c.Nb(34,"div",29),c.Lb(35,"img",30),c.Mb(),c.Nb(36,"div",31),c.Nb(37,"h4"),c.lc(38),c.Mb(),c.Nb(39,"p",32),c.lc(40),c.Mb(),c.Nb(41,"a",33),c.lc(42,"Ver Perfil"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Lb(43,"li",34),c.Nb(44,"li"),c.Nb(45,"a",35),c.Lb(46,"i",36),c.lc(47," Mi Perfil"),c.Mb(),c.Mb(),c.Lb(48,"li",34),c.Nb(49,"li"),c.Nb(50,"a",37),c.Lb(51,"i",38),c.lc(52," Configuraci\xf3n"),c.Mb(),c.Mb(),c.Lb(53,"li",34),c.Nb(54,"li"),c.Nb(55,"a",39),c.Vb("click",(function(){return t.logout()})),c.Lb(56,"i",40),c.lc(57," Cerrar Sesi\xf3n"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.zb(38),c.mc(t.user.name),c.zb(2),c.mc(t.user.email))},directives:[o.f],encapsulation:2}),i),u=((r=function e(){_classCallCheck(this,e),this.menu=[{titulo:"Principal",icono:"mdi mdi-gauge",submenu:[{titulo:"Inicio",url:"/bienvenido"}]},{titulo:"Administraci\xf3n",icono:"mdi mdi-folder-lock-open",submenu:[{titulo:"Tareas",url:"/tareas"}]}]}).\u0275fac=function(e){return new(e||r)},r.\u0275prov=c.Gb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),d=function(e){return[e]};function f(e,t){if(1&e&&(c.Nb(0,"li"),c.Nb(1,"a",17),c.lc(2),c.Mb(),c.Mb()),2&e){var a=t.$implicit;c.zb(1),c.ac("routerLink",c.dc(2,d,a.url)),c.zb(1),c.nc("",a.titulo," ")}}function p(e,t){if(1&e&&(c.Nb(0,"li"),c.Nb(1,"a",15),c.Lb(2,"i"),c.Nb(3,"span",7),c.lc(4),c.Nb(5,"span",16),c.lc(6),c.Mb(),c.Mb(),c.Mb(),c.Nb(7,"ul",8),c.kc(8,f,3,4,"li",14),c.Mb(),c.Mb()),2&e){var a=t.$implicit;c.zb(2),c.Bb(a.icono),c.zb(2),c.nc("",a.titulo," "),c.zb(2),c.mc(a.submenu.length),c.zb(2),c.ac("ngForOf",a.submenu)}}var h,m,v,g,N,M=((h=function(){function e(t,a,r){_classCallCheck(this,e),this.router=t,this.sideBarService=a,this.authService=r,this.sideBarMenu=[],this.user=new s.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.user=this.authService.loggedUser,this.sideBarMenu=this.sideBarService.menu}},{key:"logout",value:function(){this.authService.logout(),this.router.navigate(["/auth"])}}]),e}()).\u0275fac=function(e){return new(e||h)(c.Kb(o.c),c.Kb(u),c.Kb(l.a))},h.\u0275cmp=c.Eb({type:h,selectors:[["app-sidebar"]],decls:23,vars:2,consts:[[1,"left-sidebar"],[1,"scroll-sidebar"],[1,"sidebar-nav"],["id","sidebarnav"],[1,"user-profile"],["href","#","aria-expanded","false",1,"has-arrow","waves-effect","waves-dark"],["src","../assets/images/default-user.jpg","alt","user"],[1,"hide-menu"],["aria-expanded","false",1,"collapse"],["routerLinkActive","active","routerLink","/perfil",1,"pointer"],["routerLinkActive","active","routerLink","/configuracion"],["href","",1,"pointer",3,"click"],[1,"nav-devider"],[1,"nav-small-cap"],[4,"ngFor","ngForOf"],["href","","aria-expanded","false",1,"has-arrow","waves-effect","waves-dark"],[1,"label","label-rouded","label-themecolor","pull-right"],["routerLinkActive","active",3,"routerLink"]],template:function(e,t){1&e&&(c.Nb(0,"aside",0),c.Nb(1,"div",1),c.Nb(2,"nav",2),c.Nb(3,"ul",3),c.Nb(4,"li",4),c.Nb(5,"a",5),c.Lb(6,"img",6),c.Nb(7,"span",7),c.lc(8),c.Mb(),c.Mb(),c.Nb(9,"ul",8),c.Nb(10,"li"),c.Nb(11,"a",9),c.lc(12,"Mi Perfil"),c.Mb(),c.Mb(),c.Nb(13,"li"),c.Nb(14,"a",10),c.lc(15,"Configuraci\xf3n"),c.Mb(),c.Mb(),c.Nb(16,"li"),c.Nb(17,"a",11),c.Vb("click",(function(){return t.logout()})),c.lc(18,"Cerrar Sesi\xf3n"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Lb(19,"li",12),c.Nb(20,"li",13),c.lc(21,"ADMINISTRACI\xd3N"),c.Mb(),c.kc(22,p,9,5,"li",14),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.zb(8),c.mc(t.user.name),c.zb(14),c.ac("ngForOf",t.sideBarMenu))},directives:[o.f,o.e,n.i],encapsulation:2}),h),k=a("pLZG"),y=a("lJxs"),w=a("jhN1"),C=((g=function(){function e(t,a,r){var i=this;_classCallCheck(this,e),this.router=t,this.title=a,this.meta=r,this.getDataRoute().subscribe((function(e){i.titulo=e.titulo,i.title.setTitle(e.titulo),i.meta.updateTag({name:"description",content:i.titulo})}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getDataRoute",value:function(){return this.router.events.pipe(Object(k.a)((function(e){return e instanceof o.b})),Object(k.a)((function(e){return null===e.snapshot.firstChild})),Object(y.a)((function(e){return e.snapshot.data})))}}]),e}()).\u0275fac=function(e){return new(e||g)(c.Kb(o.c),c.Kb(w.c),c.Kb(w.b))},g.\u0275cmp=c.Eb({type:g,selectors:[["app-breadcrumb"]],decls:11,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"h3",2),c.lc(3),c.Mb(),c.Mb(),c.Nb(4,"div",3),c.Nb(5,"ol",4),c.Nb(6,"li",5),c.Nb(7,"a",6),c.lc(8,"Inicio"),c.Mb(),c.Mb(),c.Nb(9,"li",7),c.lc(10),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e&&(c.zb(3),c.mc(t.titulo),c.zb(7),c.mc(t.titulo))},encapsulation:2}),g),I=((v=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){init_plugins()}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=c.Eb({type:v,selectors:[["app-pages"]],decls:7,vars:0,consts:[["id","main-wrapper"],[1,"page-wrapper"],[1,"container-fluid"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Lb(1,"app-header"),c.Lb(2,"app-sidebar"),c.Nb(3,"div",1),c.Nb(4,"div",2),c.Lb(5,"app-breadcrumb"),c.Lb(6,"router-outlet"),c.Mb(),c.Mb(),c.Mb())},directives:[b,M,C,o.h],encapsulation:2}),v),L=((m=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=c.Eb({type:m,selectors:[["app-welcome"]],decls:102,vars:0,consts:[[1,"row"],[1,"col-md-6"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["src","../../../assets/images/refresh-token-esquema.png","alt","",1,"w100p"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",0),c.Nb(3,"div",2),c.Nb(4,"div",3),c.Nb(5,"div",4),c.Nb(6,"h3"),c.lc(7,"\xbfQue es esto?"),c.Mb(),c.Nb(8,"p"),c.lc(9,"Es demo de un panel de control para utilizar como base para proyectos en angular. Est\xe1 desarrollado en "),c.Nb(10,"b"),c.lc(11,"Angular 9."),c.Mb(),c.Mb(),c.Nb(12,"p"),c.lc(13,"A modo de ejemplo tiene un CRUD de tareas y ademas permite la modificaci\xf3n de perfil del usuario loguaedo."),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(14,"div",2),c.Nb(15,"div",3),c.Nb(16,"div",4),c.Nb(17,"h3"),c.lc(18,"Funcionalidades del sistema"),c.Mb(),c.Nb(19,"ul"),c.Nb(20,"li"),c.lc(21,"Registro de usuarios."),c.Mb(),c.Nb(22,"li"),c.lc(23,"Ingreso de usuarios."),c.Mb(),c.Nb(24,"li"),c.lc(25,"Recuperar contrase\xf1a mediante email."),c.Mb(),c.Nb(26,"li"),c.lc(27,"Modificar nombre y contrase\xf1a en el perfil de usuario."),c.Mb(),c.Nb(28,"li"),c.lc(29,"Agregar tareas."),c.Mb(),c.Nb(30,"li"),c.lc(31,"Listar tareas de forma paginada."),c.Mb(),c.Nb(32,"li"),c.lc(33,"Buscar tareas por nombre y estado."),c.Mb(),c.Nb(34,"li"),c.lc(35,"Modificar el estado de la tarea en el listado."),c.Mb(),c.Nb(36,"li"),c.lc(37,"Modificar el estado y el nombre de la tarea en p\xe1gina detalle."),c.Mb(),c.Nb(38,"li"),c.lc(39,"Eliminar una tarea."),c.Mb(),c.Nb(40,"li"),c.lc(41,"Mostrar hora y fecha de acuerdo a la regi\xf3n configurada en el cliente."),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(42,"div",2),c.Nb(43,"div",3),c.Nb(44,"div",4),c.Nb(45,"h3"),c.lc(46,"Conocimiento aplicado en el desarrollo de este front-end"),c.Mb(),c.Nb(47,"ol"),c.Nb(48,"li"),c.lc(49,"Comunicaci\xf3n con fuentes de datos externas (API Rest)."),c.Mb(),c.Nb(50,"li"),c.lc(51,"Implementaci\xf3n de Guards para restringir acceso."),c.Mb(),c.Nb(52,"li"),c.lc(53,"Implementaci\xf3n de Lazy Loading."),c.Mb(),c.Nb(54,"li"),c.lc(55,"Implementaci\xf3n de Pipes."),c.Mb(),c.Nb(56,"li"),c.lc(57,"Utilizaci\xf3n de servicios."),c.Mb(),c.Nb(58,"li"),c.lc(59,"Utilizaci\xf3n de Local Storage para almacenar datos."),c.Mb(),c.Nb(60,"li"),c.lc(61,"Agrupaci\xf3n de componentes en m\xf3dulos."),c.Mb(),c.Nb(62,"li"),c.lc(63,"Implementacion de componentes compartidos entre m\xf3dulos."),c.Mb(),c.Nb(64,"li"),c.lc(65,"Implementaci\xf3n de rutas padres e hijas."),c.Mb(),c.Nb(66,"li"),c.lc(67,"Utilizaci\xf3n programaci\xf3n reactiva mediante rxjs para manejar solicitudes al servidor sin olvidar incluir el unsubscribe."),c.Mb(),c.Nb(68,"li"),c.lc(69,"Validaci\xf3nes nativas de formularios HTML."),c.Mb(),c.Nb(70,"li"),c.lc(71,"Utilizaci\xf3n de servicios para comunicar componentes."),c.Mb(),c.Nb(72,"li"),c.lc(73,"Implementaci\xf3n de Interceptors para manejar la renovaci\xf3n del JWT de forma automatica."),c.Mb(),c.Nb(74,"li"),c.lc(75,"Implementaci\xf3n de Interceptors para manejar los errores de las solicitudes al servidor."),c.Mb(),c.Nb(76,"li"),c.lc(77,"Utilizaci\xf3n de variables de entorno para desarrollo y producci\xf3n."),c.Mb(),c.Nb(78,"li"),c.lc(79,"Integraci\xf3n con Google ReCaptcha."),c.Mb(),c.Nb(80,"li"),c.lc(81,"Segrecaci\xf3n de responsabilidades, componentes se encargan de manejar la vista y los servicios de acceder a los datos."),c.Mb(),c.Nb(82,"li"),c.lc(83,"C\xf3digo escrito de forma limpia y ordenanda, para facilitar la lectura, la mantenci\xf3n y la escalabilidad del proyecto."),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(84,"div",1),c.Nb(85,"div",0),c.Nb(86,"div",2),c.Nb(87,"div",3),c.Nb(88,"div",4),c.Nb(89,"h3"),c.lc(90,"\xbfComo funciona?"),c.Mb(),c.Nb(91,"p"),c.lc(92,"Consume un API rest de recursos la cual restringe el acceso mediante un json web token que se obtiene desde un servidor de autenticaci\xf3n. "),c.Mb(),c.Nb(93,"p"),c.lc(94,"El json web token tiene un perdiodo de duraci\xf3n, una vez terminado este periodo es necesario renovar el json web token en el servidor de autenticaci\xf3n utilizando un refresh token."),c.Mb(),c.Nb(95,"p"),c.lc(96,"Ambos tokens son proporcionados por el servidor de autenticaci\xf3n cuando un usuario ingresa al sistema mediante el formulario de login."),c.Mb(),c.Nb(97,"h3"),c.lc(98,"Esquema de funcionamiento"),c.Mb(),c.Nb(99,"p"),c.lc(100,"La siguiente imagen muestra el flujo de la interacci\xf3n que se genera entre las partes que componen el sistema completo (frontend y backend)."),c.Mb(),c.Lb(101,"img",5),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb())},encapsulation:2}),m),z=a("PSD3"),P=a.n(z),S=a("AytR"),T=a("tk/3"),x=((N=function(){function e(t){_classCallCheck(this,e),this.http=t,this.baseUrlResources=S.a.baseUrlResourcesApi}return _createClass(e,[{key:"changeUserInfo",value:function(e,t){return this.http.put(this.baseUrlResources+"/users/"+e+"/info",{name:t}).pipe(Object(y.a)((function(e){return!!e.ok&&e.content.user})))}},{key:"changePassword",value:function(e,t,a,r){return this.http.put(this.baseUrlResources+"/users/"+e+"/password",{currentPassword:t,newPassword:a,confirmNewPassword:r}).pipe(Object(y.a)((function(e){return!!e.ok})))}}]),e}()).\u0275fac=function(e){return new(e||N)(c.Rb(T.b))},N.\u0275prov=c.Gb({token:N,factory:N.\u0275fac,providedIn:"root"}),N),_=a("3Pt+");function A(e,t){1&e&&(c.Nb(0,"div",2),c.Nb(1,"div",3),c.Nb(2,"div",30),c.Nb(3,"h4",5),c.lc(4,"Fotograf\xeda del Usuario"),c.Mb(),c.Nb(5,"h6",6),c.lc(6,"Actualiza tu foto personal"),c.Mb(),c.Mb(),c.Mb(),c.Mb())}var j,O,V,R=((V=function(){function e(t,a){_classCallCheck(this,e),this.authService=t,this.profileService=a,this.user=new s.a,this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.user=this.authService.loggedUser}},{key:"ngOnDestroy",value:function(){this.subscriptions.map((function(e){return e.unsubscribe()}))}},{key:"saveProfile",value:function(e){var t=this;if(!e.invalid)if(e.value.name!==this.user.name){var a=this.profileService.changeUserInfo(this.user._id,e.value.name).subscribe((function(e){e?(t.user.name=e.name,t.authService.updateLoggedUser(e),P.a.fire("Informaci\xf3n Modificada","Su informaci\xf3n de usuario ha sido modificada exitosamente","success")):console.log(e)}),(function(e){P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}else P.a.fire("Debes cambiar la informaci\xf3n","Para modificar tu perfil primero debes realizar un cambio","info")}},{key:"updatePassword",value:function(e){var t=this;if(!e.invalid)if(e.value.newPassword===e.value.confirmNewPassword){this.currentPassword=e.value.currentPassword,this.newPassword=e.value.newPassword,this.confirmNewPassword=e.value.confirmNewPassword;var a=this.profileService.changePassword(this.user._id,this.currentPassword,this.newPassword,this.confirmNewPassword).subscribe((function(a){a?(t.currentPassword=e.value.currentPassword="",t.newPassword=e.value.newPassword="",t.confirmNewPassword=e.value.confirmNewPassword="",P.a.fire("Contrase\xf1a modificada","Su contrase\xf1a ha sido modificada exitosamente","success")):console.log(a)}),(function(e){P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}else P.a.fire("Contrase\xf1as Incorrectas",'"Contrase\xf1a" y "Confirmar contrase\xf1a" deben ser iguales',"error")}}]),e}()).\u0275fac=function(e){return new(e||V)(c.Kb(l.a),c.Kb(x))},V.\u0275cmp=c.Eb({type:V,selectors:[["app-profile"]],decls:62,vars:6,consts:[[1,"row","animated","fadeIn"],[1,"col-md-6"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle"],["ngNativeValidate","",1,"form","p-t-20",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","exampleInputuname"],[1,"input-group"],[1,"input-group-addon"],[1,"ti-user"],["name","name","type","text","placeholder","Nombre de usuario","required","",1,"form-control",3,"ngModel"],["for","exampleInputEmail1"],[1,"ti-email"],["name","email","type","email","placeholder","Correo del usuario","disabled","","required","",1,"form-control",3,"ngModel"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10"],[1,"fa","fa-save"],["class","col-md-12",4,"ngIf"],["fp","ngForm"],[1,"input-group-addon","bg-danger","text-white"],[1,"mdi","mdi-key"],["name","currentPassword","type","password","placeholder","Contrase\xf1a Actual","required","",1,"form-control",3,"ngModel"],[1,"input-group-addon","bg-primary","text-white"],[1,"mdi","mdi-key-variant"],["name","newPassword","type","password","placeholder","Nueva Contrase\xf1a","required","",1,"form-control",3,"ngModel"],["name","confirmNewPassword","type","password","placeholder","Confirmar Nueva Contrase\xf1a","required","",1,"form-control",3,"ngModel"],["type","submit",1,"btn","btn-danger","btn-block","waves-effect","waves-light","m-r-10"],[1,"card-body","text-center"]],template:function(e,t){if(1&e){var a=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"div",4),c.Nb(5,"h4",5),c.lc(6,"Perfil de Usuario"),c.Mb(),c.Nb(7,"h6",6),c.lc(8,"Actualiza tus datos"),c.Mb(),c.Nb(9,"form",7,8),c.Vb("ngSubmit",(function(){c.hc(a);var e=c.gc(10);return t.saveProfile(e)})),c.Nb(11,"div",9),c.Nb(12,"label",10),c.lc(13,"Nombre de Usuario"),c.Mb(),c.Nb(14,"div",11),c.Nb(15,"div",12),c.Lb(16,"i",13),c.Mb(),c.Lb(17,"input",14),c.Mb(),c.Mb(),c.Nb(18,"div",9),c.Nb(19,"label",15),c.lc(20,"Correo de Usuario"),c.Mb(),c.Nb(21,"div",11),c.Nb(22,"div",12),c.Lb(23,"i",16),c.Mb(),c.Lb(24,"input",17),c.Mb(),c.Mb(),c.Nb(25,"button",18),c.Lb(26,"i",19),c.lc(27," Guardar"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.kc(28,A,7,0,"div",20),c.Mb(),c.Nb(29,"div",1),c.Nb(30,"div",3),c.Nb(31,"div",4),c.Nb(32,"h4",5),c.lc(33,"Cambiar Contrase\xf1a"),c.Mb(),c.Nb(34,"h6",6),c.lc(35,"Actualiza tu contrase\xf1a"),c.Mb(),c.Nb(36,"form",7,21),c.Vb("ngSubmit",(function(){c.hc(a);var e=c.gc(37);return t.updatePassword(e)})),c.Nb(38,"div",9),c.Nb(39,"label"),c.lc(40,"Contrase\xf1a Actual"),c.Mb(),c.Nb(41,"div",11),c.Nb(42,"div",22),c.Lb(43,"i",23),c.Mb(),c.Lb(44,"input",24),c.Mb(),c.Mb(),c.Nb(45,"div",9),c.Nb(46,"label"),c.lc(47,"Nueva Contrase\xf1a"),c.Mb(),c.Nb(48,"div",11),c.Nb(49,"div",25),c.Lb(50,"i",26),c.Mb(),c.Lb(51,"input",27),c.Mb(),c.Mb(),c.Nb(52,"div",9),c.Nb(53,"label"),c.lc(54,"Confirmar Nueva Contrase\xf1a"),c.Mb(),c.Nb(55,"div",11),c.Nb(56,"div",25),c.Lb(57,"i",26),c.Mb(),c.Lb(58,"input",28),c.Mb(),c.Mb(),c.Nb(59,"button",29),c.Lb(60,"i",19),c.lc(61," Actualizar"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}2&e&&(c.zb(17),c.ac("ngModel",t.user.name),c.zb(7),c.ac("ngModel",t.user.email),c.zb(4),c.ac("ngIf",!1),c.zb(16),c.ac("ngModel",t.currentPassword),c.zb(7),c.ac("ngModel",t.newPassword),c.zb(7),c.ac("ngModel",t.confirmNewPassword))},directives:[_.g,_.h,_.b,_.k,_.f,_.i,n.j],encapsulation:2}),V),U=((O=function(){function e(t,a){_classCallCheck(this,e),this.http=t,this.router=a,this.baseUrlResources=S.a.baseUrlResourcesApi}return _createClass(e,[{key:"getAll",value:function(){return this.http.get(this.baseUrlResources+"/todo/all").pipe(Object(y.a)((function(e){return e.content})))}},{key:"getTodos",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.http.get(this.baseUrlResources+"/todo?page="+e).pipe(Object(y.a)((function(e){return e.content})))}},{key:"getTodo",value:function(e){return this.http.get(this.baseUrlResources+"/todo/"+e).pipe(Object(y.a)((function(e){return e.content})))}},{key:"addTodo",value:function(e){return this.http.post(this.baseUrlResources+"/todo",e).pipe(Object(y.a)((function(e){return e.content})))}},{key:"updateTodo",value:function(e){return this.http.put(this.baseUrlResources+"/todo/"+e._id,e).pipe(Object(y.a)((function(e){return e.content})))}},{key:"deleteTodo",value:function(e){return this.http.delete(this.baseUrlResources+"/todo/"+e).pipe(Object(y.a)((function(e){return e.content})))}},{key:"searchTodos",value:function(e){return this.http.get(this.baseUrlResources+"/todo/"+e+"/search").pipe(Object(y.a)((function(e){return e.content})))}}]),e}()).\u0275fac=function(e){return new(e||O)(c.Rb(T.b),c.Rb(o.c))},O.\u0275prov=c.Gb({token:O,factory:O.\u0275fac,providedIn:"root"}),O),E=((j=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){var t="Nunca";return void 0!==e&&(t=new Date(e).toLocaleDateString("es-CL",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),t}}]),e}()).\u0275fac=function(e){return new(e||j)},j.\u0275pipe=c.Jb({name:"dateToLocal",type:j,pure:!0}),j);function B(e,t){1&e&&(c.Nb(0,"div",16),c.Nb(1,"div",17),c.Lb(2,"i",18),c.Mb(),c.Mb())}function K(e,t){if(1&e&&(c.Nb(0,"s"),c.lc(1),c.Mb()),2&e){var a=c.Xb().$implicit;c.zb(1),c.nc(" ",a.name,"")}}function F(e,t){1&e&&c.Lb(0,"i",32)}var H=function(e,t){return{"label-warning":e,"label-primary":t}},q=function(e){return["/tarea",e]};function X(e,t){if(1&e){var a=c.Ob();c.Nb(0,"tr"),c.Nb(1,"td"),c.kc(2,K,2,1,"s",22),c.lc(3),c.Mb(),c.Nb(4,"td"),c.Nb(5,"span",23),c.lc(6),c.Mb(),c.Mb(),c.Nb(7,"td"),c.Nb(8,"div",24),c.Nb(9,"label"),c.Nb(10,"input",25),c.Vb("change",(function(){c.hc(a);var e=t.$implicit;return c.Xb(2).changeSwitch(e)})),c.Mb(),c.Lb(11,"span",26),c.Mb(),c.kc(12,F,1,0,"i",27),c.Mb(),c.Mb(),c.Nb(13,"td"),c.lc(14),c.Yb(15,"dateToLocal"),c.Mb(),c.Nb(16,"td"),c.lc(17),c.Yb(18,"dateToLocal"),c.Mb(),c.Nb(19,"td"),c.Nb(20,"button",28),c.Lb(21,"i",29),c.Mb(),c.Nb(22,"button",30),c.Vb("click",(function(){c.hc(a);var e=t.$implicit;return c.Xb(2).deleteTodo(e)})),c.Lb(23,"i",31),c.Mb(),c.Mb(),c.Mb()}if(2&e){var r=t.$implicit,i=c.Xb(2);c.zb(2),c.ac("ngIf","realizado"===r.status),c.zb(1),c.nc(" ","pendiente"===r.status?r.name:""," "),c.zb(2),c.ac("ngClass",c.ec(14,H,"pendiente"===r.status,"realizado"===r.status)),c.zb(1),c.mc("pendiente"===r.status?"Pendiente":"Realizado"),c.zb(4),c.ac("checked","realizado"===r.status)("disabled",i.loadingById===r._id),c.zb(2),c.ac("ngIf",i.loadingById===r._id),c.zb(2),c.mc(c.Zb(15,10,r.createdAt)),c.zb(3),c.mc(c.Zb(18,12,r.updatedAt)),c.zb(3),c.ac("routerLink",c.dc(17,q,r._id))}}function D(e,t){if(1&e&&(c.Nb(0,"table",19),c.Nb(1,"thead"),c.Nb(2,"tr"),c.Nb(3,"th",20),c.lc(4,"Nombre"),c.Mb(),c.Nb(5,"th",20),c.lc(6,"Estado"),c.Mb(),c.Nb(7,"th",20),c.lc(8,"Cambiar Estado"),c.Mb(),c.Nb(9,"th",20),c.lc(10,"Creaci\xf3n"),c.Mb(),c.Nb(11,"th",20),c.lc(12,"Modificaci\xf3n"),c.Mb(),c.Nb(13,"th",20),c.lc(14,"Acciones"),c.Mb(),c.Mb(),c.Mb(),c.Nb(15,"tbody"),c.kc(16,X,24,19,"tr",21),c.Mb(),c.Mb()),2&e){var a=c.Xb();c.zb(16),c.ac("ngForOf",a.todos)}}function G(e,t){1&e&&(c.Nb(0,"div",33),c.lc(1,"No hay tareas para mostrar."),c.Mb())}function J(e,t){if(1&e){var a=c.Ob();c.Nb(0,"button",34),c.Vb("click",(function(){return c.hc(a),c.Xb().getPrevPage()})),c.lc(1," Anteriores "),c.Mb()}}function $(e,t){if(1&e){var a=c.Ob();c.Nb(0,"button",35),c.Vb("click",(function(){return c.hc(a),c.Xb().getNextPage()})),c.lc(1," Siguientes "),c.Mb()}}var Z,Y=function(){return["/tarea","add"]},Q=((Z=function(){function e(t){_classCallCheck(this,e),this.todoApiService=t,this.todos=[],this.totalTodos=0,this.page=1,this.nextPage=1,this.loading=!0,this.loadingById="",this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadTodos()}},{key:"ngOnDestroy",value:function(){this.subscriptions.map((function(e){return e.unsubscribe()}))}},{key:"searchTodos",value:function(e){var t=this;if(0!==e.length){this.loading=!0;var a=this.todoApiService.searchTodos(e).subscribe((function(e){t.todos=e.todos,t.totalTodos=e.total,t.loading=!1}),(function(e){t.loading=!1,P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}else this.loadTodos()}},{key:"loadTodos",value:function(){var e=this;this.loading=!0;var t=this.todoApiService.getTodos(this.page).subscribe((function(t){e.todos=t.todos,e.totalTodos=t.total,e.nextPage=t.nextPage,e.loading=!1}),(function(t){e.loading=!1,P.a.fire("Ha ocurrido un error",422===t.status?t.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(t)}},{key:"deleteTodo",value:function(e){var t=this;P.a.fire({title:"\xbfEst\xe1 seguro?",text:"Est\xe1 a punto de borrar la tarea "+e.name,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar!",cancelButtonText:"No"}).then((function(a){if(a.value){var r=t.todoApiService.deleteTodo(e._id).subscribe((function(e){t.page=1,t.loadTodos(),P.a.fire("Eliminado!","La tarea se ha eliminado exitosamente.","success")}),(function(e){P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));t.subscriptions.push(r)}}))}},{key:"changeSwitch",value:function(e){var t=this;e.status="pendiente"===e.status?"realizado":"pendiente",this.loadingById=e._id;var a=this.todoApiService.updateTodo(e).subscribe((function(e){var a=t.todos.findIndex((function(t){return t._id===e.todo._id}));t.todos[a]=e.todo,t.loadingById=""}),(function(e){t.loadingById="",P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}},{key:"getPrevPage",value:function(){this.page>1&&(this.page--,this.loadTodos())}},{key:"getNextPage",value:function(){this.nextPage>this.page&&(this.page++,this.loadTodos())}}]),e}()).\u0275fac=function(e){return new(e||Z)(c.Kb(U))},Z.\u0275cmp=c.Eb({type:Z,selectors:[["app-todos"]],decls:23,vars:8,consts:[[1,"row","animated","fadeIn"],[1,"col-12"],[1,"card"],[1,"card-body"],["type","text","placeholder","Buscar tarea",1,"form-control",3,"keyup"],["inputSearch",""],["class","row",4,"ngIf"],[1,"text-right"],[1,"btn-rounded","btn-primary","pointer",3,"routerLink"],[1,"mdi","mdi-plus"],[1,"card-title"],[1,"badge","badge-danger"],["class","table table-hover",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["class","btn btn-secondary mr-2",3,"click",4,"ngIf"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"row"],[1,"col-md-12","text-center"],[1,"fa","fa-spin","fa-spinner","fa-5x"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"label",3,"ngClass"],[1,"switch"],["type","checkbox",3,"checked","disabled","change"],[1,"lever","switch-col-indigo"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"btn","btn-primary","mr-2",3,"routerLink"],[1,"fa","fa-edit"],[1,"btn","btn-danger",3,"click"],[1,"fa","fa-trash-o"],[1,"fa","fa-spin","fa-spinner"],[1,"alert","alert-success"],[1,"btn","btn-secondary","mr-2",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(e,t){if(1&e){var a=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"input",4,5),c.Vb("keyup",(function(){c.hc(a);var e=c.gc(5);return t.searchTodos(e.value)})),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"div",0),c.Nb(7,"div",1),c.Nb(8,"div",2),c.Nb(9,"div",3),c.kc(10,B,3,0,"div",6),c.Nb(11,"div",7),c.Nb(12,"button",8),c.Lb(13,"i",9),c.lc(14," Agregar Tarea"),c.Mb(),c.Mb(),c.Nb(15,"h3",10),c.lc(16,"Tareas "),c.Nb(17,"span",11),c.lc(18),c.Mb(),c.Mb(),c.kc(19,D,17,1,"table",12),c.kc(20,G,2,0,"div",13),c.kc(21,J,2,0,"button",14),c.kc(22,$,2,0,"button",15),c.Mb(),c.Mb(),c.Mb(),c.Mb()}2&e&&(c.zb(10),c.ac("ngIf",t.loading),c.zb(2),c.ac("routerLink",c.cc(7,Y)),c.zb(6),c.mc(t.totalTodos),c.zb(1),c.ac("ngIf",t.totalTodos),c.zb(1),c.ac("ngIf",!t.totalTodos),c.zb(1),c.ac("ngIf",t.page>1),c.zb(1),c.ac("ngIf",t.nextPage>t.page))},directives:[n.j,o.d,n.i,n.h],pipes:[E],encapsulation:2}),Z),W=function e(){_classCallCheck(this,e)};function ee(e,t){1&e&&(c.Nb(0,"p",19),c.lc(1," Ingresar datos de la nueva tarea "),c.Mb())}function te(e,t){1&e&&(c.Nb(0,"p",19),c.lc(1," Actualizar datos de la tarea "),c.Mb())}function ae(e,t){1&e&&(c.Nb(0,"div",0),c.Nb(1,"div",20),c.Lb(2,"i",21),c.Mb(),c.Mb())}function re(e,t){if(1&e){var a=c.Ob();c.Nb(0,"div",10),c.Nb(1,"label"),c.lc(2,"Estado"),c.Mb(),c.Nb(3,"select",22),c.Vb("change",(function(e){return c.hc(a),c.Xb().changeStatus(e.target.value)}))("ngModelChange",(function(e){return c.hc(a),c.Xb().todo.status=e})),c.Nb(4,"option",23),c.lc(5,"Seleccione estado"),c.Mb(),c.Nb(6,"option",24),c.lc(7,"Pendiente"),c.Mb(),c.Nb(8,"option",25),c.lc(9,"Realizado"),c.Mb(),c.Mb(),c.Mb()}if(2&e){var r=c.Xb();c.zb(3),c.ac("ngModel",r.todo.status)}}var ie,ne,oe,ce,se,le,be=((oe=function(){function e(t,a,r){var i=this;_classCallCheck(this,e),this.todoApiService=t,this.router=a,this.activatedRoute=r,this.todo=new W,this.modo="",this.loading=!1,this.subscriptions=[],this.activatedRoute.params.subscribe((function(e){var t=i.modo=e.id;"add"!==i.modo&&i.getTodo(t)}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.map((function(e){return e.unsubscribe()}))}},{key:"getTodo",value:function(e){var t=this;this.loading=!0;var a=this.todoApiService.getTodo(e).subscribe((function(e){t.loading=!1,t.todo=e.todo}),(function(e){t.loading=!1,P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}},{key:"saveTodo",value:function(e){var t=this;if(!e.invalid)if("add"===this.modo){this.loading=!0;var a=this.todoApiService.addTodo(this.todo).subscribe((function(e){t.loading=!1,t.todo=e.todo,P.a.fire("Tarea agregada",t.todo.name,"success"),t.router.navigate(["/tarea",t.todo._id])}),(function(e){t.loading=!1,P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(a)}else{this.loading=!0;var r=this.todoApiService.updateTodo(this.todo).subscribe((function(e){t.todo=e.todo,t.loading=!1,P.a.fire("Tarea actualizada",t.todo.name,"success"),t.router.navigate(["/tareas"])}),(function(e){t.loading=!1,P.a.fire("Ha ocurrido un error",422===e.status?e.error.content.error.errors[0].msg:"Vuelva a intentarlo mas tarde","error")}));this.subscriptions.push(r)}}},{key:"changeStatus",value:function(e){this.todo.status=e}}]),e}()).\u0275fac=function(e){return new(e||oe)(c.Kb(U),c.Kb(o.c),c.Kb(o.a))},oe.\u0275cmp=c.Eb({type:oe,selectors:[["app-todo"]],decls:26,vars:6,consts:[[1,"row"],[1,"col-6"],[1,"card"],[1,"card-body"],[1,"box-title","m-b-0"],["class","text-muted m-b-30 font-13",4,"ngIf"],[1,"col-sm-12","col-xs-12"],["class","row",4,"ngIf"],["ngNativeValidate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],[1,"input-group"],[1,"input-group-addon","bg-primary","text-light"],[1,"fa","fa-comment-o"],["name","name","type","text","placeholder","Nombre de la tarea","required","",1,"form-control",3,"ngModel","ngModelChange"],["class","form-group",4,"ngIf"],["type","submit",1,"btn","btn-primary","waves-effect","waves-light","m-r-10"],[1,"fa","fa-save"],["routerLink","/tareas",1,"btn","btn-inverse","waves-effect","waves-light"],[1,"text-muted","m-b-30","font-13"],[1,"col-md-12","text-center"],[1,"fa","fa-spin","fa-spinner","fa-3x"],["name","status","required","",1,"form-control",3,"ngModel","change","ngModelChange"],["value","","selected","","disabled",""],["value","pendiente"],["value","realizado"]],template:function(e,t){if(1&e){var a=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"h3",4),c.lc(5),c.Mb(),c.kc(6,ee,2,0,"p",5),c.kc(7,te,2,0,"p",5),c.Nb(8,"div",0),c.Nb(9,"div",6),c.kc(10,ae,3,0,"div",7),c.Nb(11,"form",8,9),c.Vb("ngSubmit",(function(){c.hc(a);var e=c.gc(12);return t.saveTodo(e)})),c.Nb(13,"div",10),c.Nb(14,"label"),c.lc(15,"Nombre"),c.Mb(),c.Nb(16,"div",11),c.Nb(17,"span",12),c.Lb(18,"i",13),c.Mb(),c.Nb(19,"input",14),c.Vb("ngModelChange",(function(e){return t.todo.name=e})),c.Mb(),c.Mb(),c.Mb(),c.kc(20,re,10,1,"div",15),c.Nb(21,"button",16),c.Lb(22,"i",17),c.lc(23," Guardar"),c.Mb(),c.Nb(24,"a",18),c.lc(25,"Volver"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}2&e&&(c.zb(5),c.mc(t.todo.name),c.zb(1),c.ac("ngIf","add"===t.modo),c.zb(1),c.ac("ngIf","add"!==t.modo),c.zb(3),c.ac("ngIf",t.loading),c.zb(9),c.ac("ngModel",t.todo.name),c.zb(1),c.ac("ngIf","add"!==t.modo))},directives:[n.j,_.g,_.h,_.b,_.k,_.f,_.i,o.f,_.l,_.j,_.m],encapsulation:2}),oe),ue=((ne=function(){function e(t){_classCallCheck(this,e),this.document=t,this.settings={themeUrl:"assets/css/colors/default.css",theme:"default"}}return _createClass(e,[{key:"saveSettings",value:function(){localStorage.setItem("settings",JSON.stringify(this.settings))}},{key:"cargarAjustes",value:function(){localStorage.getItem("settings")&&(this.settings=JSON.parse(localStorage.getItem("settings")),this.applyTheme(this.settings.theme))}},{key:"applyTheme",value:function(e){var t="assets/css/colors/".concat(e,".css");this.document.getElementById("theme").setAttribute("href",t),this.settings.theme=e,this.settings.themeUrl=t,this.saveSettings()}}]),e}()).\u0275fac=function(e){return new(e||ne)(c.Rb(n.c))},ne.\u0275prov=c.Gb({token:ne,factory:ne.\u0275fac,providedIn:"root"}),ne),de=((ie=function(){function e(t){_classCallCheck(this,e),this.settingsService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.putCheckIcon()}},{key:"changeColor",value:function(e,t){this.applyCheckIcon(t),this.settingsService.applyTheme(e)}},{key:"applyCheckIcon",value:function(e){var t=document.getElementsByClassName("selector"),a=!0,r=!1,i=void 0;try{for(var n,o=t[Symbol.iterator]();!(a=(n=o.next()).done);a=!0)n.value.classList.remove("working")}catch(c){r=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}e.classList.add("working")}},{key:"putCheckIcon",value:function(){var e=document.getElementsByClassName("selector"),t=this.settingsService.settings.theme,a=!0,r=!1,i=void 0;try{for(var n,o=e[Symbol.iterator]();!(a=(n=o.next()).done);a=!0){var c=n.value;if(c.getAttribute("data-theme")===t){c.classList.add("working");break}}}catch(s){r=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}}}]),e}()).\u0275fac=function(e){return new(e||ie)(c.Kb(ue))},ie.\u0275cmp=c.Eb({type:ie,selectors:[["app-settings"]],decls:63,vars:0,consts:[[1,"row"],[1,"col-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"r-panel-body"],["id","themecolors",1,"m-t-20"],["data-theme","default",1,"selector","default-theme",3,"click"],["link1",""],["data-theme","green",1,"selector","green-theme",3,"click"],["link2",""],["data-theme","red",1,"selector","red-theme",3,"click"],["link3",""],["data-theme","blue",1,"selector","blue-theme",3,"click"],["link4",""],["data-theme","purple",1,"selector","purple-theme",3,"click"],["link5",""],["data-theme","megna",1,"selector","megna-theme",3,"click"],["link6",""],[1,"d-block","m-t-30"],["data-theme","default-dark",1,"selector","default-dark-theme",3,"click"],["link7",""],["data-theme","green-dark",1,"selector","green-dark-theme",3,"click"],["link8",""],["data-theme","red-dark",1,"selector","red-dark-theme",3,"click"],["link9",""],["data-theme","blue-dark",1,"selector","blue-dark-theme",3,"click"],["link10",""],["data-theme","purple-dark",1,"selector","purple-dark-theme",3,"click"],["link11",""],["data-theme","megna-dark",1,"selector","megna-dark-theme",3,"click"],["link12",""]],template:function(e,t){if(1&e){var a=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"h4",4),c.lc(5,"Temas"),c.Mb(),c.Lb(6,"hr"),c.Nb(7,"div",5),c.Nb(8,"ul",6),c.Nb(9,"li"),c.Nb(10,"b"),c.lc(11,"Con el sidebar claro"),c.Mb(),c.Mb(),c.Nb(12,"li"),c.Nb(13,"a",7,8),c.Vb("click",(function(){c.hc(a);var e=c.gc(14);return t.changeColor("default",e)})),c.lc(15,"1"),c.Mb(),c.Mb(),c.Nb(16,"li"),c.Nb(17,"a",9,10),c.Vb("click",(function(){c.hc(a);var e=c.gc(18);return t.changeColor("green",e)})),c.lc(19,"2"),c.Mb(),c.Mb(),c.Nb(20,"li"),c.Nb(21,"a",11,12),c.Vb("click",(function(){c.hc(a);var e=c.gc(22);return t.changeColor("red",e)})),c.lc(23,"3"),c.Mb(),c.Mb(),c.Nb(24,"li"),c.Nb(25,"a",13,14),c.Vb("click",(function(){c.hc(a);var e=c.gc(26);return t.changeColor("blue",e)})),c.lc(27,"4"),c.Mb(),c.Mb(),c.Nb(28,"li"),c.Nb(29,"a",15,16),c.Vb("click",(function(){c.hc(a);var e=c.gc(30);return t.changeColor("purple",e)})),c.lc(31,"5"),c.Mb(),c.Mb(),c.Nb(32,"li"),c.Nb(33,"a",17,18),c.Vb("click",(function(){c.hc(a);var e=c.gc(34);return t.changeColor("megna",e)})),c.lc(35,"6"),c.Mb(),c.Mb(),c.Nb(36,"li",19),c.Nb(37,"b"),c.lc(38,"Con el sidebar oscuro"),c.Mb(),c.Mb(),c.Nb(39,"li"),c.Nb(40,"a",20,21),c.Vb("click",(function(){c.hc(a);var e=c.gc(41);return t.changeColor("default-dark",e)})),c.lc(42,"7"),c.Mb(),c.Mb(),c.Nb(43,"li"),c.Nb(44,"a",22,23),c.Vb("click",(function(){c.hc(a);var e=c.gc(45);return t.changeColor("green-dark",e)})),c.lc(46,"8"),c.Mb(),c.Mb(),c.Nb(47,"li"),c.Nb(48,"a",24,25),c.Vb("click",(function(){c.hc(a);var e=c.gc(49);return t.changeColor("red-dark",e)})),c.lc(50,"9"),c.Mb(),c.Mb(),c.Nb(51,"li"),c.Nb(52,"a",26,27),c.Vb("click",(function(){c.hc(a);var e=c.gc(53);return t.changeColor("blue-dark",e)})),c.lc(54,"10"),c.Mb(),c.Mb(),c.Nb(55,"li"),c.Nb(56,"a",28,29),c.Vb("click",(function(){c.hc(a);var e=c.gc(57);return t.changeColor("purple-dark",e)})),c.lc(58,"11"),c.Mb(),c.Mb(),c.Nb(59,"li"),c.Nb(60,"a",30,31),c.Vb("click",(function(){c.hc(a);var e=c.gc(61);return t.changeColor("megna-dark",e)})),c.lc(62,"12"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}},encapsulation:2}),ie),fe=[{path:"",component:I,canActivate:[(ce=function(){function e(t,a){_classCallCheck(this,e),this.authApiService=t,this.router=a}return _createClass(e,[{key:"canActivate",value:function(){var e=this.authApiService.isLoggedIn();return e||this.router.navigate(["/auth"]),e}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(c.Rb(l.a),c.Rb(o.c))},ce.\u0275prov=c.Gb({token:ce,factory:ce.\u0275fac,providedIn:"root"}),ce)],children:[{path:"bienvenido",component:L,data:{titulo:"Bienvenido"}},{path:"perfil",component:R,data:{titulo:"Perfil"}},{path:"configuracion",component:de,data:{titulo:"Configuraci\xf3n"}},{path:"tareas",component:Q,data:{titulo:"Tareas"}},{path:"tarea/:id",component:be,data:{titulo:"Tarea"}},{path:"",redirectTo:"/bienvenido",pathMatch:"full"}]}],pe=((le=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:le}),le.\u0275inj=c.Hb({factory:function(e){return new(e||le)},imports:[[o.g.forChild(fe)],o.g]}),le),he=((se=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:se}),se.\u0275inj=c.Hb({factory:function(e){return new(e||se)},imports:[[n.b,o.g]]}),se);a.d(t,"PagesModule",(function(){return ve}));var me,ve=((me=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:me}),me.\u0275inj=c.Hb({factory:function(e){return new(e||me)},imports:[[n.b,he,_.c,pe]]}),me)}}]);