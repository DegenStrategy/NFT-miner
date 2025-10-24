import{d1 as m,d4 as d,dw as u,d5 as w,d6 as g,dO as V,cQ as E,cV as v,dc as M,el as l,d7 as c,dP as U,d2 as H,d3 as L,em as G,en as J,db as h,d9 as q,dt as A,cP as Y,cR as k,cW as X,di as Z,ds as K,dv as ee,dd as te,cO as ie,de as ne,df as re,dN as oe}from"./index-g2H7lyzi.js";import"./index-46VeRZCb.js";import{S as Q}from"./SwapController-Ccm9KH4p.js";const se=m`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-weight: var(--apkt-font-weight-light);
    line-height: 130%;
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var N=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let y=class extends g{constructor(){super(...arguments),this.inputElementRef=V(),this.instructionElementRef=V(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=E.debounce(async t=>{if(!t.length){this.setReceiverAddress("");return}const n=v.state.activeChain;if(E.isAddress(t,n)){this.setReceiverAddress(t);return}try{const o=await M.getEnsAddress(t);if(o){l.setReceiverProfileName(t),l.setReceiverAddress(o);const i=await M.getEnsAvatar(t);l.setReceiverProfileImageUrl(i||void 0)}}catch{this.setReceiverAddress(t)}finally{l.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?c` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??""}
        >
           ${this.value??""}</textarea
        >
      </wui-flex>`:c` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${U(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${U(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(t){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:t?0:1},{opacity:t?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const t=await navigator.clipboard.readText();l.setReceiverAddress(t),this.focusInput()}onInputChange(t){const n=t.target;this.pasting=!1,this.value=t.target?.value,n.value&&!this.instructionHidden&&this.focusInput(),l.setLoading(!0),this.onDebouncedSearch(n.value)}setReceiverAddress(t){l.setReceiverAddress(t),l.setReceiverProfileName(void 0),l.setReceiverProfileImageUrl(void 0),l.setLoading(!1)}};y.styles=se;N([d()],y.prototype,"value",void 0);N([d({type:Boolean})],y.prototype,"readOnly",void 0);N([u()],y.prototype,"instructionHidden",void 0);N([u()],y.prototype,"pasting",void 0);y=N([w("w3m-input-address")],y);const ae=m`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    color: ${({tokens:e})=>e.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: 32px;
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var O=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let C=class extends g{constructor(){super(...arguments),this.inputElementRef=V(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),c`<input
      ${U(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(t){const n=t.data;if(n&&this.inputElementRef?.value)if(n===","){const r=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=r,this.value=`${this.value}${r}`}else G.test(n)||(this.inputElementRef.value.value=this.value.replace(new RegExp(n.replace(J,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};C.styles=[H,L,ae];O([d({type:Boolean})],C.prototype,"disabled",void 0);O([d({type:String})],C.prototype,"value",void 0);O([d({type:String})],C.prototype,"placeholder",void 0);C=O([w("wui-input-amount")],C);const le=m`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
    transition: all ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var B=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let T=class extends g{constructor(){super(...arguments),this.readOnly=!1}render(){const t=this.readOnly||!this.token;return c` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${t}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?c`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:c`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||h.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){const n=this.token.price*this.sendTokenAmount;return c`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${n?`$${q.formatNumberToLocalString(n,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?c` <wui-text variant="sm-regular" color="error">
          ${A.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:c` <wui-text variant="sm-regular" color="secondary">
        ${A.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?c`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:c`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:c`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(t){l.setTokenAmount(t.detail)}onMaxClick(){if(this.token){const t=q.bigNumber(this.token.quantity.numeric);l.setTokenAmount(Number(t.toFixed(20)))}}onBuyClick(){h.push("OnRampProviders")}};T.styles=le;B([d({type:Object})],T.prototype,"token",void 0);B([d({type:Boolean})],T.prototype,"readOnly",void 0);B([d({type:Number})],T.prototype,"sendTokenAmount",void 0);T=B([w("w3m-input-token")],T);const ce=m`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var x=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let p=class extends g{constructor(){super(),this.unsubscribe=[],this.token=l.state.token,this.sendTokenAmount=l.state.sendTokenAmount,this.receiverAddress=l.state.receiverAddress,this.receiverProfileName=l.state.receiverProfileName,this.loading=l.state.loading,this.params=h.state.data?.send,this.caipAddress=Y.state.caipAddress,this.message="Preview Send",this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice()),this.unsubscribe.push(Y.subscribeKey("caipAddress",t=>{this.caipAddress=t}),l.subscribe(t=>{this.token=t.token,this.sendTokenAmount=t.sendTokenAmount,this.receiverAddress=t.receiverAddress,this.receiverProfileName=t.receiverProfileName,this.loading=t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();const t=!!this.params;return c` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${t}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${t}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["4","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="accent-primary"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await l.fetchTokenBalance(),l.fetchNetworkBalance()}async fetchNetworkPrice(){await Q.getNetworkTokenPrice()}onButtonClick(){h.push("WalletSendPreview",{send:this.params})}getMessage(){this.message="Preview Send",this.receiverAddress&&!E.isAddress(this.receiverAddress,v.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}const t=Number(this.params.amount);if(isNaN(t)){k.showError("Invalid amount"),this.loading=!1;return}const{namespace:n,chainId:r,assetAddress:o}=this.params;if(!X.SEND_PARAMS_SUPPORTED_CHAINS.includes(n)){k.showError(`Chain "${n}" is not supported for send parameters`),this.loading=!1;return}const i=v.getCaipNetworkById(r,n);if(!i){k.showError(`Network with id "${r}" not found`),this.loading=!1;return}try{const{balance:s,name:a,symbol:W,decimals:F}=await Z.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:o,caipNetwork:i});if(!a||!W||!F||!s){k.showError("Token not found");return}l.setToken({name:a,symbol:W,chainId:i.id.toString(),address:`${i.chainNamespace}:${i.id}:${o}`,value:0,price:0,quantity:{decimals:F.toString(),numeric:s.toString()},iconUrl:K.getTokenImage(W)??""}),l.setTokenAmount(t),l.setReceiverAddress(this.params.to)}catch(s){console.error("Failed to load token information:",s),k.showError("Failed to load token information")}finally{this.loading=!1}}};p.styles=ce;x([u()],p.prototype,"token",void 0);x([u()],p.prototype,"sendTokenAmount",void 0);x([u()],p.prototype,"receiverAddress",void 0);x([u()],p.prototype,"receiverProfileName",void 0);x([u()],p.prototype,"loading",void 0);x([u()],p.prototype,"params",void 0);x([u()],p.prototype,"caipAddress",void 0);x([u()],p.prototype,"message",void 0);p=x([w("w3m-wallet-send-view")],p);const ue=m`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var I=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $=class extends g{constructor(){super(),this.unsubscribe=[],this.tokenBalances=l.state.tokenBalances,this.search="",this.onDebouncedSearch=E.debounce(t=>{this.search=t}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(l.subscribe(t=>{this.tokenBalances=t.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){(!this.tokenBalances||this.tokenBalances?.length===0)&&(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await l.fetchTokenBalance(),l.fetchNetworkBalance()}async fetchNetworkPrice(){await Q.getNetworkTokenPrice()}templateSearchInput(){return c`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(t=>t.chainId===v.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,c`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(t=>c`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,t)}
                    ?clickable=${!0}
                    tokenName=${t.name}
                    tokenImageUrl=${t.iconUrl}
                    tokenAmount=${t.quantity.numeric}
                    tokenValue=${t.value}
                    tokenCurrency=${t.symbol}
                  ></wui-list-token>`):c`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){h.push("OnRampProviders")}onInputChange(t){this.onDebouncedSearch(t.detail)}handleTokenClick(t){l.setToken(t),l.setTokenAmount(void 0),h.goBack()}};$.styles=ue;I([u()],$.prototype,"tokenBalances",void 0);I([u()],$.prototype,"tokens",void 0);I([u()],$.prototype,"filteredTokens",void 0);I([u()],$.prototype,"search",void 0);$=I([w("w3m-wallet-send-select-token-view")],$);const de=m`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var _=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let P=class extends g{constructor(){super(...arguments),this.text=""}render(){return c`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?c`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?c`<wui-image src=${this.imageSrc}></wui-image>`:c`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};P.styles=[H,L,de];_([d({type:String})],P.prototype,"text",void 0);_([d({type:String})],P.prototype,"address",void 0);_([d({type:String})],P.prototype,"imageSrc",void 0);P=_([w("wui-preview-item")],P);const he=m`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var j=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let S=class extends g{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?c` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:c`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};S.styles=[H,L,he];j([d()],S.prototype,"imageSrc",void 0);j([d()],S.prototype,"textTitle",void 0);j([d()],S.prototype,"textValue",void 0);S=j([w("wui-list-content")],S);const pe=m`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`;var D=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let R=class extends g{constructor(){super(...arguments),this.params=h.state.data?.send}render(){return c` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${A.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?c` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ee(K.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(t){t&&!this.params&&h.push("Networks",{network:t})}};R.styles=pe;D([d()],R.prototype,"receiverAddress",void 0);D([d({type:Object})],R.prototype,"caipNetwork",void 0);D([u()],R.prototype,"params",void 0);R=D([w("w3m-wallet-send-details")],R);const fe=m`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`;var b=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let f=class extends g{constructor(){super(),this.unsubscribe=[],this.token=l.state.token,this.sendTokenAmount=l.state.sendTokenAmount,this.receiverAddress=l.state.receiverAddress,this.receiverProfileName=l.state.receiverProfileName,this.receiverProfileImageUrl=l.state.receiverProfileImageUrl,this.caipNetwork=v.state.activeCaipNetwork,this.loading=l.state.loading,this.params=h.state.data?.send,this.unsubscribe.push(l.subscribe(t=>{this.token=t.token,this.sendTokenAmount=t.sendTokenAmount,this.receiverAddress=t.receiverAddress,this.receiverProfileName=t.receiverProfileName,this.receiverProfileImageUrl=t.receiverProfileImageUrl,this.loading=t.loading}),v.subscribeKey("activeCaipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?A.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?A.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):A.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){const n=this.token.price*this.sendTokenAmount;return c`<wui-text variant="md-regular" color="primary"
        >$${n.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress){k.showError("Please enter a valid amount and receiver address");return}try{await l.sendToken(),this.params?h.reset("WalletSendConfirmed"):(k.showSuccess("Transaction started"),h.replace("Account"))}catch(t){let n="Failed to send transaction. Please try again.";v.state.activeChain===te.CHAIN.SOLANA&&t instanceof Error&&(n=t.message),k.showError(n),console.error("SendController:sendToken - failed to send transaction",t);const r=t instanceof Error?t.message:"Unknown error";ie.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:r,isSmartAccount:ne(v.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:v.state.activeCaipNetwork?.caipNetworkId||""}})}}onCancelClick(){h.goBack()}};f.styles=fe;b([u()],f.prototype,"token",void 0);b([u()],f.prototype,"sendTokenAmount",void 0);b([u()],f.prototype,"receiverAddress",void 0);b([u()],f.prototype,"receiverProfileName",void 0);b([u()],f.prototype,"receiverProfileImageUrl",void 0);b([u()],f.prototype,"caipNetwork",void 0);b([u()],f.prototype,"loading",void 0);b([u()],f.prototype,"params",void 0);f=b([w("w3m-wallet-send-preview-view")],f);const me=m`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var we=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let z=class extends g{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){oe.close()}};z.styles=me;z=we([w("w3m-send-confirmed-view")],z);export{z as W3mSendConfirmedView,$ as W3mSendSelectTokenView,f as W3mWalletSendPreviewView,p as W3mWalletSendView};
