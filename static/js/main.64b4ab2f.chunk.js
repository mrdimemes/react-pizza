(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(13),s=c.n(r),n=c(9),o=c(3),l=c(2),d=c(0);var u=Object(o.b)((function(e){return{productCategories:e.filters.productCategories,activeCategory:e.filters.activeCategory}}))((function(e){var t=e.productCategories,c=e.activeCategory;return Object(d.jsxs)("div",{className:"App__wrapper",children:[Object(d.jsxs)("div",{className:"interactive-bar App__interactive-bar",children:[Object(d.jsx)(ee,{}),Object(d.jsx)(ae,{})]}),Object(d.jsxs)("section",{className:"App__gallery-section",children:[Object(d.jsxs)("h1",{className:"App__gallery-section-label section-label",children:[Object(d.jsx)("span",{className:"App__gallery-section-label-category",children:t[c]}),Object(d.jsx)("span",{children:" pizzas"})]}),Object(d.jsx)(ie,{})]})]})}));var p=Object(o.b)((function(e){return{entriesCount:e.cart.entriesCount}}))((function(e){var t=e.entriesCount;return Object(d.jsx)("div",{className:"App__wrapper",children:Object(d.jsx)("section",{className:"App__cart-section",children:t?Object(d.jsx)(Z,{}):Object(d.jsx)("div",{className:"App__empty-cart-wrapper",children:Object(d.jsx)(D,{})})})})})),j=c(12),b=Object(j.b)({name:"filters",initialState:{products:[],isProductsLoaded:!1,productTypes:[],productSizes:[],productCategories:["all"],activeCategory:0,shownProducts:[],sortOptions:["popularity","price","alphabet"],activeSortOption:0,isShownProductsSorted:!1},reducers:{setProducts:function(e,t){e.products=t.payload},productsLoaded:function(e){e.isProductsLoaded=!0},setProductTypes:function(e,t){e.productTypes=t.payload},setProductSizes:function(e,t){e.productSizes=t.payload},setProductCategories:function(e,t){e.productCategories=t.payload},setActiveCategory:function(e,t){e.activeCategory=t.payload},setShownProducts:function(e,t){e.shownProducts=t.payload,e.isShownProductsSorted=!1},setActiveSortOption:function(e,t){e.activeSortOption=t.payload,e.isShownProductsSorted=!1},sortShownProducts:function(e){e.shownProducts.sort((function(t,c){var a=e.products.find((function(e){return e.id===t})),i=e.products.find((function(e){return e.id===c}));switch(e.sortOptions[e.activeSortOption]){case"popularity":return i.rating-a.rating;case"price":return a.prices[a.availableTypes[0]][a.availableSizes[0]]-i.prices[i.availableTypes[0]][i.availableSizes[0]];case"alphabet":return a.pizzaLabel.localeCompare(i.pizzaLabel);default:return 0}})),e.isShownProductsSorted=!0}}}),m=b.actions,_=m.setProducts,O=m.setProductTypes,v=m.setProductSizes,h=m.productsLoaded,f=m.setProductCategories,x=m.setActiveCategory,z=m.setShownProducts,C=m.setActiveSortOption,y=m.sortShownProducts,N=b.reducer;c(29);var g=Object(o.b)()((function(e){var t=e.dispatch;return i.a.useEffect((function(){fetch("http://localhost:3000/db.json").then((function(e){return e.json()})).then((function(e){t(f(e.pizzaCategories)),t(O(e.pizzaTypes)),t(v(e.pizzaSizes)),t(_(e.pizzas)),t(h())}))}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(w,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/cart",element:Object(d.jsx)(p,{})})]})]})})),P=c.p+"static/media/cart.aef56ebe.svg",S=c.p+"static/media/logo.56ac8703.svg";c(30);var w=Object(o.b)((function(e){return{cartEntriesPrice:e.cart.entriesPrice,cartEntriesCount:e.cart.entriesCount}}))((function(e){var t=e.cartEntriesPrice,c=e.cartEntriesCount;return Object(d.jsxs)("header",{className:"Header App__header",children:[Object(d.jsx)(n.b,{to:"/",children:Object(d.jsxs)("div",{className:"Header__logo",children:[Object(d.jsx)("div",{className:"Header__logo-image-container",children:Object(d.jsx)("img",{className:"image",src:S,alt:"pizza"})}),Object(d.jsxs)("div",{className:"Header__logo-text",children:[Object(d.jsx)("h1",{className:"Header__logo-label",children:"REACT PIZZA"}),Object(d.jsx)("p",{className:"Header__logo-description",children:"most delicious pizza in the universe"})]})]})}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",element:Object(d.jsx)(n.b,{to:"/cart",children:Object(d.jsxs)(T,{className:"Header__cart-button",shape:"rounded",theme:"main-colored",children:[Object(d.jsx)("div",{className:"Header__cart-button-cost",children:t.toFixed(2)+" $"}),Object(d.jsx)("div",{className:"Header__cart-button-separator button-separator"}),Object(d.jsx)("div",{className:"Header__cart-button-icon-container",children:Object(d.jsx)("img",{className:"image",src:P,alt:"cart"})}),Object(d.jsx)("div",{className:"Header__cart-button-inputs-counter",children:c})]})})}),Object(d.jsx)(l.a,{exact:!0,path:"/cart",element:null})]})]})})),k=c(5),A=c(7),E=c.n(A);c(31);var T=function(e){var t,c=e.className,a=e.shape,i=e.theme,r=e.onClick,s=e.children;return Object(d.jsx)("button",{onClick:r,className:E()("Button",c,(t={},Object(k.a)(t,"Button_shape_".concat(a),a),Object(k.a)(t,"Button_theme_".concat(i),i),t)),children:s})},L=c(10),H=c(11),B=Object(j.b)({name:"cart",initialState:{entries:[],entriesCount:0,maxEntriesCount:50,entriesPrice:0},reducers:{addEntry:function(e,t){if(e.entriesCount!==e.maxEntriesCount){var c,a=!1,i=Object(H.a)(e.entries);try{for(i.s();!(c=i.n()).done;){var r=c.value;r.id===t.payload.id&&r.type===t.payload.type&&r.size===t.payload.size&&(r.count+=1,a=!0)}}catch(s){i.e(s)}finally{i.f()}a||e.entries.push(Object(L.a)(Object(L.a)({},t.payload),{},{count:1})),e.entriesCount+=1,e.entriesPrice+=t.payload.price}else alert("Sorry, you cannot order more than "+e.maxEntriesCount+" pizzas at a time.")},removeEntry:function(e,t){var c=e.entries.findIndex((function(e){return e.id===t.payload.id&&e.type===t.payload.type&&e.size===t.payload.size}));-1!==c&&(1===e.entries[c].count?e.entries.splice(c,1):e.entries[c].count-=1,e.entriesCount-=1,e.entriesCount?e.entriesPrice-=t.payload.price:e.entriesPrice=0)},removeAllEntries:function(e,t){var c=e.entries.findIndex((function(e){return e.id===t.payload.id&&e.type===t.payload.type&&e.size===t.payload.size}));if(-1!==c){var a=e.entries[c].count,i=e.entries[c].price;e.entries.splice(c,1),e.entriesCount-=a,e.entriesCount?e.entriesPrice-=a*i:e.entriesPrice=0}},clearCart:function(e){e.entries=[],e.entriesCount=0,e.entriesPrice=0}}}),F=B.actions,I=F.addEntry,U=F.removeEntry,R=F.removeAllEntries,$=F.clearCart,q=B.reducer,J=c.p+"static/media/dark-cart.dcd51680.svg",M=c.p+"static/media/trash.ceafcffb.svg";c(32);var Z=Object(o.b)((function(e){return{entries:e.cart.entries,entriesPrice:e.cart.entriesPrice,entriesCount:e.cart.entriesCount}}),(function(e){return{clear:function(){e($())}}}))((function(e){var t=e.entries,c=e.entriesPrice,a=e.entriesCount,i=e.clear;return Object(d.jsxs)("div",{className:"Cart",children:[Object(d.jsxs)("div",{className:"Cart__header interactive-bar",children:[Object(d.jsxs)("div",{className:"Cart__section-label",children:[Object(d.jsx)("div",{className:"Cart__section-label-icon-container",children:Object(d.jsx)("img",{className:"image",src:J,alt:"cart"})}),Object(d.jsx)("h1",{className:"Cart__section-label-text section-label",children:"Cart"})]}),Object(d.jsxs)(T,{className:"Cart__clear-button",theme:"weak",onClick:i,children:[Object(d.jsx)("div",{className:"Cart__clear-button-icon-container",children:Object(d.jsx)("img",{className:"image",src:M,alt:"trash"})}),Object(d.jsx)("p",{className:"Cart__clear-button-text",children:"Clear cart"})]})]}),Object(d.jsx)("div",{className:"Cart__items",children:t.map((function(e){return Object(d.jsx)(K,{entry:e})}))}),Object(d.jsxs)("div",{className:"Cart__footer",children:[Object(d.jsxs)("div",{className:"Cart__counter",children:[Object(d.jsx)("span",{className:"Cart__counter-text",children:"Total entries: "}),Object(d.jsxs)("span",{className:"Cart__counter-state",children:[a," pcs."]})]}),Object(d.jsxs)("div",{className:"Cart__price",children:[Object(d.jsx)("span",{className:"Cart__price-text",children:"Order price: "}),Object(d.jsxs)("span",{className:"Cart__price-state",children:[c.toFixed(2)," $"]})]})]}),Object(d.jsxs)("nav",{className:"Cart__navigation interactive-bar",children:[Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)(T,{className:"Cart__back-button",shape:"rounded",theme:"weak-bordered",children:"Back"})}),Object(d.jsx)(T,{className:"Cart__pay-button",shape:"rounded",theme:"main-colored",children:"Pay now"})]})]})})),Y=c.p+"static/media/empty-cart.db905d1f.png";c(33);var D=function(){return Object(d.jsxs)("div",{className:"Empty-cart",children:[Object(d.jsx)("h1",{className:"Empty-cart__section-label section-label",children:"Your cart is empty \ud83d\ude15"}),Object(d.jsxs)("p",{className:"Empty-cart__text",children:["Most likely you haven't ordered pizza yet. ",Object(d.jsx)("br",{}),"To order pizza, go to the main page."]}),Object(d.jsx)("div",{className:"Empty-cart__image-container",children:Object(d.jsx)("img",{className:"image",src:Y,alt:"empty cart"})}),Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)(T,{className:"Empty-cart__back-button",shape:"rounded",theme:"dark-colored",children:"Back"})})]})};c(34);function G(e){var t=e.entry,c=e.availableTypes,a=e.availableSizes,i=e.add,r=e.remove,s=e.removeAll;return Object(d.jsxs)("div",{className:"Cart__item Cart-item",children:[Object(d.jsxs)("div",{className:"Cart-item__info",children:[Object(d.jsx)("div",{className:"Cart-item__image-container",children:Object(d.jsx)("img",{className:"image",src:t.imageUrl,alt:"pizza"})}),Object(d.jsxs)("div",{className:"Cart-item__text",children:[Object(d.jsx)("h3",{className:"Cart-item__label",children:t.label}),Object(d.jsxs)("p",{className:"Cart-item__description",children:[Object(d.jsxs)("span",{children:[c[t.type]," dough, "]}),Object(d.jsxs)("span",{children:[a[t.size]," cm."]})]})]})]}),Object(d.jsxs)("div",{className:"Cart-item__interactive-bar",children:[Object(d.jsxs)("div",{className:"Cart-item__counter",children:[Object(d.jsx)(T,{className:"Cart-item__counter-button",theme:"main-bordered",onClick:function(){return r(t)},children:"-"}),Object(d.jsx)("p",{className:"Cart-item__counter-state",children:t.count}),Object(d.jsx)(T,{className:"Cart-item__counter-button",theme:"main-bordered",onClick:function(){return i(t)},children:"+"})]}),Object(d.jsxs)("div",{className:"Cart-item__price",children:[(t.price*t.count).toFixed(2)," $"]}),Object(d.jsx)(T,{className:"Cart-item__clear-button",theme:"weak-bordered",onClick:function(){return s(t)},children:"\xd7"})]})]})}G.defaultProps={imageUrl:"./images/default-pizza-image.svg"};var K=Object(o.b)((function(e){return{availableTypes:e.filters.productTypes,availableSizes:e.filters.productSizes}}),(function(e){return{add:function(t){e(I(Object(L.a)({},t)))},remove:function(t){e(U(Object(L.a)({},t)))},removeAll:function(t){e(R(Object(L.a)({},t)))}}}))(G),Q=c(8),V=c.p+"static/media/arrow-top.8a732a72.svg";c(35);function W(e){var t,c,a=e.className,r=e.inviteText,s=e.options,n=e.activeOption,o=e.setActiveOption,l=e.processingFunction,u=i.a.useState(!1),p=Object(Q.a)(u,2),j=p[0],b=p[1],m=i.a.useRef(),_=function(){return b(!j)},O=function(e){e.path.includes(m.current)||b(!1)};return i.a.useEffect((function(){return document.body.addEventListener("click",O),function(){document.body.removeEventListener("click",O)}}),[]),i.a.useEffect((function(){l()}),[l]),Object(d.jsxs)("div",{ref:m,className:E()("Popup-menu",a),children:[Object(d.jsx)("div",{className:E()("Popup-menu__marker",(t={},Object(k.a)(t,"".concat(a,"__popup-marker"),a),Object(k.a)(t,"Popup-menu__marker_closed",!j),t)),children:Object(d.jsx)("img",{className:"image",src:V,alt:"marker"})}),Object(d.jsxs)("p",{className:E()("Popup-menu__invite-text",Object(k.a)({},"".concat(a,"__popup-invite-text"),a)),children:[r,":",Object(d.jsx)("span",{onClick:_,className:E()("Popup-menu__selected",Object(k.a)({},"".concat(a,"__popup-selected"),a)),children:s[n]})]}),Object(d.jsx)("ul",{className:E()("Popup-menu__items",(c={},Object(k.a)(c,"".concat(a,"__items"),a),Object(k.a)(c,"Popup-menu__items_active",j),c)),children:s.map((function(e,t){var c;return Object(d.jsx)("li",{onClick:function(){return(e=t)!==n&&o(e),void(j&&_());var e},className:E()("Popup-menu__item",(c={},Object(k.a)(c,"".concat(a,"__item"),a),Object(k.a)(c,"Popup-menu__item_active",t===n),Object(k.a)(c,"".concat(a,"__item_active"),t===n),c)),children:e},"".concat(e,"_").concat(t))}))})]})}W.defaultProps={inviteText:"Option"};var X=W;c(36);var ee=Object(o.b)((function(e){return{options:e.filters.productCategories,activeOption:e.filters.activeCategory,products:e.filters.products,isProductsLoaded:e.filters.isProductsLoaded}}),(function(e){return{setActiveOption:function(t){return e(x(t))},display:function(t){return e(z(t))}}}))((function(e){var t=e.options,c=e.activeOption,a=e.products,i=e.isProductsLoaded,r=e.setActiveOption,s=e.display;return Object(d.jsx)(X,{className:"Categories-menu",inviteText:"Category",options:t,activeOption:c,setActiveOption:r,processingFunction:function(){if(i){var e=a.filter((function(e){return e.categories.includes(c)})).map((function(e){return e.id}));s(e)}}})})),te=c(14),ce=c.n(te);var ae=Object(o.b)((function(e){return{options:e.filters.sortOptions,activeOption:e.filters.activeSortOption,isProductsLoaded:e.filters.isProductsLoaded,isShownProductsSorted:e.filters.isShownProductsSorted,setActiveOption:ce.a.func.isRequired,sort:ce.a.func.isRequired}}),(function(e){return{setActiveOption:function(t){e(C(t))},sort:function(){e(y())}}}))((function(e){var t=e.options,c=e.activeOption,a=e.isProductsLoaded,i=e.isShownProductsSorted,r=e.setActiveOption,s=e.sort;return Object(d.jsx)(X,{className:"Sort-menu",inviteText:"Sort by",options:t,activeOption:c,setActiveOption:r,processingFunction:function(){a&&!i&&s()}})}));c(37);var ie=Object(o.b)((function(e){return{items:e.filters.products,shown:e.filters.shownProducts}}))((function(e){var t=e.items,c=e.shown;return Object(d.jsx)("div",{className:"Pizza-gallery",children:c.map((function(e){var c=t.find((function(t){return t.id===e}));return Object(d.jsx)(re,{pizzaItem:c},e)}))})}));c(38);var re=Object(o.b)((function(e){return{types:e.filters.productTypes,sizes:e.filters.productSizes,cartEntries:e.cart.entries}}),(function(e){return{addToCart:function(t,c,a,i,r,s){e(I({id:t,imageUrl:c,label:a,type:i,size:r,price:s,count:1}))}}}))((function(e){var t=e.pizzaItem,c=e.types,a=e.sizes,r=e.cartEntries,s=e.addToCart,n=t.availableTypes,o=t.availableSizes,l=t.imageUrl?t.imageUrl:"../../assect/images/svg/default-pizza-image.svg",u=t.pizzaLabel,p=t.prices,j=i.a.useState(n[0]),b=Object(Q.a)(j,2),m=b[0],_=b[1],O=i.a.useState(o[0]),v=Object(Q.a)(O,2),h=v[0],f=v[1],x=i.a.useState(0),z=Object(Q.a)(x,2),C=z[0],y=z[1];return i.a.useEffect((function(){y(function(){var e,c=Object(H.a)(r);try{for(c.s();!(e=c.n()).done;){var a=e.value;if(a.id===t.id&&a.type===m&&a.size===h)return a.count}}catch(i){c.e(i)}finally{c.f()}return 0}())}),[r,m,h,n,o,t.id]),Object(d.jsxs)("div",{className:"Pizza",children:[Object(d.jsx)("div",{className:"Pizza__image-container",children:Object(d.jsx)("img",{className:"image",src:l,alt:"pizza"})}),Object(d.jsxs)("h2",{className:"Pizza__label",children:[" ",u," "]}),Object(d.jsxs)("div",{className:"Pizza__options",children:[Object(d.jsx)("ul",{className:"Pizza__options-row",children:c.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){return function(e){return _(e)}(t)},className:E()("Pizza__options-item",{"Pizza__options-item_active":t===m,"Pizza__options-item_unavailable":!n.includes(t)}),children:e},"".concat(e,"_").concat(t))}))}),Object(d.jsx)("ul",{className:"Pizza__options-row",children:a.map((function(e,t){return Object(d.jsxs)("li",{onClick:function(){return function(e){return f(e)}(t)},className:E()("Pizza__options-item",{"Pizza__options-item_active":t===h,"Pizza__options-item_unavailable":!o.includes(t)}),children:[e," cm."]},"".concat(e,"_").concat(t))}))})]}),Object(d.jsxs)("div",{className:"Pizza__order-bar interactive-bar",children:[Object(d.jsxs)("div",{className:"Pizza__price",children:[p[m][h]," $"]}),Object(d.jsxs)(T,{className:"Pizza__order-button",shape:"rounded",theme:"main-bordered",onClick:function(){return s(t.id,l,u,m,h,p[m][h])},children:[Object(d.jsx)("p",{className:"Pizza__order-button-text",children:"+ Add"}),Object(d.jsx)("div",{className:E()("Pizza__order-button-counter",{"Pizza__order-button-counter_active":C}),children:C})]})]})]})})),se=Object(j.a)({reducer:{filters:N,cart:q}});s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(n.a,{children:Object(d.jsx)(o.a,{store:se,children:Object(d.jsx)(g,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.64b4ab2f.chunk.js.map