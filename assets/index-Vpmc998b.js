import{d1 as C,d2 as E,d3 as P,d4 as h,d5 as b,d6 as v,d7 as l,d8 as O,dw as d,dt as I,dA as g,db as R,dj as $,cQ as S,cR as T}from"./index-BSLBHwR3.js";const L=C`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${({tokens:i})=>i.theme.foregroundPrimary};
    border-radius: ${({borderRadius:i})=>i[4]};
    border: 1px solid ${({tokens:i})=>i.theme.borderPrimary};
    font-family: ${({fontFamily:i})=>i.regular};
    font-size: ${({textSize:i})=>i.large};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${({tokens:i})=>i.theme.textPrimary};
    caret-color: ${({tokens:i})=>i.core.textAccentPrimary};
    transition:
      background-color ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]},
      border-color ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]},
      box-shadow ${({durations:i})=>i.lg}
        ${({easings:i})=>i["ease-out-power-2"]};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${({spacing:i})=>i[4]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${({tokens:i})=>i.theme.borderSecondary};
    box-shadow: 0px 0px 0px 4px ${({tokens:i})=>i.core.foregroundAccent040};
  }
`;var y=function(i,t,e,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o};let c=class extends v{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return l`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};c.styles=[E,P,L];y([h({type:Boolean})],c.prototype,"disabled",void 0);y([h({type:String})],c.prototype,"value",void 0);c=y([b("wui-input-numeric")],c);const _=O`
  :host {
    position: relative;
    display: block;
  }
`;var m=function(i,t,e,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o};let p=class extends v{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(n=>n!==""),this.handleKeyDown=(t,e)=>{const n=t.target,s=this.getInputElement(n),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!s)return;o.includes(t.key)&&t.preventDefault();const r=s.selectionStart;switch(t.key){case"ArrowLeft":r&&s.setSelectionRange(r+1,r+1),this.focusInputField("prev",e);break;case"ArrowRight":this.focusInputField("next",e);break;case"Shift":this.focusInputField("next",e);break;case"Delete":s.value===""?this.focusInputField("prev",e):this.updateInput(s,e,"");break;case"Backspace":s.value===""?this.focusInputField("prev",e):this.updateInput(s,e,"");break}},this.focusInputField=(t,e)=>{if(t==="next"){const n=e+1;if(!this.shouldInputBeEnabled(n))return;const s=this.numerics[n<this.length?n:e],o=s?this.getInputElement(s):void 0;o&&(o.disabled=!1,o.focus())}if(t==="prev"){const n=e-1,s=this.numerics[n>-1?n:e],o=s?this.getInputElement(s):void 0;o&&o.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return l`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>l`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,e)}
              @click=${n=>this.selectInput(n)}
              @keydown=${n=>this.handleKeyDown(n,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,n){const s=this.numerics[e],o=t||(s?this.getInputElement(s):void 0);o&&(o.value=n,this.values=this.values.map((r,a)=>a===e?n:r))}selectInput(t){const e=t.target;e&&this.getInputElement(e)?.select()}handleInput(t,e){const n=t.target,s=this.getInputElement(n);if(s){const o=s.value;t.inputType==="insertFromPaste"?this.handlePaste(s,o,e):I.isNumber(o)&&t.data?(this.updateInput(s,e,t.data),this.focusInputField("next",e)):this.updateInput(s,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,n){const s=e[0];if(s&&I.isNumber(s)){this.updateInput(t,n,s);const r=e.substring(1);if(n+1<this.length&&r.length){const a=this.numerics[n+1],x=a?this.getInputElement(a):void 0;x&&this.handlePaste(x,r,n+1)}else this.focusInputField("next",n)}else this.updateInput(t,n,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};p.styles=[E,_];m([h({type:Number})],p.prototype,"length",void 0);m([h({type:String})],p.prototype,"otp",void 0);m([d()],p.prototype,"values",void 0);p=m([b("wui-otp")],p);const A=O`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var f=function(i,t,e,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o},w;let u=w=class extends v{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=g.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=R.state.data?.email,this.authConnector=$.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=!!this.timeoutTimeLeft,e=this.getFooterLabels(t);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?l`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:l` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?l`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=g.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=g.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=S.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!$.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),T.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){T.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:`Try again ${t?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${t?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===w.OTP_LENGTH}};u.OTP_LENGTH=6;u.styles=A;f([d()],u.prototype,"loading",void 0);f([d()],u.prototype,"timeoutTimeLeft",void 0);f([d()],u.prototype,"error",void 0);u=w=f([b("w3m-email-otp-widget")],u);export{u as W};
