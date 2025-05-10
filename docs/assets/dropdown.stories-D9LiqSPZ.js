import{t as n,a,b as I}from"./template-Dutn6tew.js";import{p as V,f as _,n as W,s as t,c as h,b as L,g as B,m as k,a as z}from"./context-kYMOf6HF.js";import{s}from"./attributes-CJ5rmtxl.js";import{i as A,s as R}from"./props-DrYEKqSu.js";import{c as M,d as T}from"./create-runtime-stories-DEWsKxWs.js";import{D as m}from"./dropdown-hqInU99F.js";import{B as U}from"./button-BcxugdwS.js";import"./attributes-Co-1QMVx.js";import"./class-Dzh9Da8g.js";import"./style-CcY6orqc.js";import"./index-DxHf6ONh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./slot-CgV10kGK.js";import"./this-CAwuPZWO.js";import"./index-client-D584fG04.js";import"./index-DUolvyrz.js";import"./icon-ByRCrE_1.js";import"./float-ChGK669O.js";import"./form-item-Vnm5Ebwr.js";import"./progress-ring-ffZ47qME.js";const j=(C,y=W)=>{var c=H(),x=h(c);m(x,R(y,{children:(D,b)=>{var f=G(),g=_(f);s(g,"value","Option 1");var w=t(g,2);s(w,"value","Option 2"),t(w,2),a(D,f)},$$slots:{default:!0}})),a(C,c)},q={title:"AURA/Dropdown",component:m,tags:["autodocs"],argTypes:{}},{Story:O}=T();var G=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),H=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),J=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),K=n('<span slot="placeholder">Custom placeholder...</span>'),N=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),Q=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),X=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><div style="display: flex; gap: 10px;"><!> <!></div></div>'),Y=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),Z=n(`<span slot="placeholder">Error'd Input...</span>`),oo=n('<span slot="errors">Something went wrong here!</span>'),ao=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),to=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),ro=n('<span slot="label">Label</span>'),no=n('<div style="height: 160px; margin: 0 auto;"><!></div>'),eo=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),po=n('<span slot="label">Label</span>'),io=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),lo=n('<span slot="label">Label</span>'),so=n('<div style="display: flex; gap: 1rem;"><!> <!></div>'),uo=n("<!> <!> <!> <!> <!> <!>",1);function F(C,y){V(y,!1);let c=k("Option 1");A();var x=uo(),D=_(x);O(D,{height:"500px",name:"Default dropdown",template:j,tags:["svelte-csf-v4"],parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; max-width: 400px; margin: 0 auto;">
	<Dropdown {...args}>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
</div>`}}});var b=t(D,2);O(b,{name:"Custom Placeholder",tags:["svelte-csf-v4"],children:(d,P)=>{var l=N(),u=h(l);m(u,{children:(p,i)=>{var o=J(),r=_(o);s(r,"value","Option 1");var e=t(r,2);s(e,"value","Option 2"),t(e,2),a(p,o)},$$slots:{default:!0,placeholder:(p,i)=>{var o=K();a(p,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
   <div style="height: 160px; max-width: 400px; margin: 0 auto;">
<Dropdown>
	<span slot="placeholder">Custom placeholder...</span>
	<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
</Dropdown>
</div>
 </Dropdown>`}}});var f=t(b,2);O(f,{name:"External Value Controls",tags:["svelte-csf-v4"],children:(d,P)=>{var l=X(),u=h(l),p=h(u);m(p,{style:"flex: 1",get currentValue(){return B(c)},$$events:{change:o=>{L(c,o.detail.value)}},children:(o,r)=>{var e=Q(),v=_(e);s(v,"value","Option 1");var E=t(v,2);s(E,"value","Option 2"),t(E,2),a(o,e)},$$slots:{default:!0}});var i=t(p,2);U(i,{size:"small",$$events:{click:()=>L(c,void 0)},children:(o,r)=>{var e=I("Clear");a(o,e)},$$slots:{default:!0}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
   <div style="height: 160px; max-width: 400px; margin: 0 auto;">
<div style="display: flex; gap: 10px;">
	<Dropdown style="flex: 1" on:change={(evt) => {
valueForControlsStory = evt.detail.value;
}} currentValue={valueForControlsStory}>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
	<Button size="small" on:click={() => valueForControlsStory = undefined}>Clear</Button>
</div>
</div>
 </Dropdown>`}}});var g=t(f,2);O(g,{name:"Error'd Input",tags:["svelte-csf-v4"],children:(d,P)=>{var l=ao(),u=h(l);m(u,{showErrors:!0,children:(p,i)=>{var o=Y(),r=_(o);s(r,"value","Option 1");var e=t(r,2);s(e,"value","Option 2"),t(e,2),a(p,o)},$$slots:{default:!0,placeholder:(p,i)=>{var o=Z();a(p,o)},errors:(p,i)=>{var o=oo();a(p,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
   <div style="height: 160px; max-width: 400px; margin: 0 auto;">
<Dropdown showErrors>
	<span slot="placeholder">Error'd Input...</span>
	<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	<span slot="errors">Something went wrong here!</span>
</Dropdown>
</div>
 </Dropdown>`}}});var w=t(g,2);O(w,{name:"Label",tags:["svelte-csf-v4"],children:(d,P)=>{var l=no(),u=h(l);m(u,{placeholder:"Placeholder...",children:(p,i)=>{var o=to(),r=_(o);s(r,"value","Option 1");var e=t(r,2);s(e,"value","Option 2"),t(e,2),a(p,o)},$$slots:{default:!0,label:(p,i)=>{var o=ro();a(p,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
   <div style="height: 160px; margin: 0 auto;">
<Dropdown placeholder="Placeholder...">
	<span slot="label">Label</span>
	<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
</Dropdown>
</div>
 </Dropdown>`}}});var S=t(w,2);O(S,{name:"Full Width",tags:["svelte-csf-v4"],children:(d,P)=>{var l=so(),u=h(l);m(u,{fullWidth:!0,placeholder:"Placeholder...",children:(i,o)=>{var r=eo(),e=_(r);s(e,"value","Option 1");var v=t(e,2);s(v,"value","Option 2"),t(v,2),a(i,r)},$$slots:{default:!0,label:(i,o)=>{var r=po();a(i,r)}}});var p=t(u,2);m(p,{placeholder:"Placeholder...",children:(i,o)=>{var r=io(),e=_(r);s(e,"value","Option 1");var v=t(e,2);s(v,"value","Option 2"),t(v,2),a(i,r)},$$slots:{default:!0,label:(i,o)=>{var r=lo();a(i,r)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Dropdown {...args}>
   <div style="display: flex; gap: 1rem;">
<Dropdown fullWidth placeholder="Placeholder...">
	<span slot="label">Label</span>
	<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
</Dropdown>
<Dropdown placeholder="Placeholder...">
	<span slot="label">Label</span>
	<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
</Dropdown>
</div>
 </Dropdown>`}}}),a(C,x),z()}F.__docgen={version:3,name:"dropdown.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=M(F,q),Io=["DefaultDropdown","CustomPlaceholder","ExternalValueControls","ErrorDInput","Label","FullWidth"],Vo={...$.DefaultDropdown,tags:["svelte-csf-v4"]},Wo={...$.CustomPlaceholder,tags:["svelte-csf-v4"]},Bo={...$.ExternalValueControls,tags:["svelte-csf-v4"]},ko={...$.ErrorDInput,tags:["svelte-csf-v4"]},zo={...$.Label,tags:["svelte-csf-v4"]},Ao={...$.FullWidth,tags:["svelte-csf-v4"]};export{Wo as CustomPlaceholder,Vo as DefaultDropdown,ko as ErrorDInput,Bo as ExternalValueControls,Ao as FullWidth,zo as Label,Io as __namedExportsOrder,q as default};
