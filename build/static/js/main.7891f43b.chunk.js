(window["webpackJsonpwould-you-rather"]=window["webpackJsonpwould-you-rather"]||[]).push([[0],{52:function(e,t,n){e.exports=n.p+"static/media/pic1.007abbb5.jpg"},53:function(e,t,n){e.exports=n.p+"static/media/pic2.06f20a9c.jpg"},54:function(e,t,n){e.exports=n.p+"static/media/pic3.771edd67.jpg"},62:function(e,t,n){e.exports=n(85)},67:function(e,t,n){},68:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),s=n.n(o),l=(n(67),n(12)),i=n(13),u=n(15),c=n(14),p=n(16),m=(n(68),n(8)),d=n(22),h=n(95),f=n(93),v=n(87),E=function(e){var t=e.allUsers,n=[],o=!0,s=!1,l=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value;n.push(c)}}catch(p){s=!0,l=p}finally{try{o||null==u.return||u.return()}finally{if(s)throw l}}return n=n.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id}," ",e.name," ")}),r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{style:{width:"18rem",margin:"0 auto"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"Select User"),r.a.createElement(f.a,null,r.a.createElement("select",{value:e.userToBeLogged,onChange:e.changeUser},r.a.createElement("option",{defaultValue:!0,hidden:!0},"Choose User"),n),r.a.createElement(v.a,{disabled:""===e.userToBeLogged,onClick:e.clickedLog,style:{marginTop:"10px",display:"flex"}},"Submit")))))},b=n(10),g=n(52),O=n.n(g),w=n(53),y=n.n(w),S=n(54),U=n.n(S);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:O.a,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:y.a,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:U.a,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},Q={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function x(e){return new Promise(function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout(function(){Q=A({},Q,Object(b.a)({},r.id,r)),T=A({},T,Object(b.a)({},a,A({},T[a],{questions:T[a].questions.concat([r.id])}))),t(r)},1e3)})}function k(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){T=A({},T,Object(b.a)({},t,A({},T[t],{answers:A({},T[t].answers,Object(b.a)({},n,a))}))),Q=A({},Q,Object(b.a)({},n,A({},Q[n],Object(b.a)({},a,A({},Q[n][a],{votes:Q[n][a].votes.concat([t])}))))),e()},500)})}var _=function(e,t,n,a){var r=n.filter(function(t){return t.id===e});return{type:"LOGIN_USER",user:r=r[0],allQuestions:t,token:a}},L=function(){return function(e){e({type:"SET_ALL_USERS_QUESTIONS_START"}),new Promise(function(e,t){setTimeout(function(){return e(A({},Q))},1e3)}).then(function(t){return e(function(e){return{type:"SET_ALL_USERS_QUESTIONS_SUCCESS",questions:e}}(t))}).catch(function(t){return e({type:"SET_ALL_USERS_QUESTIONS_FAIL"})})}},q=function(){return function(e){e({type:"GET_ALL_USERS_START"}),new Promise(function(e,t){setTimeout(function(){return e(A({},T))},1e3)}).then(function(t){return e(function(e){return{type:"GET_ALL_USERS_SUCCESS",users:Object.values(e)}}(t))}).catch(function(t){return e({type:"GET_ALL_USERS_FAIL"})})}},I=n(88),P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={user:""},n.selectUserHandler=function(e){n.setState({user:e.target.value})},n.onLoginHandler=function(e){e.preventDefault();var t=n.props.allUsers.filter(function(e){return e.id===n.state.user});t=t[0],n.props.onLoginUser(t.id,n.props.allQuestions,n.props.allUsers)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement(I.a,{animation:"border"});return this.props.allUsers&&(e=r.a.createElement(E,{changeUser:this.selectUserHandler,userToBeLogged:this.state.user,clickedLog:this.onLoginHandler,allUsers:this.props.allUsers})),this.props.loggedUser&&(e=r.a.createElement(d.a,{to:"/"})),r.a.createElement("div",null," ",e," ")}}]),t}(a.Component),N=Object(m.b)(function(e){return{allQuestions:e.Home.allQuestions,allUsers:e.Home.allUsers,loggedUser:null!==e.User.loggedUser}},function(e){return{onLoginUser:function(t,n,a){return e(_(t,n,a))}}})(P),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.logoutUser()}},{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement(d.a,{to:"/Login"})," ")}}]),t}(a.Component),D=Object(m.b)(null,function(e){return{logoutUser:function(){return e({type:"LOGOUT_USER"})}}})(C),R=n(30),F=n(51),H=n(89),z=n(90),B=n(6),G=function(e){var t=e.userName,n=e.question;return r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:e.avatar}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null," Asked By - ",t," "),r.a.createElement(h.a.Text,null,"optionOne - ",n.optionOne.text),r.a.createElement(B.b,{to:"/questions/".concat(n.id)},r.a.createElement(v.a,{variant:"primary"},"Watch Full question")))))},V=function(e){var t=e.userName,n=e.question;return r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:e.avatar}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null," Asked By - ",t," "),r.a.createElement(h.a.Text,null,"optionOne - ",n.optionOne.text),r.a.createElement(B.b,{to:"/questions/".concat(n.id)},r.a.createElement(v.a,{variant:"primary"},"Watch Full answer INFO"))))},W=function(e){var t=[],n=[];if(!e.showAnswers){var a=!0,o=!1,s=void 0;try{for(var l,i=function(){var n=l.value,a=e.allUsers.filter(function(e){return e.id===n.author})[0].avatarURL,o=e.allUsers.filter(function(e){return e.id===n.author})[0].name;t.push(r.a.createElement(F.a,{sm:!0,key:n.id},r.a.createElement(G,{avatar:a,showFullPollFunc:e.showFullPollFunc,allUsers:e.allUsers,question:n,userName:o})))},u=e.notAnsweredQuestions[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)i()}catch(E){o=!0,s=E}finally{try{a||null==u.return||u.return()}finally{if(o)throw s}}}if(e.showAnswers){var c=!0,p=!1,m=void 0;try{for(var d,h=function(){var t=d.value,a=e.allUsers.filter(function(e){return e.id===t.author})[0].name,o=e.allUsers.filter(function(e){return e.id===t.author})[0].avatarURL;n.push(r.a.createElement(F.a,{sm:!0,key:t.id},r.a.createElement(V,{avatar:o,showFullAnswered:e.showFullAnswered,allUsers:e.allUsers,question:t,userName:a})))},f=e.answeredQuestions[Symbol.iterator]();!(c=(d=f.next()).done);c=!0)h()}catch(E){p=!0,m=E}finally{try{c||null==f.return||f.return()}finally{if(p)throw m}}}return r.a.createElement(H.a,{style:{display:"flex"}},r.a.createElement(z.a,{style:{display:"block"}},r.a.createElement(v.a,{onClick:e.switchQA,style:{display:"block",margin:"0 auto"}}," Questions"),t),r.a.createElement(z.a,{style:{display:"block",marginLeft:"auto"}},r.a.createElement(v.a,{onClick:e.switchQA,style:{display:"block",margin:"0 auto"}},"answered Questions"),n))},M=function(e){console.log(e);var t=e.question,n=e.allUsers.filter(function(e){return e.id===t.author})[0].name,a=r.a.createElement(h.a,{bg:"info",text:"white",style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:e.user.avatarURL}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null," Asked By - ",n," "),r.a.createElement(h.a.Text,{as:"div"},r.a.createElement("p",null,"Would you rather"),r.a.createElement("hr",null),r.a.createElement(v.a,{style:{color:"white"},variant:"outline-warning",onClick:function(){return e.chooseOption("optionOne")}},"option One - ",t.optionOne.text),r.a.createElement("hr",null),r.a.createElement(v.a,{variant:"outline-warning",style:{color:"white"},onClick:function(){return e.chooseOption("optionTwo")}},"option Two - ",t.optionTwo.text)),r.a.createElement("hr",null),r.a.createElement(v.a,{variant:"primary",onClick:function(){return e.saveQuestion(t.id)}}," Submit"),r.a.createElement(v.a,{variant:"danger",onClick:function(){return e.history.push("/")}},"Cancel")));return e.submitAnswer&&(a=r.a.createElement("div",null," ",r.a.createElement(d.a,{to:"/"})," ")),r.a.createElement("div",null,a)},J=n(97),$=n(91),K=n(92);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Y=function(e){console.log(e);var t=e.question,n=e.user,o=Object.values(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t.id)).join(""),s=n.answers[o],l=t.optionOne.votes.length+t.optionTwo.votes.length,i=100*l,u=(100*t.optionOne.votes.length/i*100).toFixed(),c=(100*t.optionTwo.votes.length/i*100).toFixed(),p=r.a.createElement($.a,null,r.a.createElement(h.a,{style:{width:"18rem"},bg:"success",text:"white"},r.a.createElement(h.a.Header,null,"Option One - ",t.optionOne.text),r.a.createElement(K.a,{variant:"flush",style:{color:"black"}},r.a.createElement(K.a.Item,null,"Number of people voted for this - ",t.optionOne.votes.length," out of ",l),r.a.createElement(K.a.Item,null," ",r.a.createElement(J.a,{now:u,label:"".concat(u,"%")})," "))),r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Header,null,"Option Two - ",t.optionTwo.text),r.a.createElement(K.a,{variant:"success"},r.a.createElement(K.a.Item,null,"Number of people voted for this - ",t.optionTwo.votes.length," out of ",l,"  "),r.a.createElement(K.a.Item,null,r.a.createElement(J.a,{now:c,label:"".concat(c,"%")})))));return"optionTwo"===s&&(p=r.a.createElement($.a,null,r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Header,null,"Option One - ",t.optionOne.text),r.a.createElement(K.a,{variant:"flush"},r.a.createElement(K.a.Item,null,"Number of people voted for this - ",t.optionOne.votes.length," out of ",l),r.a.createElement(K.a.Item,null," ",r.a.createElement(J.a,{now:u,label:"".concat(u,"%")})," "))),r.a.createElement(h.a,{style:{width:"18rem"},bg:"success",text:"white"},r.a.createElement(h.a.Header,null,"Option Two - ",t.optionTwo.text),r.a.createElement(K.a,{variant:"flush",style:{color:"black"}},r.a.createElement(K.a.Item,null,"Number of people voted for this - ",t.optionTwo.votes.length," out of ",l,"  "),r.a.createElement(K.a.Item,null,r.a.createElement(J.a,{now:c,label:"".concat(c,"%")})))))),r.a.createElement(a.Fragment,null,p,r.a.createElement(v.a,{variant:"danger",onClick:function(){return e.history.push("/")}},"GoBack"))},Z=function(e){var t="";e.notAnsweredQuestions&&e.user&&(t=r.a.createElement(d.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(W,Object.assign({},e,t,{showAnswers:e.showAnswers,switchQA:e.switchQA,allUsers:e.allUsers,answeredQuestions:e.answeredQuestions,notAnsweredQuestions:e.notAnsweredQuestions,user:e.user}))}}));var n=e.notAnsweredQuestions.map(function(t){return r.a.createElement(d.b,{exact:!0,key:t.id,path:"/questions/".concat(t.id),render:function(n){return r.a.createElement(M,Object.assign({},e,n,{user:e.user,submitAnswer:e.submitAnswer,chooseOption:e.chooseOption,saveQuestion:e.saveQuestion,allUsers:e.allUsers,cancelFullPoll:e.cancelFullPoll,question:t}))}})}),a=e.answeredQuestions.map(function(t){return r.a.createElement(d.b,{exact:!0,key:t.id,path:"/questions/".concat(t.id),render:function(n){return r.a.createElement(Y,Object.assign({},e,n,{canceled:e.cancelFullAnswer,user:e.user,question:t}))}})});return e.loading&&(t=r.a.createElement(I.a,{animation:"border",role:"status"})),r.a.createElement("div",null,t,n,a)},ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={showAnswers:!1,submitAnswer:!1,chooseOption:"",allQuestions:null,questionAnswered:null},n.showAnswersHandler=function(){n.setState(function(e){return{showAnswers:!e.showAnswers}})},n.chooseOptionHandler=function(e){n.setState({chooseOption:e})},n.saveQuestionHandler=function(e){var t={authedUser:n.props.loggedUser.id,qid:e,answer:n.state.chooseOption};n.props.onSaveAnswerInit(t),n.props.onSetAllUsersInit(),n.props.onSetAllQuestions(),n.setState({submitAnswer:!0,questionAnswered:e})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(this.props.allQuestions){var e=Object(R.a)(this.props.allQuestions);this.setState({allQuestions:e})}}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.allQuestions&&this.state.allQuestions.length!==this.props.allQuestions.length){var t=Object(R.a)(this.props.allQuestions);this.setState({allQuestions:t});var n=this.props.allUsers.filter(function(t){return t.id===e.props.loggedUser.id});n=n[0],this.setState({allQuestions:t},function(){e.props.onLoginUser(n.id,e.props.allQuestions,e.props.allUsers)})}if(this.state.submitAnswer&&!this.props.loading){var a=this.props.allUsers.filter(function(t){return t.id===e.props.loggedUser.id});a=a[0],this.props.onLoginUser(a.id,this.props.allQuestions,this.props.allUsers),this.setState({submitAnswer:!1},function(){e.props.history.push("/questions/".concat(e.state.questionAnswered))})}}},{key:"render",value:function(){var e=r.a.createElement("p",null,"Please Log In ");return this.props.loading&&(e=r.a.createElement(I.a,{animation:"border",role:"status"})),this.props.loggedUser&&!this.props.loading&&(e=r.a.createElement(Z,{user:this.props.loggedUser,submitAnswer:this.state.submitAnswer,allUsers:this.props.allUsers,showAnswers:this.state.showAnswers,answeredQuestions:this.props.answeredQuestions,notAnsweredQuestions:this.props.notAnsweredQuestions,chooseOption:this.chooseOptionHandler,saveQuestion:this.saveQuestionHandler,switchQA:this.showAnswersHandler})),r.a.createElement("div",null,e)}}]),t}(a.Component),te=Object(m.b)(function(e){return{loading:e.Home.loading,allQuestions:e.Home.allQuestions,allUsers:e.Home.allUsers,answeredQuestions:e.User.answeredQuestions,notAnsweredQuestions:e.User.notAnsweredQuestions,loggedUser:e.User.loggedUser}},function(e){return{onLoginUser:function(t,n,a){return e(_(t,n,a))},onSetAllUsersInit:function(){return e(q())},onSetAllQuestions:function(){return e(L())},onSaveAnswerInit:function(t){return e(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){e({type:"SAVE_QUESTION_ANSWER_START"}),k({authedUser:t,qid:n,answer:a}).then(function(t){return e({type:"SAVE_QUESTION_ANSWER_SUCCESS"})}).catch(function(t){return e({type:"SAVE_QUESTION_ANSWER_FAIL"})})}}(t))}}})(ee),ne=n(94),ae=n(58),re=n(59),oe=n(96),se=function(e){var t=r.a.createElement(oe.a,{className:"mr-auto"},r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/",className:"nav-link",activeClassName:"nav-link active",exact:!0},"Home")));return e.user&&(t=r.a.createElement(oe.a,{className:"mr-auto"},r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/",className:"nav-link",activeClassName:"nav-link active",exact:!0},"Home")),r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/add",className:"nav-link",activeClassName:"nav-link active",exact:!0},"New Question")),r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/leaderboard",className:"nav-link",activeClassName:"nav-link active",exact:!0},"Leaders Board")))),r.a.createElement(a.Fragment,null,t)},le=function(e){var t=r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/login"},r.a.createElement(v.a,{variant:"outline-success"},"Login")));return e.name&&(t=r.a.createElement(a.Fragment,null,r.a.createElement(oe.a.Item,null,r.a.createElement(B.b,{to:"/logout"},r.a.createElement(v.a,{variant:"outline-danger"},"Logout"))),r.a.createElement(oe.a.Item,{style:{marginLeft:"7px"}},r.a.createElement(B.b,{to:"/"},r.a.createElement(v.a,{variant:"primary"},e.name))))),t},ie=function(e){return r.a.createElement(ne.a,{bg:"dark",variant:"dark"},r.a.createElement(ne.a.Brand,null," ",r.a.createElement(ae.a,{icon:re.a,color:"orange"})," "),r.a.createElement(se,{user:e.userStatus}),r.a.createElement(le,{name:e.userStatus?e.userStatus.name:null}))},ue=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ie,{userStatus:this.props.userStatus}),r.a.createElement("main",{style:{marginTop:"32px"}},this.props.children))}}]),t}(a.Component),ce=Object(m.b)(function(e){return{userStatus:e.User.loggedUser}})(ue),pe=n(57),me=function(e){return r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:e.user.avatarURL}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.user.name)),r.a.createElement(K.a,{className:"list-group-flush"},r.a.createElement(pe.a,null," Total Score - ",e.totalPoints),r.a.createElement(pe.a,null," answer Score - ",e.answersPoints),r.a.createElement(pe.a,null," question Score - ",e.questionsPoints)))},de=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.allUsers.map(function(e){var t=Object.values(e.answers).length,n=e.questions.length,a=t+n;return r.a.createElement(me,{key:e.id,answersPoints:t,questionsPoints:n,totalPoints:a,user:e})});return e=e.sort(function(e,t){return e.props.totalPoints-t.props.totalPoints}).reverse(),console.log(e),r.a.createElement("div",null,e)}}]),t}(a.Component),he=Object(m.b)(function(e){return{allUsers:e.Home.allUsers}})(de),fe=function(e){return r.a.createElement(f.a,{validated:!0},r.a.createElement(f.a.Row,null,r.a.createElement(F.a,null,r.a.createElement(f.a.Control,{placeholder:"Option One",value:e.optionOne,onChange:function(t){return e.changed(t,"optionOne")},required:!0})),r.a.createElement(F.a,null,r.a.createElement(f.a.Control,{placeholder:"Option Two",value:e.optionTwo,onChange:function(t){return e.changed(t,"optionTwo")},required:!0}))),r.a.createElement(v.a,{type:"submit",disabled:!e.isValid,onClick:function(t){return e.submit(t)}},"Submit Question"))};function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={optionOne:{value:"",rules:{required:!0},valid:!1},optionTwo:{value:"",rules:{required:!0},valid:!1},validForm:!1},n.changeOptionValueHandler=function(e,t){var a=!1,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state[t],{value:e.target.value,valid:n.checkValid(e.target.value,n.state[t].rules)});n.setState(Object(b.a)({},t,r),function(){n.state.optionOne.valid&&n.state.optionTwo.valid&&(a=!0),n.setState({validForm:a})})},n.checkValid=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),n},n.submitFormHandler=function(e){e.preventDefault();var t={optionOneText:n.state.optionOne.value,optionTwoText:n.state.optionTwo.value,author:n.props.loggedUser.id};n.props.onAddQuestion(t),n.props.history.push("/")},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Would you rather"),r.a.createElement(fe,{changed:this.changeOptionValueHandler,optionOne:this.state.optionOne.value,optionTwo:this.state.optionTwo.value,isValid:this.state.validForm,submit:this.submitFormHandler}))}}]),t}(a.Component),be=Object(m.b)(function(e){return{loggedUser:e.User.loggedUser,allQuestions:e.Home.allQuestions}},function(e){return{onAddQuestion:function(t){return e(function(e){return function(t){t({type:"ADD_QUESTION_START"}),x(e).then(function(e){return t({type:"ADD_QUESTION_SUCCESS",newQuestion:e})}).catch(function(e){return t({type:"ADD_QUESTION_FAIL"})})}}(t))}}})(Ee),ge=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetAllUsersInit(),this.props.onSetAllQuestions()}},{key:"componentDidUpdate",value:function(){console.log(this.props.allUsers),!this.props.loggedUser&&this.props.allQuestions&&this.props.allUsers&&(console.log("token"),this.props.onAutoLogin(this.props.allQuestions,this.props.allUsers))}},{key:"render",value:function(){var e=r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/login",component:N,exact:!0}),r.a.createElement(d.b,{path:"/",component:te,exact:!0}),r.a.createElement(d.a,{to:"/"}));return this.props.loggedUser&&(e=r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/login",component:N,exact:!0}),r.a.createElement(d.b,{path:"/logout",component:D,exact:!0}),r.a.createElement(d.b,{path:"/leaderboard",component:he,exact:!0}),r.a.createElement(d.b,{path:"/add",component:be,exact:!0}),r.a.createElement(d.b,{path:"/questions/:id",component:te,exact:!0}),r.a.createElement(d.b,{path:"/",component:te,exact:!0}),r.a.createElement(d.a,{to:"/"}))),r.a.createElement(ce,null,e)}}]),t}(a.Component),Oe=Object(m.b)(function(e){return{token:e.User.token,loggedUser:e.User.loggedUser,allQuestions:e.Home.allQuestions,allUsers:e.Home.allUsers,unAnsweredQuestions:e.User.unAnsweredQuestions,answeredQuestions:e.User.answeredQuestions}},function(e){return{onAutoLogin:function(t,n){return e(function(e,t){return function(n){var a=localStorage.getItem("token");n(a?_(a,e,t,a):{type:"LOGOUT_USER"})}}(t,n))},onGetAllUsersInit:function(){return e(q())},onSetAllQuestions:function(){return e(L())}}})(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=n(24),ye=n(61);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Ue=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t)},je={notAnsweredQuestions:[],answeredQuestions:[],loggedUser:null,loading:!1,token:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":var n=Object.keys(t.user.answers),a=t.allQuestions.filter(function(e){return n.includes(e.id)}),r=t.allQuestions.filter(function(e){return!n.includes(e.id)});return localStorage.setItem("token",t.user.id),Ue(e,{loggedUser:t.user,notAnsweredQuestions:r,answeredQuestions:a,token:t.token});case"LOGOUT_USER":return localStorage.removeItem("token"),Ue(e,{loggedUser:null});default:return e}},Te={allUsers:null,allQuestions:null,loading:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALL_USERS_QUESTIONS_START":return Ue(e,{loading:!0});case"SET_ALL_USERS_QUESTIONS_SUCCESS":var n=Object.values(t.questions).sort(function(e,t){return e.timestamp-t.timestamp});return Ue(e,{allQuestions:n.reverse(),loading:!1});case"SET_ALL_USERS_QUESTIONS_FAIL":return Ue(e,{loading:!1});case"GET_ALL_USERS_START":return Ue(e,{loading:!0});case"GET_ALL_USERS_SUCCESS":return Ue(e,{allUsers:t.users});case"GET_ALL_USERS_FAIL":return Ue(e,{loading:!1});case"SAVE_QUESTION_ANSWER_START":case"ADD_QUESTION_START":return Ue(e,{loading:!0});case"ADD_QUESTION_SUCCESS":var a=[t.newQuestion].concat(Object(R.a)(e.allQuestions));return Ue(e,{allQuestions:a,loading:!1});case"ADD_QUESTION_FAIL":return Ue(e,{loading:!1});default:return e}},xe=Object(we.c)({User:Ae,Home:Qe}),ke=we.d,_e=Object(we.e)(xe,ke(Object(we.a)(ye.a))),Le=r.a.createElement(m.a,{store:_e},r.a.createElement(B.a,null,r.a.createElement(Oe,null)));s.a.render(Le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[62,1,2]]]);
//# sourceMappingURL=main.7891f43b.chunk.js.map