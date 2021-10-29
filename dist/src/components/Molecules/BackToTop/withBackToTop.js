import{inherits as e,createSuper as t,classCallCheck as o,defineProperty as s,assertThisInitialized as i,createClass as r,extends as n}from"../../../../_virtual/_rollupPluginBabelHelpers.js";import l,{Component as a}from"react";import{subscribe as c}from"../../../../node_modules/subscribe-ui-event/index.es.js";var u=function(u){return function(h){e(p,a);var T=t(p);function p(){var e;o(this,p);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=T.call.apply(T,[this].concat(r)),s(i(e),"handleTimeout",void 0),s(i(e),"subscribers",[]),s(i(e),"state",{scrollDirection:"NONE",backToTop:"HIDDEN"}),e}return r(p,[{key:"handleScroll",value:function(e,t){t.scroll.delta>0&&"DOWN"!==this.state.scrollDirection&&t.scroll.top>0?this.setState({scrollDirection:"DOWN"}):t.scroll.delta<0&&"UP"!==this.state.scrollDirection&&this.setState({scrollDirection:"UP"}),this.handleBackToTop(t.scroll.top)}},{key:"handleBackToTop",value:function(e){var t=this;clearTimeout(this.handleTimeout),"DOWN"===this.state.scrollDirection&&e>300?(this.setState({backToTop:"VISIBLE"}),this.handleTimeout=setTimeout((function(){t.setState({backToTop:"TRANSPARENT"})}),6e3)):"UP"===this.state.scrollDirection&&(this.handleTimeout=setTimeout((function(){t.setState({backToTop:"TRANSPARENT"}),t.setState({backToTop:"HIDDEN"})}),1e3))}},{key:"componentDidMount",value:function(){this.subscribers=[c("scroll",this.handleScroll.bind(this),{useRAF:!0,enableScrollInfo:!0})]}},{key:"componentWillUnmount",value:function(){this.subscribers.forEach((function(e){return e.unsubscribe()})),clearTimeout(this.handleTimeout)}},{key:"render",value:function(){var e=this;return l.createElement(u,n({visible:this.state.backToTop,onMouseOver:function(){return clearTimeout(e.handleTimeout)}},this.props))}}]),p}()};export{u as withBackToTop};
//# sourceMappingURL=withBackToTop.js.map
