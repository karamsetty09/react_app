(this["webpackJsonpreact-essentials"]=this["webpackJsonpreact-essentials"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3MY83",summary:"CartItem_summary__xPm89",price:"CartItem_price__29Nnm",amount:"CartItem_amount__30Txm",actions:"CartItem_actions__2E3m3"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn"}},,function(e,t,n){e.exports={login:"Login_login__L32O8",control:"Login_control__379jH",invalid:"Login_invalid__2RvoN",actions:"Login_actions__1y9sG"}},function(e,t,n){e.exports={meal:"MealItem_meal__IMlXn",description:"MealItem_description__3Ff9C",price:"MealItem_price__2ct5w"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},,function(e,t,n){e.exports={login:"Input_login__1MXu8",control:"Input_control__NC1Va",invalid:"Input_invalid__10T1o",actions:"Input_actions__5loYS"}},function(e,t,n){e.exports={header:"Header_header__1cM8q",mainimage:"Header_mainimage__357E5","main-image":"Header_main-image__1RoZ3"}},,,function(e,t,n){e.exports={card:"Card_card__WFWBo"}},function(e,t,n){e.exports={button:"Button_button__2o_at"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1BTNU"}},,function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1PggW","meals-appear":"AvailableMeals_meals-appear__1hJEd"}},function(e,t,n){e.exports={form:"MealItemForm_form__2GhM6"}},function(e,t,n){e.exports={input:"Input_input__3Lg_X"}},function(e,t,n){e.exports={nav:"Navigation_nav__3jG_0"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__3Y_ae"}},,,,function(e,t,n){},,function(e,t,n){e.exports={home:"Home_home__30P3A"}},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(7),o=n.n(i),r=(n(32),n(2)),s=n(19),l=n.n(s),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(11),m=n.n(j),b=n(20),O=n.n(b),x=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},_=c.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,t){}}),h=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(u.jsx)(_.Provider,{value:{isLoggedIn:c,onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},f=_,p=n(15),v=n.n(p),g=function(e){return Object(u.jsxs)("div",{className:"".concat(v.a.control," ").concat(!1===e.isValid?v.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:e.id,children:e.label}),Object(u.jsx)("input",{type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})},C=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:t.val.includes("@")}:"INPUT_BLUR"===t.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},N=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:t.val.length>6}:"INPUT_BLUR"===t.type?{value:e.value,isValid:e.value.length>6}:{value:"",isValid:!1}},I=function(e){var t=Object(a.useReducer)(C,{value:"",isValid:null}),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(a.useReducer)(N,{value:"",isValid:null}),s=Object(r.a)(o,2),l=s[0],j=s[1],b=Object(a.useContext)(f),O=Object(a.useState)(!1),_=Object(r.a)(O,2),h=_[0],p=_[1],v=c.isValid,I=l.isValid;Object(a.useEffect)((function(){var e=setTimeout((function(){console.log("Checking for validity"),p(v&&I)}),500);return function(){console.log("CLEAN UP"),clearTimeout(e)}}),[v,I]);return Object(u.jsx)(d,{className:m.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.onLogin(c.value,l.value)},children:[Object(u.jsx)(g,{id:"email",label:"E-Mail",type:"email",isValid:v,value:c.value,onChange:function(e){i({type:"USER_INPUT",val:e.target.value}),p(e.target.value.includes("@")&&l.isValid)},onBlur:function(){i({type:"INPUT_BLUR"})}}),Object(u.jsx)(g,{id:"password",label:"Password",type:"password",isValid:I,value:l.value,onChange:function(e){j({type:"USER_INPUT",val:e.target.value}),p(e.target.value.trim().length>6&&c.isValid)},onBlur:function(){j({type:"INPUT_BLUR"})}}),Object(u.jsx)("div",{className:m.a.actions,children:Object(u.jsx)(x,{type:"submit",className:m.a.btn,disabled:!h,children:"Login"})})]})})},y=(n(34),n(6)),L=n.p+"static/media/meals.2971f633.jpg",A=n(16),M=n.n(A),T=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},U=n(9),k=n.n(U),E=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),R=function(e){var t=Object(a.useContext)(E),n=t.items,c=Object(a.useState)(!1),i=Object(r.a)(c,2),o=i[0],s=i[1],l=t.items.reduce((function(e,t){return e+t.amount}),0),d="".concat(k.a.button," ").concat(o?k.a.bump:"");return Object(a.useEffect)((function(){if(0!==n.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[n]),Object(u.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(u.jsx)("span",{className:k.a.icon,children:Object(u.jsx)(T,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:k.a.badge,children:l})]})},V=function(e){return Object(u.jsxs)(y.Fragment,{children:[Object(u.jsxs)("header",{className:M.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(R,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:L,className:M.a.mainimage,alt:"A table full of delicious food"})})]})},w=n(21),S=n.n(w),B=function(){return Object(u.jsxs)("section",{className:S.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},P=n(17),H=n.n(P),F=n(22),D=n(23),z=n.n(D),Y=function(e){return Object(u.jsx)("div",{className:z.a.card,children:e.children})},W=n(24),G=n.n(W),X=n(12),q=n.n(X),J=n(25),Q=n.n(J),$=n(3),K=n(26),Z=n.n(K),ee=c.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:Z.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object($.a)({ref:t},e.input))]})})),te=function(e){var t=Object(a.useState)(!0),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(a.useRef)();return Object(u.jsxs)("form",{className:Q.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().lenght||a<1||a>5?i(!1):e.onAddToCart(a)},children:[Object(u.jsx)(ee,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!c&&Object(u.jsx)("p",{children:"please enter a valid amount(1-5)"})]})},ne=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(a.useContext)(E);return Object(u.jsxs)("li",{className:q.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:q.a.description,children:e.description}),Object(u.jsx)("div",{className:q.a.price,children:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)(te,{id:e.id,onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})}})})]})},ae=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){(function(){var e=Object(F.a)(H.a.mark((function e(){var t,n,a,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://backend-cf403-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(i in n=e.sent,a=[],n)a.push({id:i,name:n[i].name,description:n[i].description,price:n[i].price});c(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=n.map((function(e){return Object(u.jsx)(ne,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:G.a.meals,children:Object(u.jsx)(Y,{children:Object(u.jsx)("ul",{children:i})})})},ce=function(){return Object(u.jsxs)(y.Fragment,{children:[Object(u.jsx)(B,{}),Object(u.jsx)(ae,{})]})},ie=n(4),oe=n.n(ie),re=n(13),se=n.n(re),le=function(e){return Object(u.jsx)("div",{className:se.a.backdrop,onClick:e.onCloseCart})},ue=function(e){return Object(u.jsx)("div",{className:se.a.modal,children:Object(u.jsx)("div",{className:se.a.content,children:e.children})})},de=document.getElementById("overlays"),je=function(e){return Object(u.jsxs)(a.Fragment,{children:[o.a.createPortal(Object(u.jsx)(le,{onCloseCart:e.onCloseCart}),de),o.a.createPortal(Object(u.jsx)(ue,{children:e.children}),de)]})},me=n(5),be=n.n(me),Oe=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:be.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:be.a.summary,children:[Object(u.jsx)("span",{className:be.a.price,children:t}),Object(u.jsxs)("span",{className:be.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:be.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},xe=function(e){var t=Object(a.useContext)(E),n="$".concat(t.totalAmount.toFixed(2)),c=t.items.length>0,i=function(e){t.removeItem(e)},o=function(e){t.addItem(Object($.a)(Object($.a)({},e),{},{amount:1}))},r=Object(u.jsx)("ul",{className:oe.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(Oe,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:o.bind(null,e)},e.id)}))});return Object(u.jsxs)(je,{onCloseCart:e.onCloseCart,children:[r,Object(u.jsxs)("div",{className:oe.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:oe.a.actions,children:[Object(u.jsx)("button",{className:oe.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),c&&Object(u.jsx)("button",{className:oe.a.button,children:"Order"})]})]})},_e=n(18),he={items:[],totalAmount:0},fe=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var o=Object($.a)(Object($.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(_e.a)(e.items))[c]=o}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],u=e.totalAmount-l.price;if(1===l.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object($.a)(Object($.a)({},l),{},{amount:l.amount-1});(r=Object(_e.a)(e.items))[s]=d}return{items:r,totalAmount:u}}return he},pe=function(e){var t=Object(a.useReducer)(fe,he),n=Object(r.a)(t,2),c=n[0],i=n[1],o={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(u.jsx)(E.Provider,{value:o,children:e.children})},ve=function(e){var t=Object(a.useContext)(f),n=Object(a.useState)(!1),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsxs)(pe,{children:[i&&Object(u.jsx)(xe,{onCloseCart:function(){o(!1)}}),Object(u.jsx)(V,{onShowCart:function(){o(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(ce,{})}),Object(u.jsx)(x,{onClick:t.onLogout,children:"Logout"})]})},ge=n(27),Ce=n.n(ge),Ne=function(e){var t=Object(a.useContext)(f);return Object(u.jsx)("nav",{className:Ce.a.nav,children:Object(u.jsxs)("ul",{children:[t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:t.onLogout,children:"Logout"})})]})})},Ie=n(28),ye=n.n(Ie),Le=function(e){return Object(u.jsxs)("header",{className:ye.a["main-header"],children:[Object(u.jsx)("h1",{children:"Login Page"}),Object(u.jsx)(Ne,{})]})};var Ae=function(){var e=Object(a.useContext)(f);return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(Le,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(I,{}),e.isLoggedIn&&Object(u.jsx)(ve,{})]})]})};o.a.render(Object(u.jsx)(h,{children:Object(u.jsx)(Ae,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.6e9827f8.chunk.js.map