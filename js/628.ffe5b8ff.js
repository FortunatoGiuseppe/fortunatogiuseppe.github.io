(globalThis["webpackChunktamponati_client"]=globalThis["webpackChunktamponati_client"]||[]).push([[628],{3245:(e,a,o)=>{"use strict";o.d(a,{Z:()=>i,e:()=>l});var t=o(4562);const i={id:null,nomecompleto:"",tipo:null,cf:"",provincia:"",nome:"",cognome:""},l=(0,t.r8)((()=>(0,t.y$)("vue-tamponati",{...i},sessionStorage)))},8480:(e,a,o)=>{"use strict";o.d(a,{Z:()=>f});var t=o(3673),i=o(8880);function l(e,a,o,l,r,s){const n=(0,t.up)("q-input"),u=(0,t.up)("q-select"),p=(0,t.up)("q-btn"),d=(0,t.up)("q-stepper-navigation"),m=(0,t.up)("q-step"),c=(0,t.up)("q-stepper"),v=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(v,{onSubmit:(0,i.iM)(e.saveForm,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{modelValue:e.step,"onUpdate:modelValue":a[13]||(a[13]=a=>e.step=a),vertical:"",color:"primary",animated:"",class:"q-mx-auto q-py-lg",style:{width:"30rem","max-width":"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:1,title:"Anagrafica",done:e.step>1},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:e.register.nome,"onUpdate:modelValue":a[1]||(a[1]=a=>e.register.nome=a),outlined:"",label:"Nome Laboratorio",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:e.register.indirizzo,"onUpdate:modelValue":a[2]||(a[2]=a=>e.register.indirizzo=a),outlined:"",label:"Indirizzo, numero",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:e.register.piva,"onUpdate:modelValue":a[3]||(a[3]=a=>e.register.piva=a),outlined:"",label:"Partita IVA",mask:"###########",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(u,{modelValue:e.register.provincia,"onUpdate:modelValue":a[4]||(a[4]=a=>e.register.provincia=a),outlined:"","emit-value":"","map-options":"",options:e.optionsProvince,label:"Provincia",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","options","rules"]),(0,t.Wm)(n,{modelValue:e.register.citta,"onUpdate:modelValue":a[5]||(a[5]=a=>e.register.citta=a),outlined:"",label:"Comune",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:e.register.cap,"onUpdate:modelValue":a[6]||(a[6]=a=>e.register.cap=a),outlined:"",label:"CAP",mask:"#####",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[e.dati?((0,t.wg)(),(0,t.j4)(p,{key:0,type:"submit",color:"primary",label:"Aggiorna Profilo"})):((0,t.wg)(),(0,t.j4)(p,{key:1,color:"primary",label:"Continua",onClick:a[7]||(a[7]=a=>e.step=2)}))])),_:1})])),_:1},8,["done"]),e.dati?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(m,{key:0,name:2,title:"Email e Password",done:e.step>2},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:e.register.email,"onUpdate:modelValue":a[8]||(a[8]=a=>e.register.email=a),outlined:"",label:"Email",type:"email",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:e.register.password,"onUpdate:modelValue":a[9]||(a[9]=a=>e.register.password=a),outlined:"",type:"password",label:"Password",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:e.register.password2,"onUpdate:modelValue":a[10]||(a[10]=a=>e.register.password2=a),outlined:"",type:"password",label:"Conferma password",rules:[e=>!!e||"Campo Richiesto"]},null,8,["modelValue","rules"]),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{type:"submit",color:"primary",label:"Registrati",onClick:a[11]||(a[11]=a=>e.step=2)}),(0,t.Wm)(p,{flat:"",color:"primary",label:"Indietro",class:"q-ml-sm",onClick:a[12]||(a[12]=a=>e.step=1)})])),_:1})])),_:1},8,["done"]))])),_:1},8,["modelValue"])])),_:1},8,["onSubmit"])}var r=o(1959),s=o(8825),n=o(2490),u=o(9582);const p=(0,t.aZ)({name:"RegisterLaboratorio",props:{dati:{type:Object,default:null}},setup(e){const a=(0,u.tv)(),o=(0,s.Z)(),t=(0,r.iH)({}),i=(0,r.iH)([]);n.db.collection("province").get().then((e=>{const a=[];e.forEach((e=>{a.push(e.data())})),i.value=a})),e.dati&&(t.value={...e.dati});const l=async()=>{if(t.value.password==t.value.password2)try{const e=await n.auth.createUserWithEmailAndPassword(t.value.email,t.value.password),i=e.user;await n.db.collection("users").doc(i.uid).set({tipo_utente:4,nome:t.value.nome,piva:t.value.piva,indirizzo:t.value.indirizzo,provincia:t.value.provincia,citta:t.value.citta,cap:t.value.cap,email:i.email,uid:i.uid,approvato:!1}),a.push("/"),o.notify({type:"positive",position:"top",message:"Richiesta di convenzione inviata!",forever:!0})}catch(e){o.notify({type:"negative",position:"top",message:"Laboratorio già registrato!"}),console.log(e)}else o.notify({type:"negative",position:"top",message:"Attenzione le password inserite non coincidono!"})},p=async()=>{try{await n.db.collection("users").doc(t.value.uid).update({tipo_utente:4,nome:t.value.nome,piva:t.value.piva,indirizzo:t.value.indirizzo,provincia:t.value.provincia,citta:t.value.citta,cap:t.value.cap,approvato:!1}),o.notify({type:"positive",position:"top",message:"Anagrafica Aggiornata!"})}catch(e){o.notify({type:"negative",position:"top",message:"Errore salvataggio dati!"}),console.log(e)}},d=()=>{e.dati?p():l()};return{step:(0,r.iH)(1),saveForm:d,register:t,optionsProvince:i}}});var d=o(8689),m=o(3518),c=o(4340),v=o(4842),g=o(8516),b=o(118),w=o(8240),y=o(7518),V=o.n(y);p.render=l;const f=p;V()(p,"components",{QForm:d.Z,QStepper:m.Z,QStep:c.Z,QInput:v.Z,QSelect:g.Z,QStepperNavigation:b.Z,QBtn:w.Z})},1628:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>y});var t=o(3673);const i={class:"text-center",style:{"font-size":"1.2rem"}},l=(0,t.Wm)("br",null,null,-1),r=(0,t.Uk)("Laboratorio");function s(e,a,o,s,n,u){const p=(0,t.up)("q-icon"),d=(0,t.up)("q-separator"),m=(0,t.up)("register-laboratorio"),c=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(c,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)("div",i,[(0,t.Wm)(p,{name:"biotech",size:"md"}),l,r]),(0,t.Wm)(d),(0,t.Wm)(m,{dati:e.dati,class:"q-mt-md"},null,8,["dati"])])),_:1})}var n=o(8480),u=o(1959),p=o(2490),d=o(3245);const m=(0,t.aZ)({name:"RegisterPage",components:{RegisterLaboratorio:n.Z},setup(){const e=(0,u.iH)({}),a=(0,d.e)();return p.db.collection("users").doc(a.value.id).get().then((a=>{a.exists&&(e.value=a.data())})),{dati:e}}});var c=o(4379),v=o(4554),g=o(5869),b=o(7518),w=o.n(b);m.render=s;const y=m;w()(m,"components",{QPage:c.Z,QIcon:v.Z,QSeparator:g.Z})}}]);