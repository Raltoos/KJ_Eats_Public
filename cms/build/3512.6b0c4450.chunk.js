"use strict";(self.webpackChunkswasthmind=self.webpackChunkswasthmind||[]).push([[3512],{3512:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(10559),n=_(78323),A=_(21272),C=_(55506),R=_(5409),i=_(85629),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),P=_(2600),W=_(48940),D=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),V=_(58692),F=_(501),H=_(57646),x=_(23120),$=_(44414),z=_(25962),G=_(14664),X=_(42588),J=_(90325),Y=_(62785),Z=_(87443),c=_(41032),Q=_(22957),e=_(93179),u=_(73055),p=_(15747),w=_(85306),k=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(58730),s_=_(96110),O_=_(15853),M_=_(55151),P_=_(79077),D_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},78323:(K,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(85629);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:P}=l??{};a.useEffect(()=>{if(L||I)return;const W=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),W&&d({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:P?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:P})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,P,L])}}}]);