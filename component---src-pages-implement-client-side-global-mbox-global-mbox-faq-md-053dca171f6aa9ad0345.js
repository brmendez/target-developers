(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3196],{1956:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return d}});var n=t(22122),o=t(19756),r=(t(15007),t(64983)),i=t(99536),s=["components"],p={},m={_frontmatter:p},l=i.Z;function d(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)(l,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"global-mbox-frequently-asked-questions"},"Global mbox Frequently Asked Questions"),(0,r.mdx)("p",null,"List of Frequently Asked Questions (FAQs) about global mboxes."),(0,r.mdx)("h2",{id:"can-i-have-more-than-one-global-mbox-if-my-target-account-is-set-across-multiple-domains"},"Can I have more than one global mbox if my Target account is set across multiple domains?"),(0,r.mdx)("p",null,"Only one global mbox is supported across your account."),(0,r.mdx)("p",null,"You can limit where your activities run by adding URL rules to your activities. For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/experiences/vec/temtest.html"},"Include the Same Experience on Similar Pages"),"."),(0,r.mdx)("p",null,"You could also pass a parameter on the page using ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/targetpageparams.html"},"targetPageParams"),' and then select those parameters in the "configure URL" section in the Visual Experience Composer (VEC) or by adding the parameters as "refinements" in the Form-Based Experience Composer.'),(0,r.mdx)("h2",{id:"how-do-i-pass-revenue-data-on-a-target-global-mbox"},"How do I pass revenue data on a Target global mbox?"),(0,r.mdx)("p",null,'To collect revenue and order information on the target-global-mbox, "mbox parameters" must be sent to Target. These parameters are name/value pairs used to send more information to Target. Target automatically looks for these parameters (reserved names) to populate revenue data.'),(0,r.mdx)("p",null,"For the ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderConfirmPage"),", you should pass in ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderTotal"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"orderId"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"productPurchasedId"),"."),(0,r.mdx)("p",null,"These parameters must be sent to the target-global-mbox via ",(0,r.mdx)("inlineCode",{parentName:"p"},"targetPageParams()"),". For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/t-mbox-download/c-understanding-global-mbox/pass-parameters-to-global-mbox.md#concept_33362A04146C4E3C8E7089B65F38B5E5"},"Passing Parameters to a Global mbox"),"."),(0,r.mdx)("p",null,"You'll also want to add targeting to the conversion piece so that Target only counts conversions on the target-global-mbox when the order confirmation page has been viewed, as shown below:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"656px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.62500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/cb523/revenue1.webp 320w","/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/797b9/revenue1.webp 640w","/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/37245/revenue1.webp 656w"],sizes:"(max-width: 656px) 100vw, 656px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/72799/revenue1.png 320w","/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/6af66/revenue1.png 640w","/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/748f4/revenue1.png 656w"],sizes:"(max-width: 656px) 100vw, 656px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/902fd90927ab4d6f87824a4a74794ac6/748f4/revenue1.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"The Site Pages section illustrated above contains the following selections: Current Page, URL, contains, orderconfirm."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"506px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/c88b8130768dd586cf76e3d8b46efdff/cb523/revenue2.webp 320w","/target-developers/static/c88b8130768dd586cf76e3d8b46efdff/3bde5/revenue2.webp 506w"],sizes:"(max-width: 506px) 100vw, 506px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/c88b8130768dd586cf76e3d8b46efdff/72799/revenue2.png 320w","/target-developers/static/c88b8130768dd586cf76e3d8b46efdff/29f4e/revenue2.png 506w"],sizes:"(max-width: 506px) 100vw, 506px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/c88b8130768dd586cf76e3d8b46efdff/29f4e/revenue2.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"The options in the above illustration include the following settings:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"What do you want to measure with this activity:")," Revenue "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Default View for Reporting:")," Revenue Per Visitor (RPV) "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"What action was taken by your audience to indicate your goal has been reached?")," Viewed an mbox, target-global-mbox")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-global-mbox-global-mbox-faq-md-053dca171f6aa9ad0345.js.map