(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tEjo:function(t,e,r){"use strict";r.r(e),r.d(e,"SkolaModule",(function(){return y}));var a=r("ofXK"),i=r("tyNb"),s=r("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-details"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Kb(0,"p"),s.bc(1,"details works!"),s.Jb())},styles:[""]}),t})();var n=r("3Pt+"),l=r("tk/3"),c=r("z6cu"),b=r("JIr8");let d=(()=>{class t{constructor(t){this.httpClient=t,this.apiServer="/api",this.httpOptions={headers:new l.c({"Content-Type":"application/json"})}}create(t){return this.httpClient.post(this.apiServer+"/skola",JSON.stringify(t),this.httpOptions)}getById(t){return this.httpClient.get(this.apiServer+"/skola/"+t).pipe(Object(b.a)(this.errorHandler))}getAll(){return this.httpClient.get(this.apiServer+"/skola").pipe(Object(b.a)(this.errorHandler))}update(t,e){return this.httpClient.put(this.apiServer+"/skola/"+t,JSON.stringify(e),this.httpOptions)}delete(t){return this.httpClient.delete(this.apiServer+"/skola/"+t,this.httpOptions).pipe(Object(b.a)(this.errorHandler))}errorHandler(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,Object(c.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(l.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,e){if(1&t&&(s.Kb(0,"div",12),s.Kb(1,"small"),s.bc(2),s.Jb(),s.Jb()),2&t){const t=s.Tb();s.xb(2),s.cc(t.errors.naziv)}}function u(t,e){1&t&&(s.Kb(0,"button",13),s.bc(1,"Submit"),s.Jb())}function h(t,e){1&t&&(s.Kb(0,"button",14),s.bc(1,"Delete"),s.Jb())}const m=function(t){return{"is-invalid":t}};let f=(()=>{class t{constructor(t,e,r,a){this.fb=t,this.router=e,this.activatedRoute=r,this.skolaService=a,this.skola={id:null,naziv:""},this.errors=[],this.action=""}ngOnInit(){this.action=this.activatedRoute.snapshot.url[0].path,this.activatedRoute.snapshot.url[1]&&this.skolaService.getById(this.activatedRoute.snapshot.url[1].path).subscribe(t=>{this.skola=t}),this.skolaForm=this.fb.group({naziv:[""]})}submitForm(){switch(this.action){case"create":this.skolaService.create(this.skolaForm.value).subscribe({next:t=>{this.router.navigateByUrl("/skole/home")},error:t=>{this.errors=t.error.errors}});break;case"update":this.skolaService.update(this.skola.id,this.skolaForm.value).subscribe({next:t=>{this.router.navigateByUrl("/skole/home")},error:t=>{this.errors=t.error.errors}});break;case"delete":this.skolaService.delete(this.skola.id).subscribe({next:t=>{this.router.navigateByUrl("/skole/home")},error:t=>{this.errors=t.error.errors}})}}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(n.b),s.Hb(i.c),s.Hb(i.a),s.Hb(d))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-form"]],decls:14,vars:8,consts:[[1,"card","card-primary"],[1,"card-header"],[1,"card-title"],["novalidate","",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","placeholder","Naziv","formControlName","naziv",1,"form-control","form-control-border",3,"ngClass","ngModel"],["class","text-danger",4,"ngIf"],[1,"card-footer"],["type","submit","class","btn btn-primary",4,"ngIf"],["type","submit","class","btn btn-danger",4,"ngIf"],[1,"text-danger"],["type","submit",1,"btn","btn-primary"],["type","submit",1,"btn","btn-danger"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"h3",2),s.bc(3,"\u0160kola"),s.Jb(),s.Jb(),s.Kb(4,"form",3),s.Rb("ngSubmit",(function(){return e.submitForm()})),s.Kb(5,"div",4),s.Kb(6,"div",5),s.Kb(7,"label",6),s.bc(8,"Naziv"),s.Jb(),s.Ib(9,"input",7),s.Jb(),s.ac(10,p,3,1,"div",8),s.Jb(),s.Kb(11,"div",9),s.ac(12,u,2,0,"button",10),s.ac(13,h,2,0,"button",11),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(4),s.Ub("formGroup",e.skolaForm),s.xb(5),s.Ub("ngClass",s.Vb(6,m,e.errors.naziv))("ngModel",e.skola.naziv),s.xb(1),s.Ub("ngIf",e.errors.naziv),s.xb(2),s.Ub("ngIf","delete"!=e.action),s.xb(1),s.Ub("ngIf","delete"==e.action))},directives:[n.n,n.h,n.d,n.a,n.g,n.c,a.h,a.j],styles:[""]}),t})();const v=["dataTableSkole"],k=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(t,e){this.skolaService=t,this.router=e,this.mesta=[]}ngOnInit(){}ngAfterViewInit(){const t=this;this.dataTable=$(this.table.nativeElement),this.dataTable.DataTable({ajax:(t,e)=>{this.skolaService.getAll().subscribe(t=>{e({recordsTotal:t.recordsTotal,recordsFiltered:t.recordsFiltered,data:t.data})})},responsive:!0,autoWidth:!1,buttons:{buttons:[{text:'<i class="fas fa-plus"></i>',action:function(e,r,a,i){t.router.navigateByUrl("/skole/create")},className:"btn btn-primary"},"copy","csv","excel",{extend:"pdfHtml5",text:"Export PDF",orientation:"landscape",customize:function(t){var e=new Array;$("#datatable_skole").find("tbody tr:first-child td").each((function(){if($(this).attr("colspan"))for(var t=1;t<=$(this).attr("colspan");t++)e.push("*");else e.push("*")})),t.content[1].table.widths=e}},"print","colvis"],dom:{button:{className:"btn"}}},dom:"Bfrtip",columns:[{title:"ID",data:"id",name:"id"},{title:"Naziv",data:"naziv",name:"naziv"},{title:"Akcije",data:"action",name:"action",width:"10%"}],drawCallback:function(){$(".btnEditSkola").on("click",(function(){t.router.navigateByUrl("/skole/update/"+$(this).data("id"))})),$(".btnRemoveSkola").on("click",(function(){t.router.navigateByUrl("/skole/delete/"+$(this).data("id"))}))}}).buttons().container().appendTo("#datatable_skole_wrapper .col-md-6:eq(0)")}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(d),s.Hb(i.c))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-index"]],viewQuery:function(t,e){var r;1&t&&s.dc(v,!0),2&t&&s.Wb(r=s.Sb())&&(e.table=r.first)},decls:3,vars:0,consts:[["id","datatable_skole",1,"table","table-bordered","table-striped","table-sm"],["dataTableSkole",""]],template:function(t,e){1&t&&(s.Kb(0,"div"),s.Ib(1,"table",0,1),s.Jb())},styles:[""]}),t})()},{path:"details/:id",component:o},{path:"create",component:f},{path:"update/:id",component:f},{path:"delete/:id",component:f}];let g=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(k)],i.g]}),t})(),y=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[a.b,g,l.b,n.e,n.k]]}),t})()}}]);