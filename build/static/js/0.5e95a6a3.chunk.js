webpackJsonp([0],{146:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=o(a);o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}n(147);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputValue:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"getNumber",value:function(){return function(){return Math.sqrt(this.props.number/5)}}()},{key:"updateInputValue",value:function(){return function(e){this.setState({inputValue:e.target.value})}}()},{key:"renderCorrect",value:function(){return function(){return parseInt(this.getNumber())===parseInt(this.state.inputValue)?i.default.createElement("div",{className:"TShirt-palm"}):null}}()},{key:"render",value:function(){return function(){var e=this;return i.default.createElement("div",{className:"TShirt"},i.default.createElement("div",{className:"TShirt-img"},i.default.createElement("div",{className:"TShirt-name"},this.props.name),i.default.createElement("div",{className:"TShirt-number"},i.default.createElement("input",{value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},type:"number no-spinners"})),this.renderCorrect()))}}()}]),t}();t.default=u},147:function(e,t,n){var r=n(148);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1,transform:void 0};n(144)(r,a);r.locals&&(e.exports=r.locals)},148:function(e,t,n){var r=n(145);(e.exports=n(143)(!1)).push([e.i,".TShirt{-ms-flex-positive:1;flex-grow:1;min-height:200px;min-width:200px;font-size:19px;font-weight:700;font-family:Exotic}.TShirt .TShirt-img{background-image:url("+r(n(149))+");background-repeat:no-repeat;background-size:contain;height:100%;width:200px;margin:0 auto}.TShirt .TShirt-name{color:gold;text-align:center;padding-top:31px}.TShirt .TShirt-palm{background-image:url("+r(n(150))+");background-repeat:no-repeat;background-size:contain;height:100%;width:30px;margin:0 auto;margin-top:17px}.TShirt .TShirt-number{margin-top:10px}.TShirt .TShirt-number .no-spinners{-moz-appearance:textfield}.TShirt .TShirt-number .no-spinners::-webkit-inner-spin-button,.TShirt .TShirt-number .no-spinners::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.TShirt .TShirt-number input{-moz-appearance:textfield;font-family:Exotic;font-size:45px;color:gold;display:block;width:60px;height:60px;margin:0 auto;background-color:transparent;border:none;overflow:visible;text-align:center}.TShirt .TShirt-number input:focus{outline:none;caret-color:gold}",""])},149:function(e,t,n){e.exports=n.p+"static/media/tshirt.57565791.jpg"},150:function(e,t,n){e.exports=n.p+"static/media/palms.5798d7f1.png"},151:function(e,t,n){var r=n(152);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1,transform:void 0};n(144)(r,a);r.locals&&(e.exports=r.locals)},152:function(e,t,n){(e.exports=n(143)(!1)).push([e.i,".Dashboard{max-width:900px;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}",""])},62:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),a=i(n(146));function i(e){return e&&e.__esModule?e:{default:e}}n(151);t.default=function(){return r.default.createElement("div",{className:"Dashboard"},r.default.createElement(a.default,{name:"Tiki",number:180}),r.default.createElement(a.default,{name:"Taka",number:405}),r.default.createElement(a.default,{name:"Machicambo",number:845}),r.default.createElement(a.default,{name:"Licor",number:9245}),r.default.createElement(a.default,{name:"Agui.Haz",number:980}),r.default.createElement(a.default,{name:"Max Power",number:245}),r.default.createElement(a.default,{name:"Jorginho",number:500}),r.default.createElement(a.default,{name:"Bohada",number:605}),r.default.createElement(a.default,{name:"Uge",number:80}),r.default.createElement(a.default,{name:"Todassss",number:2205}),r.default.createElement(a.default,{name:"Kike",number:2645}),r.default.createElement(a.default,{name:"Xavi",number:0}))}}});