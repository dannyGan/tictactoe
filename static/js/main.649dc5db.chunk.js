(this["webpackJsonpreact-yarn"]=this["webpackJsonpreact-yarn"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),c=(a(14),a(1)),l=a(2),u=a(4),o=a(3),m=a(5);var h=function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value))},d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8))))}}]),t}(r.Component),v=a(8);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(v.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();b(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=b(r.squares),i=a.map((function(e,a){var r=a?"Go to move #"+a:"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},r))}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(d,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,i))))}}]),t}(r.Component),p=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Tic Tac Toe"),n.a.createElement(f,null))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.649dc5db.chunk.js.map