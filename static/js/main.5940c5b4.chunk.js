(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n(311)},126:function(e,t,n){},161:function(e,t){},163:function(e,t){},190:function(e,t){},235:function(e,t){},309:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n.n(i),r=n(115),s=n.n(r),o=(n(126),n(14)),c=n.n(o),d=n(30),l=n(116),p=n(117),u=n(119),m=n(118),y=n(120),f=n(59),b=n(42),g=n.n(b),T=function(){return new Promise(function(e,t){window.addEventListener("load",Object(d.a)(c.a.mark(function n(){var i,a,r,s;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return i=new g.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(a=window.web3,console.log("Injected web3 detected."),e(a)):(r=new g.a.providers.HttpProvider("http://127.0.0.1:7545"),s=new g.a(r),console.log("No web3 instance injected, using Local web3."),e(s));case 14:case"end":return n.stop()}},n,this,[[2,8]])})))})},D=(n(309),function(e){function t(){var e,n;Object(l.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={storageValue:0,web3:null,accounts:null,contract:null},n.componentDidMount=Object(d.a)(c.a.mark(function e(){var t,i,a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return i=e.sent,e.next=9,t.eth.net.getId();case 9:a=e.sent,r=f.networks[a],console.log(r),console.log(r),s=new t.eth.Contract(f.abi,r&&r.address),n.setState({web3:t,accounts:i,contract:s},n.runExample),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 21:case"end":return e.stop()}},e,this,[[0,17]])})),n.runExample=Object(d.a)(c.a.mark(function e(){var t,i,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,i=t.accounts,a=t.contract,e.next=3,a.methods.set(5).send({from:i[0]});case 3:return e.next=5,a.methods.get().call();case 5:r=e.sent,n.setState({storageValue:r});case 7:case"end":return e.stop()}},e,this)})),n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.web3?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Good to Go!"),a.a.createElement("p",null,"Your Truffle Box is installed and ready."),a.a.createElement("h2",null,"Smart Contract Example"),a.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),a.a.createElement("p",null,"Try changing the value stored on ",a.a.createElement("strong",null,"line 40")," of App.js."),a.a.createElement("div",null,"The stored value is: ",this.state.storageValue)):a.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e){e.exports={contractName:"SimpleStorage",abi:[{constant:!1,inputs:[{name:"x",type:"uint256"}],name:"set",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"get",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],metadata:'{"compiler":{"version":"0.5.8+commit.23d335f2"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"/Users/shirin/Desktop/Thesis/Implementation/MSc-Thesis/truffle-test/contracts/SimpleStorage.sol":"SimpleStorage"},"evmVersion":"petersburg","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"/Users/shirin/Desktop/Thesis/Implementation/MSc-Thesis/truffle-test/contracts/SimpleStorage.sol":{"keccak256":"0x27a650f3e92e6057b3f1239be6fc335fb57d75c570d7274d8902eb0b04e48014","urls":["bzzr://72f63578772843cf2f8ae2bce4a69c027cbfe7f3e04cc4af14ca023bdc3c35c2"]}},"version":1}',bytecode:"0x608060405234801561001057600080fd5b5060bd8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea165627a7a7230582021de8af3b3049427324ef08cceb94323f0c9945f9310c5532562b17d76124e110029",deployedBytecode:"0x6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea165627a7a7230582021de8af3b3049427324ef08cceb94323f0c9945f9310c5532562b17d76124e110029",sourceMap:"25:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:176:1;;;;;;;",deployedSourceMap:"25:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:176:1;;;;;;;;;;;;;;;;;;;;;;;;72:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;72:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;129:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;72:53;119:1;106:10;:14;;;;72:53;:::o;129:70::-;165:4;184:10;;177:17;;129:70;:::o",source:"pragma solidity ^0.5.0;\n\ncontract SimpleStorage {\n  uint storedData;\n\n  function set(uint x) public {\n    storedData = x;\n  }\n\n  function get() public view returns (uint) {\n    return storedData;\n  }\n}\n",sourcePath:"/Users/shirin/Desktop/Thesis/Implementation/MSc-Thesis/truffle-test/contracts/SimpleStorage.sol",ast:{absolutePath:"/Users/shirin/Desktop/Thesis/Implementation/MSc-Thesis/truffle-test/contracts/SimpleStorage.sol",exportedSymbols:{SimpleStorage:[79]},id:80,nodeType:"SourceUnit",nodes:[{id:58,literals:["solidity","^","0.5",".0"],nodeType:"PragmaDirective",src:"0:23:1"},{baseContracts:[],contractDependencies:[],contractKind:"contract",documentation:null,fullyImplemented:!0,id:79,linearizedBaseContracts:[79],name:"SimpleStorage",nodeType:"ContractDefinition",nodes:[{constant:!1,id:60,name:"storedData",nodeType:"VariableDeclaration",scope:79,src:"52:15:1",stateVariable:!0,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:59,name:"uint",nodeType:"ElementaryTypeName",src:"52:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"},{body:{id:69,nodeType:"Block",src:"100:25:1",statements:[{expression:{argumentTypes:null,id:67,isConstant:!1,isLValue:!1,isPure:!1,lValueRequested:!1,leftHandSide:{argumentTypes:null,id:65,name:"storedData",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:60,src:"106:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:66,name:"x",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:62,src:"119:1:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},src:"106:14:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},id:68,nodeType:"ExpressionStatement",src:"106:14:1"}]},documentation:null,id:70,implemented:!0,kind:"function",modifiers:[],name:"set",nodeType:"FunctionDefinition",parameters:{id:63,nodeType:"ParameterList",parameters:[{constant:!1,id:62,name:"x",nodeType:"VariableDeclaration",scope:70,src:"85:6:1",stateVariable:!1,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:61,name:"uint",nodeType:"ElementaryTypeName",src:"85:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"84:8:1"},returnParameters:{id:64,nodeType:"ParameterList",parameters:[],src:"100:0:1"},scope:79,src:"72:53:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:77,nodeType:"Block",src:"171:28:1",statements:[{expression:{argumentTypes:null,id:75,name:"storedData",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:60,src:"184:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:74,id:76,nodeType:"Return",src:"177:17:1"}]},documentation:null,id:78,implemented:!0,kind:"function",modifiers:[],name:"get",nodeType:"FunctionDefinition",parameters:{id:71,nodeType:"ParameterList",parameters:[],src:"141:2:1"},returnParameters:{id:74,nodeType:"ParameterList",parameters:[{constant:!1,id:73,name:"",nodeType:"VariableDeclaration",scope:78,src:"165:4:1",stateVariable:!1,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:72,name:"uint",nodeType:"ElementaryTypeName",src:"165:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"164:6:1"},scope:79,src:"129:70:1",stateMutability:"view",superFunction:null,visibility:"public"}],scope:80,src:"25:176:1"}],src:"0:202:1"},legacyAST:{absolutePath:"/Users/shirin/Desktop/Thesis/Implementation/MSc-Thesis/truffle-test/contracts/SimpleStorage.sol",exportedSymbols:{SimpleStorage:[79]},id:80,nodeType:"SourceUnit",nodes:[{id:58,literals:["solidity","^","0.5",".0"],nodeType:"PragmaDirective",src:"0:23:1"},{baseContracts:[],contractDependencies:[],contractKind:"contract",documentation:null,fullyImplemented:!0,id:79,linearizedBaseContracts:[79],name:"SimpleStorage",nodeType:"ContractDefinition",nodes:[{constant:!1,id:60,name:"storedData",nodeType:"VariableDeclaration",scope:79,src:"52:15:1",stateVariable:!0,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:59,name:"uint",nodeType:"ElementaryTypeName",src:"52:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"},{body:{id:69,nodeType:"Block",src:"100:25:1",statements:[{expression:{argumentTypes:null,id:67,isConstant:!1,isLValue:!1,isPure:!1,lValueRequested:!1,leftHandSide:{argumentTypes:null,id:65,name:"storedData",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:60,src:"106:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},nodeType:"Assignment",operator:"=",rightHandSide:{argumentTypes:null,id:66,name:"x",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:62,src:"119:1:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},src:"106:14:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},id:68,nodeType:"ExpressionStatement",src:"106:14:1"}]},documentation:null,id:70,implemented:!0,kind:"function",modifiers:[],name:"set",nodeType:"FunctionDefinition",parameters:{id:63,nodeType:"ParameterList",parameters:[{constant:!1,id:62,name:"x",nodeType:"VariableDeclaration",scope:70,src:"85:6:1",stateVariable:!1,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:61,name:"uint",nodeType:"ElementaryTypeName",src:"85:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"84:8:1"},returnParameters:{id:64,nodeType:"ParameterList",parameters:[],src:"100:0:1"},scope:79,src:"72:53:1",stateMutability:"nonpayable",superFunction:null,visibility:"public"},{body:{id:77,nodeType:"Block",src:"171:28:1",statements:[{expression:{argumentTypes:null,id:75,name:"storedData",nodeType:"Identifier",overloadedDeclarations:[],referencedDeclaration:60,src:"184:10:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},functionReturnParameters:74,id:76,nodeType:"Return",src:"177:17:1"}]},documentation:null,id:78,implemented:!0,kind:"function",modifiers:[],name:"get",nodeType:"FunctionDefinition",parameters:{id:71,nodeType:"ParameterList",parameters:[],src:"141:2:1"},returnParameters:{id:74,nodeType:"ParameterList",parameters:[{constant:!1,id:73,name:"",nodeType:"VariableDeclaration",scope:78,src:"165:4:1",stateVariable:!1,storageLocation:"default",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"},typeName:{id:72,name:"uint",nodeType:"ElementaryTypeName",src:"165:4:1",typeDescriptions:{typeIdentifier:"t_uint256",typeString:"uint256"}},value:null,visibility:"internal"}],src:"164:6:1"},scope:79,src:"129:70:1",stateMutability:"view",superFunction:null,visibility:"public"}],scope:80,src:"25:176:1"}],src:"0:202:1"},compiler:{name:"solc",version:"0.5.8+commit.23d335f2.Emscripten.clang"},networks:{5777:{events:{},links:{},address:"0xEc6e0b9A000bB8715BDC329d170362f1EF29DcFd",transactionHash:"0xbdd83f82703a6d8e15ef2f7999a480ee2834c7f3cee3f1e403d89e42fbaf629e"},1568216227913:{events:{},links:{},address:"0x8D99eA66Fb17c0315735F18C97E7c3A7BA72e679",transactionHash:"0x2557630930d5fc452e20279c72befc02045dd2577709390d0352e82f36beb95d"}},schemaVersion:"3.0.15",updatedAt:"2019-09-11T17:11:36.449Z",devdoc:{methods:{}},userdoc:{methods:{}}}}},[[121,2,1]]]);
//# sourceMappingURL=main.5940c5b4.chunk.js.map