(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4c16"],{"3bd5":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"xterm",attrs:{id:"xterm"}})])}],r=(s("8a79"),s("1e25"),s("d3b7"),s("25f0"),s("fcf3")),i=s("47d0"),c=s("408b"),l=(s("abb2"),{name:"WebShell",data:function(){return{vm:{ip:"47.104.79.116",port:11901,agentId:"cubic"},socket:null,term:null,result:"",currType:"3",state:"",type:[1,3],msg:{1:{text:"进入自定义命令模式 "},3:{text:"进入 arthas命令模式 "}},rows:400,cols:100}},created:function(){console.log(this.$cookies.get("appId")),this.vm.agentId=this.$cookies.get("appId")},mounted:function(){this.startConnect(),this.interval()},methods:{initXterm:function(){this.rows=document.querySelector(".app-container").offsetHeight,this.cols=document.querySelector(".app-container").offsetWidth;var t=this;this.term=new r["Terminal"]({cursorBlink:!0,rows:parseInt(t.rows),cols:parseInt(t.cols),cursorStyle:"block",screenKeys:!0,theme:{foreground:"#7e9192",background:"#002833",cursor:"help",lineHeight:16}});var e=new i["FitAddon"];this.term.loadAddon(e),this.term.loadAddon(new c["WebLinksAddon"]),this.term.open(document.getElementById("xterm")),e.fit(),this.socket=new WebSocket("ws://"+this.vm.ip+":"+this.vm.port+"/ws"),this.term.focus(),this.term.writeln(" "),this.term.writeln(" > 欢迎进入Arthas代理终端，此终端可连接到目标机器进行命令操作"),this.term.writeln(""),this.term.writeln(" > Arthas 命令请查看文档 https://alibaba.github.io/arthas/commands.html"),this.term.writeln(""),this.term.writeln(" > 正在连接。。。"),this.term.writeln("")},resizeScreen:function(t){console.log("size",t);try{this.fitAddon.fit();var e=this;this.term.onResize((function(t){e.sendMessage(e.agentId,{Op:"resize",Cols:t.cols,Rows:t.rows})}))}catch(s){console.log("e",s.message)}},prompt:function(){this.term.write("\r\n$ ")},sendMessage:function(t,e){"clear"!==e?null!=this.socket&&this.socket.send(JSON.stringify({instanceUuid:this.vm.agentId,type:this.currType,command:e})):this.term.clear()},switchState:function(t){return"1"!==t&&"3"!==t||(this.currType=t,this.prompt(),this.term.write(this.msg[t].text+"\r\n"),this.result="",!1)},socketOnMessage:function(){var t=this;this.socket.onmessage=function(e){if(console.log(e),"message"===e.type){var s=e.data;t.term.write(s),s.toString().trimEnd().endsWith("$")||3===t.currType||t.prompt()}}},termOnKey:function(){var t=this;console.log(this.term),this.term.onKey((function(e){var s=!e.domEvent.altKey&&!e.domEvent.ctrlKey;if("Enter"===e.domEvent.code){var n=t.switchState(t.result);n&&(t.sendMessage(t.vm.agentId,t.result),t.result=""),t.prompt()}else"Backspace"===e.domEvent.code?t.term._core.buffer.x>2&&(t.result=t.result.substring(0,t.result.length-1),t.term.write("\b \b")):s&&(t.term.write(e.key),t.result+=e.key)}))},socketOnOpen:function(){var t=this;this.socket.onopen=function(){t.term.writeln(" > 已连接, 当前 IP : "+t.vm.ip+", ID: "+t.vm.agentId),t.prompt(),t.termOnKey(),t.socketOnMessage();var e=t;document.addEventListener("paste",(function(t){var s=t.clipboardData.getData("text/plain");e.term.write(s),e.result+=s,t.stopPropagation()}))}},socketOnClose:function(){var t=this;this.socket.onclose=function(){null!=t.term&&(t.term.writeln(" websocket channel close, please reconnect!"),t.prompt())}},socketOnError:function(){var t=this;this.socket.onerror=function(){t.socket=null,t.term.writeln(" websocket channel error ,will close this,please reconnect!"),t.prompt()}},disconnect:function(){try{null!=this.socket&&(this.socket.send(JSON.stringify({instanceUuid:this.vm.agentId,type:999,command:this.result})),this.socket.close(),this.socket=null,console.log("closed ws succ!")),null!=this.term&&(this.term.dispose(),console.log("dispose xterm succ!")),console.log("Connection was closed successfully!")}catch(t){console.log("No connection, please start connect first.")}},startConnect:function(){this.disconnect(),this.initXterm(),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()},interval:function(){var t=this;window.setInterval((function(){null!==t.socket&&t.socket.send(JSON.stringify({instanceUuid:t.vm.agentId,type:0,command:1}))}),5e3)}}}),a=l,h=s("2877"),m=Object(h["a"])(a,n,o,!1,null,null,null);e["default"]=m.exports}}]);