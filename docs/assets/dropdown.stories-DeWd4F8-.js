import{a,t as I,b as n}from"./template-B77arBy_.js";import{p as V,f as _,g as W,b as L,a as B,s as t,n as k,m as z,c as h}from"./context-CkYINwjE.js";import{s}from"./attributes-Dy7xLB0O.js";import{i as A,s as R}from"./props-C038bvN8.js";import{c as M,d as T}from"./create-runtime-stories-DR-pRHrr.js";import{D as m}from"./dropdown-Chri8ky6.js";import{B as U}from"./button-CH_prg_4.js";import"./attributes-Jce5emvo.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./slot-CgV10kGK.js";import"./class-PipbczXD.js";import"./style-PwPRnE0L.js";import"./this-NneL_TJu.js";import"./index-client-Nm16036z.js";import"./index-DUolvyrz.js";import"./icon-bZl4R_WS.js";import"./float-DDu8gBtZ.js";import"./form-item-m9rlVyp9.js";import"./progress-ring-B0c0QzUw.js";const j=(D,y=k)=>{var O=H(),x=h(O);m(x,R(y,{children:(P,b)=>{var f=G(),g=_(f);s(g,"value","Option 1");var w=t(g,2);s(w,"value","Option 2"),t(w,2),a(P,f)},$$slots:{default:!0}})),a(D,O)},q={title:"AURA/Dropdown",component:m,tags:["autodocs"],argTypes:{}},{Story:c}=T();var G=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),H=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),J=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),K=n('<span slot="placeholder">Custom placeholder...</span>'),N=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),Q=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),X=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><div style="display: flex; gap: 10px;"><!> <!></div></div>'),Y=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),Z=n(`<span slot="placeholder">Error'd Input...</span>`),oo=n('<span slot="errors">Something went wrong here!</span>'),ao=n('<div style="height: 160px; max-width: 400px; margin: 0 auto;"><!></div>'),to=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),ro=n('<span slot="label">Label</span>'),no=n('<div style="height: 160px; margin: 0 auto;"><!></div>'),po=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),eo=n('<span slot="label">Label</span>'),io=n("<aura-option>Option 1</aura-option> <aura-option>Option 2</aura-option> <aura-option>Option 3</aura-option>",3),lo=n('<span slot="label">Label</span>'),so=n('<div style="display: flex; gap: 1rem;"><!> <!></div>'),uo=n("<!> <!> <!> <!> <!> <!>",1);function F(D,y){V(y,!1);let O=z("Option 1");A();var x=uo(),P=_(x);c(P,{height:"500px",name:"Default dropdown",children:j,parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; max-width: 400px; margin: 0 auto;">
	<Dropdown {...args}>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
</div>`}}});var b=t(P,2);c(b,{name:"Custom Placeholder",children:(d,C)=>{var l=N(),u=h(l);m(u,{children:(e,i)=>{var o=J(),r=_(o);s(r,"value","Option 1");var p=t(r,2);s(p,"value","Option 2"),t(p,2),a(e,o)},$$slots:{default:!0,placeholder:(e,i)=>{var o=K();a(e,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; max-width: 400px; margin: 0 auto;">
	<Dropdown>
		<span slot="placeholder">Custom placeholder...</span>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
</div>`}}});var f=t(b,2);c(f,{name:"External Value Controls",children:(d,C)=>{var l=X(),u=h(l),e=h(u);m(e,{style:"flex: 1",get currentValue(){return W(O)},$$events:{change:o=>{L(O,o.detail.value)}},children:(o,r)=>{var p=Q(),v=_(p);s(v,"value","Option 1");var E=t(v,2);s(E,"value","Option 2"),t(E,2),a(o,p)},$$slots:{default:!0}});var i=t(e,2);U(i,{size:"small",$$events:{click:()=>L(O,void 0)},children:(o,r)=>{var p=I("Clear");a(o,p)},$$slots:{default:!0}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; max-width: 400px; margin: 0 auto;">
	<div style="display: flex; gap: 10px;">
		<Dropdown style="flex: 1" on:change={(evt) => {
valueForControlsStory = evt.detail.value;
}} currentValue={valueForControlsStory}>
			<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
		</Dropdown>
		<Button size="small" on:click={() => valueForControlsStory = undefined}>Clear</Button>
	</div>
</div>`}}});var g=t(f,2);c(g,{name:"Error'd Input",children:(d,C)=>{var l=ao(),u=h(l);m(u,{showErrors:!0,children:(e,i)=>{var o=Y(),r=_(o);s(r,"value","Option 1");var p=t(r,2);s(p,"value","Option 2"),t(p,2),a(e,o)},$$slots:{default:!0,placeholder:(e,i)=>{var o=Z();a(e,o)},errors:(e,i)=>{var o=oo();a(e,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; max-width: 400px; margin: 0 auto;">
	<Dropdown showErrors>
		<span slot="placeholder">Error'd Input...</span>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
		<span slot="errors">Something went wrong here!</span>
	</Dropdown>
</div>`}}});var w=t(g,2);c(w,{name:"Label",children:(d,C)=>{var l=no(),u=h(l);m(u,{placeholder:"Placeholder...",children:(e,i)=>{var o=to(),r=_(o);s(r,"value","Option 1");var p=t(r,2);s(p,"value","Option 2"),t(p,2),a(e,o)},$$slots:{default:!0,label:(e,i)=>{var o=ro();a(e,o)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="height: 160px; margin: 0 auto;">
	<Dropdown placeholder="Placeholder...">
		<span slot="label">Label</span>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
</div>`}}});var S=t(w,2);c(S,{name:"Full Width",children:(d,C)=>{var l=so(),u=h(l);m(u,{fullWidth:!0,placeholder:"Placeholder...",children:(i,o)=>{var r=po(),p=_(r);s(p,"value","Option 1");var v=t(p,2);s(v,"value","Option 2"),t(v,2),a(i,r)},$$slots:{default:!0,label:(i,o)=>{var r=eo();a(i,r)}}});var e=t(u,2);m(e,{placeholder:"Placeholder...",children:(i,o)=>{var r=io(),p=_(r);s(p,"value","Option 1");var v=t(p,2);s(v,"value","Option 2"),t(v,2),a(i,r)},$$slots:{default:!0,label:(i,o)=>{var r=lo();a(i,r)}}}),a(d,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div style="display: flex; gap: 1rem;">
	<Dropdown fullWidth placeholder="Placeholder...">
		<span slot="label">Label</span>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
	<Dropdown placeholder="Placeholder...">
		<span slot="label">Label</span>
		<aura-option value="Option 1">Option 1</aura-option> <aura-option value="Option 2">Option 2</aura-option> <aura-option>Option 3</aura-option>
	</Dropdown>
</div>`}}}),a(D,x),B()}F.__docgen={version:3,name:"dropdown.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=M(F,q),Vo=["DefaultDropdown","CustomPlaceholder","ExternalValueControls","ErrorDInput","Label","FullWidth"],Wo=$.DefaultDropdown,Bo=$.CustomPlaceholder,ko=$.ExternalValueControls,zo=$.ErrorDInput,Ao=$.Label,Ro=$.FullWidth;export{Bo as CustomPlaceholder,Wo as DefaultDropdown,zo as ErrorDInput,ko as ExternalValueControls,Ro as FullWidth,Ao as Label,Vo as __namedExportsOrder,q as default};
