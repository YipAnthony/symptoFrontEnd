(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,s){},19:function(e,t,s){var c={"./AU.json":20,"./CA.json":21,"./US.json":22};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=a,e.exports=n,n.id=19},23:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),r=s(9),i=s.n(r),l=(s(16),s(4)),o=s.n(l),d=s(7),u=s(2),b=s(3);function j(){return Object(c.jsxs)("div",{id:"logoBar",className:"d-flex",children:[Object(c.jsx)("span",{id:"combinedLogo",children:Object(c.jsx)("span",{id:"streetText",children:"sympto-street"})}),Object(c.jsx)("button",{id:"mediaQueriedSearch",className:"btn btn-primary btn-lg",onClick:function(){var e=document.getElementById("searchBox"),t=document.getElementById("searchBoxContainer"),s=document.getElementById("backgroundFade");e.setAttribute("search","on"),s.setAttribute("search","on"),t.setAttribute("search","on"),s.addEventListener("click",(function(){e.removeAttribute("search"),t.removeAttribute("search"),s.removeAttribute("search")}))},children:"Search"})]})}var h=s(6);function p(e){var t=e.searchInput,s=e.setSearchInput,a=e.isGoogleAPIOn,r=e.setIsGoogleAPIOn,i=t.address,l=t.googleAddress,o=t.zipcode,d=t.zipcodeRadius,j=Object(n.useState)(!0),p=Object(b.a)(j,2),m=p[0],f=p[1],O=function(e){var t=e.target.value,c=/^[0-9]*$/.test(t);("zipcode"!==e.target.id||c)&&s((function(s){return Object(u.a)(Object(u.a)({},s),{},Object(h.a)({},e.target.id,t))}))},x=function(){s((function(e){return Object(u.a)(Object(u.a)({},e),{},{address:"",googleAddress:"",zipcode:""})}))};return Object(n.useEffect)((function(){if(!m){var e=document.getElementById("zipcodeRadius");""!==o?e.removeAttribute("disabled"):e.setAttribute("disabled","")}}),[o,m]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{id:"mainSearchText",children:["Search By:",Object(c.jsxs)("select",{id:"selectAddressorZipcode",className:"form-select form-select-lg d-inline-block shadow-none",value:m?"Address":"Zipcode",onChange:function(){f((function(e){return!e})),x()},children:[Object(c.jsx)("option",{value:"Address",children:"Address"}),Object(c.jsx)("option",{value:"Zipcode",children:"Zipcode"})]})]}),Object(c.jsxs)("form",{id:"searchAddressZipcodeContainer",autoComplete:"off",children:[Object(c.jsxs)("div",{className:"addressOrZipcode",children:[Object(c.jsxs)("div",{id:"addressSearchContainer",children:[Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)("input",{id:"googleAddress",className:"form-control mr-sm-2",type:"search",hidden:!a,value:l,onChange:O,placeholder:"Search by address"})}),a?null:Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)("input",{id:"address",className:"form-control mr-sm-2",type:"search",value:i,onChange:O,placeholder:"Search by address"})})]}),m?Object(c.jsxs)("div",{className:"form-check form-switch mt-2",children:[Object(c.jsx)("input",{className:"form-check-input",checked:a,onChange:function(){r((function(e){return!e})),x()},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(c.jsx)("label",{className:"form-check-label",children:a?"Google Search API On":"Google Search API Off"})]}):null]}),m?null:Object(c.jsxs)("div",{className:"addressOrZipcode",children:[Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsx)("input",{id:"zipcode",className:"form-control mr-sm-2",type:"search",placeholder:"Search by zipcode",value:o,onChange:O})}),Object(c.jsxs)("div",{className:"zipcodeSlideContainer",children:[Object(c.jsxs)("label",{id:"searchRadiusText",style:""===o?{color:"lightgrey"}:{color:"black"},children:["Search Radius: ",d," mi"]}),Object(c.jsx)("input",{id:"zipcodeRadius",className:"slider",type:"range",min:"1",max:"5",disabled:!0,value:d,onChange:O})]})]})]})]})}var m=s(5),f=s.n(m),O=Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",fill:"currentColor",className:"bi bi-house-door",viewBox:"0 0 16 16",children:[Object(c.jsx)("path",{fillRule:"evenodd",d:"M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"})]}),x=Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"untargetable bi bi-chevron-down",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),g=Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"untargetable bi bi-chevron-up",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})});function v(e){var t=e.searchFilters,s=e.setSearchFilters,a=t.priceInputMin,r=t.priceInputMax,i=t.sqftInputMin,l=t.sqftInputMax,o=t.bedsInput,d=t.bathsInput,j=Object(n.useState)({price:!1,sqft:!1,bedBath:!1}),p=Object(b.a)(j,2),m=p[0],O=p[1],v=function(e){var t=document.getElementById(e.target.id).classList.contains("collapsed");O((function(s){return Object(u.a)(Object(u.a)({},s),{},Object(h.a)({},e.target.id,!t))}))},I=function(e){var t=e.target.value;if(/^[$0-9\s][0-9,.\s]*$/.test(t)){var c=t.replace(/[,$]/g,"");s((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(h.a)({},e.target.id,c))}))}};return Object(c.jsxs)("form",{id:"searchFilterContainer",className:"",autoComplete:"off",children:[Object(c.jsxs)("h3",{id:"filterContainerTitle",children:["Filter by:",Object(c.jsx)("button",{className:"btn btn-secondary btn-sm clearfilters",onClick:function(e){e.preventDefault(),s({priceInputMin:"",priceInputMax:"",sqftInputMin:"",sqftInputMax:"",bedsInput:"",bathsInput:""})},children:"Clear filters"})]}),Object(c.jsx)("p",{id:"priceFilter",children:Object(c.jsx)("span",{className:"toggleFilter",children:Object(c.jsxs)("button",{id:"price",className:"btn btn-light shadow-none ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsePriceFilter","aria-expanded":"false","aria-controls":"collapsePriceFilter",onClick:v,children:[m.price?g:x,Object(c.jsx)("span",{className:"toggleText untargetable",children:"Price"})]})})}),Object(c.jsxs)("div",{className:"collapse",id:"collapsePriceFilter",children:[Object(c.jsx)("input",{id:"priceInputMin",className:"priceInput filterInput form-control mr-sm-2",value:""===a?"":f()(a).format("$0,0"),type:"text",placeholder:"Min",onChange:I})," "," - ",Object(c.jsx)("input",{id:"priceInputMax",className:"priceInput filterInput form-control mr-sm-2",value:""===r?"":f()(r).format("$0,0"),type:"text",placeholder:"Max",onChange:I})]}),Object(c.jsx)("p",{id:"sqftFilter",children:Object(c.jsxs)("button",{id:"sqft",className:"btn btn-light shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseSqftFilter","aria-expanded":"false","aria-controls":"collapseSqftFilter",onClick:v,children:[m.sqft?g:x,Object(c.jsx)("span",{className:"toggleText untargetable",children:"Square Feet"})]})}),Object(c.jsxs)("div",{className:"collapse",id:"collapseSqftFilter",children:[Object(c.jsx)("input",{id:"sqftInputMin",className:"sqftInput filterInput form-control mr-sm-2",value:""===i?"":f()(i).format("0,0"),type:"text",placeholder:"Min",onChange:I})," - ",Object(c.jsx)("input",{id:"sqftInputMax",className:"sqftInput filterInput form-control mr-sm-2",value:""===l?"":f()(l).format("0,0"),type:"text",placeholder:"Max",onChange:I})]}),Object(c.jsx)("p",{id:"bedsBathFilter",children:Object(c.jsxs)("button",{id:"bedBath",className:"btn btn-light shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseBedsBathFilter","aria-expanded":"false","aria-controls":"collapseBedsBathFilter",onClick:v,children:[m.bedBath?g:x,Object(c.jsx)("span",{className:"toggleText untargetable",children:"Bed & Bath"})]})}),Object(c.jsx)("div",{className:"collapse",id:"collapseBedsBathFilter",children:Object(c.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Bedrooms"}),Object(c.jsxs)("select",{id:"bedsInput",className:"form-select form-select-sm bedbathInput","aria-label":".form-select-sm beds",value:o,onChange:I,children:[Object(c.jsx)("option",{value:"",children:"No preference"}),Object(c.jsx)("option",{value:"12",children:"1-2"}),Object(c.jsx)("option",{value:"23",children:"2-3"}),Object(c.jsx)("option",{value:"4",children:"4+"})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Bathrooms"}),Object(c.jsxs)("select",{id:"bathsInput",className:"form-select form-select-sm bedbathInput","aria-label":".form-select-sm baths",value:d,onChange:I,children:[Object(c.jsx)("option",{value:"",children:"No preference"}),Object(c.jsx)("option",{value:"12",children:"1-2"}),Object(c.jsx)("option",{value:"23",children:"2-3"}),Object(c.jsx)("option",{value:"4",children:"4+"})]})]})]})})]})}function I(e){var t=e.result;return Object(c.jsxs)("div",{className:"card singleResult",onClick:function(){window.open(t.url,"_blank")},children:[Object(c.jsx)("div",{className:"resultImageContainer",children:Object(c.jsx)("span",{className:"houseIcon",children:O})}),Object(c.jsxs)("div",{className:"resultContent",children:[Object(c.jsxs)("h3",{children:["  ",f()(t.price).format("$0,0")," "]}),Object(c.jsxs)("span",{children:[Object(c.jsxs)("span",{className:"bedsBathSqftText",children:[0===t.beds?"-":t.beds,1===t.beds?" Bed":" Beds"]}),Object(c.jsxs)("span",{className:"bedsBathSqftText",children:[0===t.baths?"-":t.baths,1===t.baths?" Bath":" Baths"]}),Object(c.jsxs)("span",{className:"bedsBathSqftText",children:[0===t.sqft?"- ":f()(t.sqft).format("0,0")+" ","Sq. Ft."]})]}),Object(c.jsxs)("div",{className:"resultAddress",children:[t.address,", San Francisco, CA ",t.zipcode]})]})]})}var N=s.p+"static/media/circles-menu-1.ffc3c7e1.gif";function S(e){var t=e.searchResults,s=e.hasResults,a=e.priceSort,r=e.setSearchInput,i=e.isLoadingResults,l=Object(n.useState)({}),o=Object(b.a)(l,2),d=o[0],j=o[1],h=Object(n.useState)([]),p=Object(b.a)(h,2),m=p[0],f=p[1];Object(n.useEffect)((function(){var e=Math.round(t.length/10),s=t.length;1<e&&(s=10),j({groups:e,currentGroup:1,lowerRange:1,upperRange:s})}),[t]),Object(n.useEffect)((function(){if(s){for(var e=[],n=d.lowerRange-1;n<d.upperRange;n++){if(!t[n])return;e.push(Object(c.jsx)(I,{result:t[n],index:n},t[n]._id))}f(e)}}),[d,t]);var O=function(e){document.getElementById("logoBar").scrollIntoView({behavior:"smooth"});var s=e.target.classList.contains("previousPage"),c=d.currentGroup-(s?1:-1),n=function(e,s){var c=10*e-9;return e<s?[c,10*e]:[c,t.length]}(c,d.groups);j((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentGroup:c,lowerRange:n[0],upperRange:n[1]})}))},x=d.groups>1?Object(c.jsxs)("span",{id:"resultPageNavIcons",children:[1===d.currentGroup?null:Object(c.jsx)("button",{className:"btn btn-primary m-2 shadow-none previousPage",onClick:O,children:"Prev Page"}),d.currentGroup===d.groups?null:Object(c.jsx)("button",{className:"btn btn-primary m-2 shadow-none",onClick:O,children:"Next Page"})]}):null;return Object(c.jsxs)("div",{children:[i?Object(c.jsx)("div",{id:"loadingResults",children:Object(c.jsx)("img",{src:N,alt:"Loading logo"})}):null,Object(c.jsxs)("h3",{id:"searchResultsTitle",children:[s?null:"No results, try broadening your search",0===t.length?null:"Showing results "+d.lowerRange+"-"+d.upperRange+" of "+t.length,t.length>1?Object(c.jsxs)("select",{className:"priceSort form-select shadow-none",value:a,onChange:function(e){var t=e.target.value;r((function(e){return Object(u.a)(Object(u.a)({},e),{},{priceSort:t})}))},children:[Object(c.jsx)("option",{value:"ascending",children:"Price: Low to High"}),Object(c.jsx)("option",{value:"descending",children:"Price: High to Low"})]}):null]}),x,Object(c.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:m}),x]})}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/search",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=s(10),C=s.n(B);function A(){var e=document.getElementById("googleAddress").getAttribute("longitude"),t=document.getElementById("googleAddress").getAttribute("latitude");return C.a.lookup(t,e,"us").zipcode}var k=function(){var e=Object(n.useState)({address:"",googleAddress:"",zipcode:"",zipcodeRadius:"3",priceSort:"ascending"}),t=Object(b.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)({priceInputMin:"",priceInputMax:"",sqftInputMin:"",sqftInputMax:"",bedsInput:"",bathsInput:""}),i=Object(b.a)(r,2),l=i[0],h=i[1],m=Object(n.useState)(!1),f=Object(b.a)(m,2),O=f[0],x=f[1],g=Object(n.useState)([]),I=Object(b.a)(g,2),N=I[0],w=I[1],B=Object(n.useState)(!0),C=Object(b.a)(B,2),k=C[0],R=C[1],M=Object(n.useState)(!1),F=Object(b.a)(M,2),q=F[0],E=F[1],z=Object(n.useRef)(!0);Object(n.useEffect)((function(){z.current?z.current=!1:G()}),[s.priceSort]);var P=function(){var e=document.getElementById("searchBox"),t=document.getElementById("searchBoxContainer"),s=document.getElementById("backgroundFade");e.removeAttribute("search"),t.removeAttribute("search"),s.removeAttribute("search")},T=function(){var e=document.getElementById("googleAddress").getAttribute("resultName");a((function(t){return Object(u.a)(Object(u.a)({},t),{},{googleAddress:e||""})}))},L=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(u.a)(Object(u.a)({},s),l),T(),O&&(t.zipcode=A()),e.next=5,y(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),E(!0),e.next=4,L();case 4:t=e.sent,w(t),E(!1),0===t.length?R(!1):R(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{children:Object(c.jsx)(j,{})}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{id:"mainContent",className:"d-flex",children:[Object(c.jsx)("section",{id:"searchBoxContainer",search:"on",children:Object(c.jsxs)("div",{id:"searchBox",className:"card",search:"on",children:[Object(c.jsx)(p,{searchInput:s,setSearchInput:a,isGoogleAPIOn:O,setIsGoogleAPIOn:x}),Object(c.jsx)(v,{searchFilters:l,setSearchFilters:h}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:G,children:"Search"})]})}),Object(c.jsx)("section",{id:"searchResultsContainer",children:Object(c.jsx)(S,{searchResults:N,setSearchResults:w,hasResults:k,priceSort:s.priceSort,setSearchInput:a,isLoadingResults:q})}),Object(c.jsx)("div",{id:"backgroundFade"})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f553cdbc.chunk.js.map