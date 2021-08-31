(globalThis["webpackChunktamponati_client"]=globalThis["webpackChunktamponati_client"]||[]).push([[64],{3245:(e,a,l)=>{"use strict";l.d(a,{Z:()=>o,e:()=>t});var i=l(4562);const o={id:null,nomecompleto:"",tipo:null,cf:"",provincia:"",nome:"",cognome:""},t=(0,i.r8)((()=>(0,i.y$)("vue-tamponati",{...o},sessionStorage)))},2120:(e,a,l)=>{"use strict";l.d(a,{Z:()=>z});var i=l(3673),o=l(8880);function t(e,a,l,t,s,n){const r=(0,i.up)("q-input"),m=(0,i.up)("q-select"),d=(0,i.up)("q-btn"),u=(0,i.up)("q-stepper-navigation"),p=(0,i.up)("q-step"),c=(0,i.up)("q-stepper"),g=(0,i.up)("q-form");return(0,i.wg)(),(0,i.j4)(g,{onSubmit:(0,o.iM)(e.saveForm,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{modelValue:e.step,"onUpdate:modelValue":a[13]||(a[13]=a=>e.step=a),vertical:"",color:"primary",animated:"",class:"q-mx-auto q-py-lg",style:{width:"30rem","max-width":"100%"}},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{name:1,title:"Anagrafica",done:e.step>1},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:e.register.nome,"onUpdate:modelValue":a[1]||(a[1]=a=>e.register.nome=a),outlined:"",label:"Nome Laboratorio",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(r,{modelValue:e.register.indirizzo,"onUpdate:modelValue":a[2]||(a[2]=a=>e.register.indirizzo=a),outlined:"",label:"Indirizzo, numero",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(r,{modelValue:e.register.piva,"onUpdate:modelValue":a[3]||(a[3]=a=>e.register.piva=a),outlined:"",label:"Partita IVA",mask:"###########",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(m,{modelValue:e.register.provincia,"onUpdate:modelValue":a[4]||(a[4]=a=>e.register.provincia=a),outlined:"","emit-value":"","map-options":"",options:e.optionsProvince,label:"Provincia",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","options","rules"]),(0,i.Wm)(r,{modelValue:e.register.citta,"onUpdate:modelValue":a[5]||(a[5]=a=>e.register.citta=a),outlined:"",label:"Comune",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(r,{modelValue:e.register.cap,"onUpdate:modelValue":a[6]||(a[6]=a=>e.register.cap=a),outlined:"",label:"CAP",mask:"#####",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[e.dati?((0,i.wg)(),(0,i.j4)(d,{key:0,type:"submit",color:"primary",label:"Aggiorna Profilo"})):((0,i.wg)(),(0,i.j4)(d,{key:1,color:"primary",label:"Continua",onClick:a[7]||(a[7]=a=>e.step=2)}))])),_:1})])),_:1},8,["done"]),e.dati?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:0,name:2,title:"Email e Password",done:e.step>2},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:e.register.email,"onUpdate:modelValue":a[8]||(a[8]=a=>e.register.email=a),outlined:"",label:"Email",type:"email",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(r,{modelValue:e.register.password,"onUpdate:modelValue":a[9]||(a[9]=a=>e.register.password=a),outlined:"",type:"password",label:"Password",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(r,{modelValue:e.register.password2,"onUpdate:modelValue":a[10]||(a[10]=a=>e.register.password2=a),outlined:"",type:"password",label:"Conferma password",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{type:"submit",color:"primary",label:"Registrati",onClick:a[11]||(a[11]=a=>e.step=2)}),(0,i.Wm)(d,{flat:"",color:"primary",label:"Indietro",class:"q-ml-sm",onClick:a[12]||(a[12]=a=>e.step=1)})])),_:1})])),_:1},8,["done"]))])),_:1},8,["modelValue"])])),_:1},8,["onSubmit"])}var s=l(1959),n=l(8825),r=l(2490),m=l(9582);const d=(0,i.aZ)({name:"RegisterLaboratorio",props:{dati:{type:Object,default:null}},setup(e){const a=(0,m.tv)(),l=(0,n.Z)(),i=(0,s.iH)({}),o=(0,s.iH)([]);r.db.collection("province").get().then((e=>{const a=[];e.forEach((e=>{a.push(e.data())})),o.value=a})),e.dati&&(i.value={...e.dati});const t=async()=>{if(i.value.password==i.value.password2)try{const e=await r.auth.createUserWithEmailAndPassword(i.value.email,i.value.password),o=e.user;await r.db.collection("users").doc(o.uid).set({tipo_utente:4,nome:i.value.nome,piva:i.value.piva,indirizzo:i.value.indirizzo,provincia:i.value.provincia,citta:i.value.citta,cap:i.value.cap,email:o.email,uid:o.uid,approvato:null}),a.push("/"),l.notify({type:"positive",position:"top",message:"Richiesta di convenzione inviata!",forever:!0})}catch(e){l.notify({type:"negative",position:"top",message:"Laboratorio già registrato!"}),console.log(e)}else l.notify({type:"negative",position:"top",message:"Attenzione le password inserite non coincidono!"})},d=()=>{e.dati?updateDB():t()};return{step:(0,s.iH)(1),saveForm:d,register:i,optionsProvince:o}}});var u=l(8689),p=l(3518),c=l(4340),g=l(4842),b=l(8516),f=l(118),v=l(8240),w=l(7518),h=l.n(w);d.render=t;const z=d;h()(d,"components",{QForm:u.Z,QStepper:p.Z,QStep:c.Z,QInput:g.Z,QSelect:b.Z,QStepperNavigation:f.Z,QBtn:v.Z})},5599:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>R});var i=l(3673),o=l(2323);const t=(0,i.Uk)("Minimize"),s=(0,i.Uk)("Maximize"),n=(0,i.Uk)("Close"),r=(0,i.Wm)("div",{class:"text-h4"},"Questionari anamnesi",-1),m={class:"col"},d={class:"q-pa-sd"},u=(0,i.Wm)("div",{class:"text-h7 text-weight-bold"},"Mostra filtri:",-1);function p(e,a,l,p,c,g){const b=(0,i.up)("q-space"),f=(0,i.up)("q-tooltip"),v=(0,i.up)("q-btn"),w=(0,i.up)("q-bar"),h=(0,i.up)("q-card-section"),z=(0,i.up)("q-icon"),y=(0,i.up)("q-th"),V=(0,i.up)("q-toggle"),W=(0,i.up)("q-select"),k=(0,i.up)("q-table"),q=(0,i.up)("q-card"),Z=(0,i.up)("q-dialog"),_=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(Z,{ref:"dialogRef",modelValue:e.dialog,"onUpdate:modelValue":a[6]||(a[6]=a=>e.dialog=a),maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down",onHide:e.onDialogHide},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{class:"bg-primary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b),(0,i.Wm)(v,{dense:"",flat:"",icon:"minimize",disable:!e.maximizedToggle,onClick:a[1]||(a[1]=a=>e.maximizedToggle=!1)},{default:(0,i.w5)((()=>[e.maximizedToggle?((0,i.wg)(),(0,i.j4)(f,{key:0,class:"bg-white text-primary"},{default:(0,i.w5)((()=>[t])),_:1})):(0,i.kq)("",!0)])),_:1},8,["disable"]),(0,i.Wm)(v,{dense:"",flat:"",icon:"crop_square",disable:e.maximizedToggle,onClick:a[2]||(a[2]=a=>e.maximizedToggle=!0)},{default:(0,i.w5)((()=>[e.maximizedToggle?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(f,{key:0,class:"bg-white text-primary"},{default:(0,i.w5)((()=>[s])),_:1}))])),_:1},8,["disable"]),(0,i.wy)((0,i.Wm)(v,{dense:"",flat:"",icon:"close"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{class:"bg-white text-primary"},{default:(0,i.w5)((()=>[n])),_:1})])),_:1},512),[[_]])])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(h,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)("div",m,[(0,i.Wm)("div",d,[(0,i.Wm)(k,{id:"tabellaAgenda","hide-header":"grid"===e.mode,title:"Prenotazioni:",rows:e.prenotazioni,columns:e.colonne,"rows-per-page-options":[0],"row-key":"id",grid:"grid"==e.mode,"visible-columns":e.visibleColumns},{"header-cell-codicefiscale":(0,i.w5)((e=>[(0,i.Wm)(y,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{name:"badge",size:"2em"}),(0,i.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),"header-cell-data":(0,i.w5)((e=>[(0,i.Wm)(y,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{name:"history",size:"2em"}),(0,i.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),"header-cell-malato":(0,i.w5)((e=>[(0,i.Wm)(y,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{name:"sick",size:"2em"}),(0,i.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),"header-cell-febbre":(0,i.w5)((e=>[(0,i.Wm)(y,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{name:"thermostat",size:"2em"}),(0,i.Uk)(" "+(0,o.zw)(e.col.label),1)])),_:2},1032,["props"])])),top:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"absolute-right q-mr-sm",flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on",onClick:a[3]||(a[3]=a=>e.mode="grid"===e.mode?"list":"grid")},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(f,{disable:e.$q.platform.is.mobile},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)("grid"===e.mode?"List":"Grid"),1)])),_:1},8,["disable"]),[[_]])])),_:1},8,["icon"]),u,(0,i.Wm)(V,{modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=a=>e.value=a),color:"primary","keep-color":"",class:"q-pr-xl"},null,8,["modelValue"]),1==e.value?((0,i.wg)(),(0,i.j4)(W,{key:0,modelValue:e.visibleColumns,"onUpdate:modelValue":a[5]||(a[5]=a=>e.visibleColumns=a),label:"Seleziona campi tabella",multiple:"",outlined:"",dense:"","use-chips":"",color:"primary","options-dense":"","display-value":e.$q.lang.table.columns,"emit-value":"","map-options":"",options:e.colonne,"option-value":"name","options-cover":"",style:{"min-width":"150px"}},null,8,["modelValue","display-value","options"])):(0,i.kq)("",!0)])),_:1},8,["hide-header","rows","columns","grid","visible-columns"])])])])),_:1})])),_:1})])),_:1},8,["modelValue","maximized","onHide"])}var c=l(1959),g=l(1701),b=l(5616),f=l(2490),v=l(3245);const w=(0,i.aZ)({name:"VisualizzaQuestionari",emits:[...g.Z.emits],setup(){const{dialogRef:e,onDialogOK:a,onDialogHide:l}=(0,g.Z)(),i=(0,v.e)(),o=(0,c.iH)([]),t=[{name:"data",label:"Data",field:"data",align:"left",sortable:!0,sort:(e,a)=>b.ZP.extractDate(e,"DD/MM/YYYY")-b.ZP.extractDate(a,"DD/MM/YYYY")},{name:"codicefiscale",label:"codice fiscale",field:"codicefiscale",sortable:!0,align:"left"},{name:"cognome",label:"cognome",field:"cognome",sortable:!0,align:"left"},{name:"nome",label:"nome",field:"nome",sortable:!0,align:"left"},{name:"malato",label:"è malato?",field:"malato",sortable:!0,align:"left"},{name:"febbre",label:"ha febbre?",field:"febbre",sortable:!0,align:"left"},{name:"allergie",label:"possiede allergie?",field:"allergie",sortable:!0,align:"left"},{name:"specificaAllergie",label:"specifica delle allergie",field:"specificaAllergie",sortable:!0,align:"left"},{name:"malattieGravi",label:"soffre di malattie gravi?",field:"malattieGravi",sortable:!0,align:"left"},{name:"compromissioniSistema",label:"presenta compromissioni del sistema immunitario?",field:"compromissioniSistema",sortable:!0,align:"left"}];return f.db.collection("prenotazioni").where("id_laboratorio","==",i.value.id).where("confermato","==",1).get().then((e=>{e.forEach((e=>{const a={id:e.id,data:b.ZP.formatDate(e.data().data.toDate(),"DD/MM/YYYY"),codicefiscale:e.data().codicefiscale,nome:e.data().nome,cognome:e.data().cognome,tipotampone:e.data().tipotampone,malato:e.data().malato,febbre:e.data().febbre,allergie:e.data().allergie,specificaAllergie:e.data().specificaAllergie,malattieGravi:e.data().malattieGravi,compromissioniSistema:e.data().compromissioniSistema,assunzioneFarmaci:e.data().assunzioneFarmaci};1==e.data().malato?a.malato="si":0==e.data().malato?a.malato="no":a.malato="non lo so",1==e.data().febbre?a.febbre="si":0==e.data().febbre?a.febbre="no":a.febbre="non lo so",1==e.data().allergie?a.allergie="si":0==e.data().allergie?a.allergie="no":a.allergie="non lo so",1==e.data().malattieGravi?a.malattieGravi="si":0==e.data().allergie?a.malattieGravi="no":a.malattieGravi="non lo so",1==e.data().compromissioniSistema?a.compromissioniSistema="si":0==e.data().allergie?a.compromissioniSistema="no":a.compromissioniSistema="non lo so",1==e.data().assunzioneFarmaci?a.assunzioneFarmaci="si":0==e.data().allergie?a.assunzioneFarmaci="no":a.assunzioneFarmaci="non lo so",o.value.push(a)}))})),{dialog:(0,c.iH)(!1),maximizedToggle:(0,c.iH)(!0),dialogRef:e,onDialogOK:a,onDialogHide:l,visibleColumns:(0,c.iH)(["codicefiscale","data","malato","febbre","allergie","malattieGravi","compromissioniSistema","assunzioneFarmaci"]),colonne:t,prenotazioni:o,value:(0,c.iH)(!1),mode:(0,c.iH)("grid")}}});var h=l(6778),z=l(151),y=l(846),V=l(2025),W=l(8240),k=l(5363),q=l(5589),Z=l(4993),_=l(2414),C=l(4554),x=l(8886),Q=l(8516),U=l(677),S=l(7518),D=l.n(S);w.render=p;const R=w;D()(w,"components",{QDialog:h.Z,QCard:z.Z,QBar:y.Z,QSpace:V.Z,QBtn:W.Z,QTooltip:k.Z,QCardSection:q.Z,QTable:Z.Z,QTh:_.Z,QIcon:C.Z,QToggle:x.Z,QSelect:Q.Z}),D()(w,"directives",{ClosePopup:U.Z})}}]);