import{t as r,a}from"./template-CpP-dHjg.js";import{p as w,f as C,n as L,s as o,c as W,a as D}from"./context-D5nTpIIo.js";import{i as y,s as I}from"./props-6Of600Nu.js";import{c as E,d as M}from"./create-runtime-stories-oYOfRsve.js";import{T as s}from"./text-field-FIYmz12Y.js";import"./index-CfOrKyLd.js";import"./slot-CgV10kGK.js";import"./attributes-BTwVEwNN.js";import"./attributes-Co-1QMVx.js";import"./class-Dzh9Da8g.js";import"./style-CcY6orqc.js";import"./this-BtY6O8e7.js";import"./index-client-Bg2Xcmq9.js";import"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./form-item-CmGXL8a-.js";const S=(c,v=L)=>{s(c,I(v,{placeholder:"Placeholder..."}))},A={title:"AURA/Text Field",component:s,tags:["autodocs"],argTypes:{}},{Story:d}=M();var N=r('<span slot="errors">Something went wrong here!</span>'),R=r('<span slot="label">Label</span>'),k=r('<span slot="label">Label</span>'),O=r('<span slot="label">Full Width</span>'),U=r('<span slot="label">Normal width</span>'),j=r('<div style="display: flex; gap: 1rem;"><!> <!></div>'),q=r('<span slot="label">Label</span>'),z=r("<!> <!> <!> <!> <!> <!> <!>",1);function b(c,v){w(v,!1),y();var m=z(),f=C(m);d(f,{name:"Default input",template:S,tags:["svelte-csf-v4"],parameters:{__svelteCsf:{rawCode:'<TextField {...args} placeholder="Placeholder..." />'}}});var _=o(f,2);d(_,{name:"Disabled input",tags:["svelte-csf-v4"],children:(e,p)=>{s(e,{disabled:!0,placeholder:"Placeholder..."})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
  <TextField disabled={true} placeholder="Placeholder..." />
</TextField>`}}});var $=o(_,2);d($,{name:"Error'd input",tags:["svelte-csf-v4"],children:(e,p)=>{s(e,{placeholder:"Placeholder...",showErrors:!0,$$slots:{errors:(l,i)=>{var t=N();a(l,t)}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
   <TextField placeholder="Placeholder..." showErrors>
<span slot="errors">Something went wrong here!</span>
</TextField>
 </TextField>`}}});var x=o($,2);d(x,{name:"Label",tags:["svelte-csf-v4"],children:(e,p)=>{s(e,{placeholder:"Placeholder...",$$slots:{label:(l,i)=>{var t=R();a(l,t)}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
   <TextField placeholder="Placeholder...">
<span slot="label">Label</span>
</TextField>
 </TextField>`}}});var F=o(x,2);d(F,{name:"Fixed Width",tags:["svelte-csf-v4"],children:(e,p)=>{s(e,{width:"100%",placeholder:"Placeholder...",$$slots:{label:(l,i)=>{var t=k();a(l,t)}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
   <TextField width="100%" placeholder="Placeholder...">
<span slot="label">Label</span>
</TextField>
 </TextField>`}}});var g=o(F,2);d(g,{name:"Full Width",tags:["svelte-csf-v4"],children:(e,p)=>{var l=j(),i=W(l);s(i,{fullWidth:!0,placeholder:"Placeholder...",$$slots:{label:(h,P)=>{var u=O();a(h,u)}}});var t=o(i,2);s(t,{placeholder:"Placeholder...",$$slots:{label:(h,P)=>{var u=U();a(h,u)}}}),a(e,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
   <div style="display: flex; gap: 1rem;">
<TextField fullWidth placeholder="Placeholder...">
	<span slot="label">Full Width</span>
</TextField>
<TextField placeholder="Placeholder...">
	<span slot="label">Normal width</span>
</TextField>
</div>
 </TextField>`}}});var T=o(g,2);d(T,{name:"Multi Line",tags:["svelte-csf-v4"],children:(e,p)=>{s(e,{height:"100px",value:"Test multiline input",type:"multi",placeholder:"Placeholder...",$$slots:{label:(l,i)=>{var t=q();a(l,t)}}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<TextField {...args}>
   <TextField height="100px" value="Test multiline input" type="multi" placeholder="Placeholder...">
<span slot="label">Label</span>
</TextField>
 </TextField>`}}}),a(c,m),D()}b.__docgen={version:3,name:"text-field.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const n=E(b,A),oe=["DefaultInput","DisabledInput","ErrorDInput","Label","FixedWidth","FullWidth","MultiLine"],de={...n.DefaultInput,tags:["svelte-csf-v4"]},ne={...n.DisabledInput,tags:["svelte-csf-v4"]},ie={...n.ErrorDInput,tags:["svelte-csf-v4"]},pe={...n.Label,tags:["svelte-csf-v4"]},ce={...n.FixedWidth,tags:["svelte-csf-v4"]},ve={...n.FullWidth,tags:["svelte-csf-v4"]},he={...n.MultiLine,tags:["svelte-csf-v4"]};export{de as DefaultInput,ne as DisabledInput,ie as ErrorDInput,ce as FixedWidth,ve as FullWidth,pe as Label,he as MultiLine,oe as __namedExportsOrder,A as default};
