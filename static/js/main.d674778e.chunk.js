(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(3),i=c.n(a),r=c(4),o=c(5),l=c(6),d=c(8),j=c(7),u=(c(13),c(0)),b=function(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positivePercent;return Object(u.jsxs)("ul",{className:"Statistics",children:[Object(u.jsxs)("li",{className:"Statistics_Item",children:["Good",Object(u.jsx)("span",{children:t})]}),Object(u.jsxs)("li",{className:"Statistics_Item",children:["Neutral",Object(u.jsx)("span",{children:c})]}),Object(u.jsxs)("li",{className:"Statistics_Item",children:["Bad",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("li",{className:"Statistics_Item",children:["Total",Object(u.jsx)("span",{children:s})]}),Object(u.jsxs)("li",{className:"Statistics_Item",children:["Positive feedback",Object(u.jsxs)("span",{children:[a,"%"]})]})]})},h=(c(15),function(e){var t=e.options,c=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:"FeedbackOptions",children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"FeedbackOptions_Button",type:"button",onClick:function(){return c(e)},children:e})},e)}))})}),O=(c(16),function(e){var t=e.message;return Object(u.jsx)("p",{className:"Notification",children:t})}),f=(c(17),function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{className:"Section",children:[t&&Object(u.jsx)("h2",{className:"Section_Title",children:t}),c]})}),p=(c(18),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return parseInt(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=!!this.state.good||!!this.state.neutral||!!this.state.bad;return Object(u.jsxs)("div",{className:"AppRoot",children:[Object(u.jsx)(f,{title:"Please leave feedback",children:Object(u.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.handleIncrement})}),Object(u.jsx)(f,{title:"Upload stats",children:e?Object(u.jsx)(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercent:this.countPositiveFeedbackPercentage()}):Object(u.jsx)(O,{message:"No feedback given"})})]})}}]),c}(s.a.Component));i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d674778e.chunk.js.map