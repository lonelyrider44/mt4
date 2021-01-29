(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{raXi:function(t,e,r){"use strict";r.r(e),r.d(e,"CrudModule",(function(){return m}));var o=r("ofXK"),n=r("tk/3"),c=r("3Pt+"),b=r("tyNb"),i=r("fXoL"),s=r("z6cu"),p=r("JIr8");let u=(()=>{class t{constructor(t){this.httpClient=t,this.apiServer="http://localhost:3000",this.httpOptions={headers:new n.d({"Content-Type":"application/json"})}}create(t){return this.httpClient.post(this.apiServer+"/products/",JSON.stringify(t),this.httpOptions).pipe(Object(p.a)(this.errorHandler))}getById(t){return this.httpClient.get(this.apiServer+"/products/"+t).pipe(Object(p.a)(this.errorHandler))}getAll(){return this.httpClient.get(this.apiServer+"/products/").pipe(Object(p.a)(this.errorHandler))}update(t,e){return this.httpClient.put(this.apiServer+"/products/"+t,JSON.stringify(e),this.httpOptions).pipe(Object(p.a)(this.errorHandler))}delete(t){return this.httpClient.delete(this.apiServer+"/products/"+t,this.httpOptions).pipe(Object(p.a)(this.errorHandler))}errorHandler(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(e),Object(s.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(n.b))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const a=function(t){return["/crud/update/",t]};function d(t,e){if(1&t){const t=i.Lb();i.Kb(0,"tr"),i.Kb(1,"td"),i.bc(2),i.Jb(),i.Kb(3,"td"),i.bc(4),i.Jb(),i.Kb(5,"td"),i.bc(6),i.Jb(),i.Kb(7,"td"),i.bc(8),i.Jb(),i.Kb(9,"td"),i.Kb(10,"button",2),i.bc(11,"Update"),i.Jb(),i.Kb(12,"button",3),i.Rb("click",(function(){i.Xb(t);const r=e.$implicit;return i.Tb().crudService.delete(r.id)})),i.bc(13,"Remove"),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=e.$implicit;i.xb(2),i.cc(t.id),i.xb(2),i.cc(t.name),i.xb(2),i.cc(t.description),i.xb(2),i.cc(t.quantity),i.xb(2),i.Ub("routerLink",i.Vb(5,a,t.id))}}const l=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(t,e){this.crudService=t,this.router=e,this.products=[]}ngOnInit(){this.crudService.getAll().subscribe(t=>{console.log(t),this.products=t})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(u),i.Hb(b.f))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-home"]],decls:22,vars:1,consts:[["type","button","routerLink","/lazy/create/"],[4,"ngFor","ngForOf"],["type","button",3,"routerLink"],["type","button",3,"click"]],template:function(t,e){1&t&&(i.Kb(0,"div"),i.Kb(1,"h1"),i.bc(2,"My Products"),i.Jb(),i.Kb(3,"button",0),i.bc(4,"Create new product"),i.Jb(),i.Kb(5,"table"),i.Kb(6,"thead"),i.Kb(7,"tr"),i.Kb(8,"th"),i.bc(9,"#"),i.Jb(),i.Kb(10,"th"),i.bc(11,"Product Name"),i.Jb(),i.Kb(12,"th"),i.bc(13,"Description"),i.Jb(),i.Kb(14,"th"),i.bc(15,"Price"),i.Jb(),i.Kb(16,"th"),i.bc(17,"Quantity"),i.Jb(),i.Kb(18,"th"),i.bc(19,"Action"),i.Jb(),i.Jb(),i.Jb(),i.Kb(20,"tbody"),i.ac(21,d,14,7,"tr",1),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(21),i.Ub("ngForOf",e.products))},directives:[b.g,o.i],styles:[""]}),t})()},{path:"details/:productId",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-details"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Kb(0,"p"),i.bc(1,"details works!"),i.Jb())},styles:[""]}),t})()},{path:"create",component:(()=>{class t{constructor(t,e,r){this.fb=t,this.router=e,this.crudService=r}ngOnInit(){this.productForm=this.fb.group({name:[""],description:[""],price:[""],quantity:[""]})}submitForm(){this.crudService.create(this.productForm.value).subscribe(t=>{console.log("Product created!"),this.router.navigateByUrl("/crud/home/")})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(c.b),i.Hb(b.f),i.Hb(u))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-create"]],decls:22,vars:1,consts:[["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","name","maxlength","20",1,"form-control"],["formControlName","description","rows","3","maxlength","50",1,"form-control"],["type","text","formControlName","price",1,"form-control"],["type","text","formControlName","quantity",1,"form-control"],["type","submit"]],template:function(t,e){1&t&&(i.Kb(0,"div"),i.Kb(1,"h1"),i.bc(2,"Create Product"),i.Jb(),i.Kb(3,"form",0),i.Rb("ngSubmit",(function(){return e.submitForm()})),i.Kb(4,"div",1),i.Kb(5,"label"),i.bc(6,"Name"),i.Jb(),i.Ib(7,"input",2),i.Jb(),i.Kb(8,"div",1),i.Kb(9,"label"),i.bc(10,"Description"),i.Jb(),i.Ib(11,"textarea",3),i.Jb(),i.Kb(12,"div",1),i.Kb(13,"label"),i.bc(14,"Price"),i.Jb(),i.Ib(15,"input",4),i.Jb(),i.Kb(16,"div",1),i.Kb(17,"label"),i.bc(18,"Quantity"),i.Jb(),i.Ib(19,"input",5),i.Jb(),i.Kb(20,"button",6),i.bc(21,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(3),i.Ub("formGroup",e.productForm))},directives:[c.n,c.h,c.d,c.a,c.g,c.c,c.f],styles:[""]}),t})()},{path:"update/:productId",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["app-update"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Kb(0,"p"),i.bc(1,"update works!"),i.Jb())},styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[b.j.forChild(l)],b.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[o.b,h,n.c,c.e,c.k]]}),t})()}}]);