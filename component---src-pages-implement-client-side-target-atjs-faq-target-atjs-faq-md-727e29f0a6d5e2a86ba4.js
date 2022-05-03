(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3855],{77566:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var s,i=a(22122),n=a(19756),o=(a(15007),a(64983)),r=a(99536),l=["components"],d={},m=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:d},h=r.Z;function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.mdx)(h,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"atjs-frequently-asked-questions"},"at.js Frequently Asked Questions"),(0,o.mdx)("p",null,"Answers to frequently asked questions about the Adobe Target at.js JavaScript library."),(0,o.mdx)("h2",{id:"what-are-the-advantages-of-using-atjs-versus-mboxjs"},"What are the advantages of using at.js versus mbox.js?"),(0,o.mdx)("p",null,"The at.js library replaces mbox.js. The mbox.js library is no longer supported. However, for most people, at.js provides advantages over mbox.js."),(0,o.mdx)("p",null,"Among other benefits, at.js improves page-load times for web implementations, improves security, and provides better implementation options for single-page applications."),(0,o.mdx)("p",null,"The following diagram illustrates page-load performance using mbox.js versus at.js."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/cb523/atjs_vesus_mboxjs.webp 320w","/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/797b9/atjs_vesus_mboxjs.webp 640w","/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/4a65f/atjs_vesus_mboxjs.webp 674w"],sizes:"(max-width: 674px) 100vw, 674px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/72799/atjs_vesus_mboxjs.png 320w","/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/6af66/atjs_vesus_mboxjs.png 640w","/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/fdaf8/atjs_vesus_mboxjs.png 674w"],sizes:"(max-width: 674px) 100vw, 674px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/6a0e01db8eee8bd2c365ec271c345198/fdaf8/atjs_vesus_mboxjs.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"As illustrated above, using mbox.js, page content did not begin to load until after the Target call is complete. Using at.js, page content begins loading when the Target call is initiated and does not wait until the call is complete."),(0,o.mdx)("h2",{id:"what-is-the-impact-of-atjs-and-mboxjs-on-page-load-time"},"What is the impact of at.js and mbox.js on page-load time?"),(0,o.mdx)("p",null,"Many customers and consultants want to know the impact of at.js and mbox.js on page-load time, especially in the context of new vs returning users. Unfortunately, it's hard to measure and give concrete numbers regarding how at.js or mbox.js influence page-load time due to each customer's implementation."),(0,o.mdx)("p",null,"However, if the Visitor API is present on the page, Target can better understand how at.js and mbox.js influence page-load time."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The Visitor API and at.js or mbox.js have an impact on page-load time only when you are using the global mbox (because of the body-hiding technique). Regional mboxes are not impacted by Visitor API integration."),(0,o.mdx)("p",null,"The following sections describe the sequence of actions for new and returning visitors:"),(0,o.mdx)("h3",{id:"new-visitors"},"New visitors"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"The Visitor API is loaded, parsed, and executed.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"at.js / mbox.js is loaded, parsed, and executed.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If global mbox auto-create is enabled, the Target JavaScript library:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Instantiates the Visitor object."),(0,o.mdx)("li",{parentName:"ul"},"The Target library tries to retrieve Experience Cloud Visitor ID data."),(0,o.mdx)("li",{parentName:"ul"},"Because this visitor is a new, the Visitor API fires a cross-domain request to demdex.net."),(0,o.mdx)("li",{parentName:"ul"},"After Experience Cloud Visitor ID data is retrieved, a request to Target is fired.")))),(0,o.mdx)("h3",{id:"returning-visitors"},"Returning Visitors"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"The Visitor API is loaded, parsed, and executed.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"at.js / mbox.js is loaded, parsed, and executed.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If global mbox auto-create is enabled, the Target JavaScript library:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Instantiates the Visitor object."),(0,o.mdx)("li",{parentName:"ul"},"The Target library tries to retrieve Experience Cloud Visitor ID data."),(0,o.mdx)("li",{parentName:"ul"},"The Visitor API retrieves data from cookies."),(0,o.mdx)("li",{parentName:"ul"},"After Experience Cloud Visitor ID data is retrieved, a request to Target is fired.")))),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For new visitors, when the Visitor API is present, Target has to go over the wire multiple times to make sure that Target requests contain Experience Cloud Visitor ID data. For returning visitors, Target goes over the wire only to Target to retrieve the personalized content. "),(0,o.mdx)("h2",{id:"why-does-it-seem-like-i-see-slower-response-times-after-upgrading-from-a-previous-version-of-atjs-to-version-100"},"Why does it seem like I see slower response times after upgrading from a previous version of at.js to version 1.0.0?"),(0,o.mdx)("p",null,"at.js version 1.0.0 and later fires all the requests in parallel. Previous versions execute the requests sequentially, meaning the requests are put in a queue and Target waits for first request to complete before moving on to the next request."),(0,o.mdx)("p",null,'The way previous versions of at.js execute requests is susceptible to the so-called "head of line blocking." In at.js 1.0.0 and later, Target switched to parallel request execution.'),(0,o.mdx)("p",null,"If you check the network tab waterfall for at.js 0.9.1, for example, you'll see that next Target request doesn't start until the previous one has finished. This sequence is not the case with at.js 1.0.0 and later where all the requests basically start at the same time."),(0,o.mdx)("p",null,"From a response-time perspective, mathematically, this sequence can be summed like this"),(0,o.mdx)("ul",{className:"simplelist"},(0,o.mdx)("li",null," at.js 0.9.1: Response time of all Target requests = sum of requests response time "),(0,o.mdx)("li",null," at.js 1.0.0 and later: Response time of all Target requests = maximum of requests response time ")),(0,o.mdx)("p",null,"The at.js library version 1.0.0 completes the requests faster. In addition, at.js requests are asynchronous, so Target doesn't block page rendering. Even if requests take seconds to complete, you still see the rendered page, only some portions of the page are blanked out until Target gets a response from the Target edge."),(0,o.mdx)("h2",{id:"can-i-load-the-target-library-asynchronously"},"Can I load the Target library asynchronously?"),(0,o.mdx)("p",null,"The at.js 1.0.0 release makes it possible to load the Target library asynchronously."),(0,o.mdx)("p",null,"To load at.js asynchronously:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The recommended approach is via tags in Adobe Experience Platform. ")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You can also load at.js asynchronously by adding the async attribute to the script tag that loads at.js. Use something like this:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<script src="<URL to at.js>" async><\/script>\n'))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You can also load at.js asynchronously using this code:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"var script = document.createElement('script'); \nscript.async = true; \nscript.src = \"<URL to at.js>\"; \ndocument.head.appendChild(script);\n")))),(0,o.mdx)("p",null,"Loading at.js asynchronously is a great way to avoid blocking the browser from rendering; however, this technique can lead to flicker on the web page."),(0,o.mdx)("p",null,"You can avoid flicker by using a pre-hiding snippet that hides the page (or specified portions) and then reveals it after at.js and the global request have loaded. The snippet must be added before loading at.js."),(0,o.mdx)("p",null,"If you are deploying at.js through an asynchronous Adobe Experience Platform implementation, be sure to include the pre-hiding snippet directly on your pages, before the Implement Target using Adobe Experience Platform Embed code."),(0,o.mdx)("p",null,"If you are deploying at.js through a synchronous DTM implementation, the pre-hiding snippet can be added through a Page Load rule triggered at the top of the page."),(0,o.mdx)("p",null,"For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md"},"How at.js manages flicker"),". "),(0,o.mdx)("h2",{id:"is-atjs-compatible-with-the-adobe-experience-manager-integration-experience-manager"},"Is at.js compatible with the Adobe Experience Manager integration (Experience Manager)?"),(0,o.mdx)("p",null,"Adobe Experience Manager 6.2 with FP-11577 (or later) now supports at.js implementations with its Adobe Target Cloud Services integration."),(0,o.mdx)("h2",{id:"how-can-i-prevent-page-load-flicker-using-atjs"},"How can I prevent page-load flicker using at.js?"),(0,o.mdx)("p",null,"Target provides several ways to prevent page-load flicker. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/c-how-atjs-works/manage-flicker-with-atjs.md#concept_AA168574397D4474B993EEAB90865EBA"},"Preventing Flicker with at.js"),"."),(0,o.mdx)("h2",{id:"what-is-the-file-size-of-atjs"},"What is the file size of at.js?"),(0,o.mdx)("p",null,"The at.js file is approximately 109 KB when downloaded. However, because most servers automatically compress files to make file sizes smaller, at.js is approximately 34 KB when compressed (using GZIP or another method) on your server and loaded as users visit your website. The compression settings on the server where you installed at.js determine its actual compressed size."),(0,o.mdx)("h2",{id:"why-is-atjs-bigger-than-mboxjs"},"Why is at.js bigger than mbox.js?"),(0,o.mdx)("p",null,"at.js implementations use a single library ( at.js), while mbox.js implementations actually use two libraries ( mbox.js and target.js). So a fairer comparison is at.js versus mbox.js ",(0,o.mdx)("em",{parentName:"p"},"and")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"target.js"),". Comparing the gzipped sizes of the two versions, at.js version 1.2 is 34 KB and mbox.js version 63 is 26.2 KB. ``"),(0,o.mdx)("p",null,'at.js is larger because it does a lot more DOM parsing compared to mbox.js. This is required because at.js gets "raw" data in the JSON response and has to make sense of it. mbox.js used ',(0,o.mdx)("inlineCode",{parentName:"p"},"document.write()")," and all the parsing was done by the browser."),(0,o.mdx)("p",null,"Despite the larger file size, our testing indicates that pages load faster with at.js versus mbox.js. Also, at.js is superior from a security perspective because it doesn't load additional files dynamically or use ",(0,o.mdx)("inlineCode",{parentName:"p"},"document.write"),"."),(0,o.mdx)("h2",{id:"does-atjs-have-jquery-in-it-can-i-remove-this-part-of-atjs-because-i-already-have-jquery-on-my-website"},"Does at.js have jQuery in it? Can I remove this part of at.js because I already have jQuery on my website?"),(0,o.mdx)("p",null,"at.js currently uses parts of jQuery and thus you see the MIT license notification at the top of at.js. jQuery is not exposed and it doesn't interfere with the jQuery library you already have on your page, which might be a different version. Removal of the jQuery code within at.js is not supported."),(0,o.mdx)("h2",{id:"does-atjs-support-safari-and-cross-domain-set-to-x-only"},"Does at.js support Safari and cross domain set to x-only?"),(0,o.mdx)("p",null,"No, if cross domain is set to x-only and Safari has third-party cookies disabled, then both mbox.js and at.js sets a disabled cookie and no mbox requests are executed for that particular client's domain."),(0,o.mdx)("p",null,"To support Safari visitors, a better X-Domain would be “disabled” (sets only a first-party cookie) or “enabled” (sets only a first-party cookie on Safari, while setting first- and third-party cookies on other browsers)."),(0,o.mdx)("h2",{id:"can-i-use-the-target-visual-experience-composer-vec-in-my-single-page-applications"},"Can I use the Target Visual Experience Composer (VEC) in my single-page applications?"),(0,o.mdx)("p",null,"Yes, you can use the VEC for your SPA if you use at.js 2.x. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/experiences/spa-visual-experience-composer.html"},"Single Page (SPA) Visual Experience Composer"),"."),(0,o.mdx)("h2",{id:"can-i-use-the-adobe-experience-cloud-debugger-with-atjs-implementations"},"Can I use the Adobe Experience Cloud Debugger with at.js implementations?"),(0,o.mdx)("p",null,'Yes. You can also use mboxTrace for debugging purposes or your browser\'s Developer Tools to inspect the Network requests, filtering to "mbox" to isolate mbox calls.'),(0,o.mdx)("h2",{id:"can-i-use-special-characters-in-mbox-names-with-atjs"},"Can I use special characters in mbox names with at.js?"),(0,o.mdx)("p",null,"Yes, same as with mbox.js."),(0,o.mdx)("h2",{id:"why-are-my-mboxes-not-firing-on-my-web-pages"},"Why are my mboxes not firing on my web pages?"),(0,o.mdx)("p",null,"Target customers sometimes use cloud-based instances with Target for testing or simple proof-of-concept purposes. These domains, and many others, are part of the ",(0,o.mdx)("a",{parentName:"p",href:"https://publicsuffix.org/list/public_suffix_list.dat"},"Public Suffix List"),"."),(0,o.mdx)("p",null,"Modern browsers do not save cookies if you are using these domains unless you customize the ",(0,o.mdx)("inlineCode",{parentName:"p"},"cookieDomain")," setting using targetGlobalSettings(). For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/c-target-debugging-atjs/targeting-using-cloud-based-instances.md"},"Using Cloud-Based Instances with Target"),"."),(0,o.mdx)("h2",{id:"can-ip-addresses-be-used-as-the-cookie-domain-when-using-atjs"},"Can IP addresses be used as the cookie domain when using at.js?"),(0,o.mdx)("p",null,"Yes, if you are using ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md#reference_DBB5EDB79EC44E558F9E08D4774A0F7A"},"at.js version 1.2 or later"),". Adobe strongly recommends that you keep current with the latest version, however."),(0,o.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The following examples are not necessary if you are using at.js version 1.2 or later."),(0,o.mdx)("p",null,"Depending on how you use ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md"},"targetGlobalSettings"),", you might need to make additional modifications to the code after downloading at.js. For example, if you needed slightly different settings for your Target implementations on various websites and were unable to define these settings dynamically using custom JavaScript, make these customizations manually after downloading the file and before uploading to the respective website."),(0,o.mdx)("p",null,"The following examples let you use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"targetGlobalSettings()")," at.js function to insert a code snippet to support IP addresses:"),(0,o.mdx)("p",null,"This example is for a single IP address:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"if (window.location.hostname === '123.456.78.9') { \n    window.targetGlobalSettings = window.targetGlobalSettings || {}; \n    window.targetGlobalSettings.cookieDomain = window.location.hostname; \n}\n")),(0,o.mdx)("p",null,"This example is for a range of IP addresses:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"if (/^123\\.456\\.78\\..*/g.test(window.location.hostname)) { \n    window.targetGlobalSettings = window.targetGlobalSettings || {}; \n    window.targetGlobalSettings.cookieDomain = window.location.hostname; \n}\n")),(0,o.mdx)("h2",{id:"why-do-i-see-warning-messages-such-as-actions-with-missing-selectors"},'Why do I see warning messages, such as "actions with missing selectors"?'),(0,o.mdx)("p",null,"These messages are not related to at.js functionality. The at.js library tries to report anything that can't be found in the DOM."),(0,o.mdx)("p",null,"The following are possible root causes if you see this warning message:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The page is being built dynamically and at.js cannot find the element.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The page is being built slowly (due to a slow network) and at.js cannot find the selector in the DOM.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The page structure that activity is running on has been changed. If you reopen the activity in the Visual Experience Composer (VEC), you should get a warning message. Update the activity so that all the necessary elements can be found. ")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},'The underlying page is part of a Single Page Application (SPA) or the page contains elements that appear farther down the page and the at.js "selector polling mechanism" cannot find those elements. Increasing the ',(0,o.mdx)("inlineCode",{parentName:"p"},"selectorsPollingTimeout")," might help. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md"},"targetGlobalSettings()"),". ")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Any click-tracking metric tries to add itself to every page, regardless of the URL on which the metric was set up. Although harmless, this situation makes many of these messages display."),(0,o.mdx)("p",{parentName:"li"},"For best results, please download and use the latest version of at.js. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md"},"at.js Version Details")," and ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/how-to-deployatjs/implementing-target-without-a-tag-manager.md"},"Download at.js"),"."))),(0,o.mdx)("h2",{id:"what-is-the-domain-ttomtrdcnet-that-target-server-calls-go-to"},"What is the domain tt.omtrdc.net that Target server calls go to?"),(0,o.mdx)("p",null,"tt.omtrdc.net is the domain name for Adobe's EDGE network, used to receive all server calls for Target."),(0,o.mdx)("h2",{id:"why-doesnt-atjs-always-use-httponly-and-secure-cookie-flags"},"Why doesn't at.js always use HttpOnly and Secure cookie flags?"),(0,o.mdx)("p",null,"HttpOnly can be set only via server-side code. Target cookies, such as mbox, are created and saved via JavaScript code, so Target can't use the HttpOnly cookie flag. Target does use set HttpOnly for third-party cookies set from the server side when cross-domain is enabled."),(0,o.mdx)("p",null,"Secure can be set via JavaScript only when the page has been loaded via HTTPS. If the page initially loads via HTTP, JavaScript can't set this flag. In addition, if the Secure flag is used, the cookie is available only on HTTPS pages. For pages loaded via HTTPS, Target sets the Secure and SameSite=None attributes."),(0,o.mdx)("p",null,"To ensure that Target can properly track users, and because the cookies are generated client-side, Target doesn't use either of these flags except in the situations mentioned above."),(0,o.mdx)("h2",{id:"how-often-does-atjs-fire-a-network-request"},"How often does at.js fire a network request?"),(0,o.mdx)("p",null,"Target executes all of its decisioning on the server side. This means that at.js fires a network request every time the page reloads or an at.js public API is invoked."),(0,o.mdx)("h2",{id:"in-the-best-case-scenario-can-we-expect-that-the-user-doesnt-experience-any-visible-effects-on-page-load-relating-to-hiding-replacing-and-showing-content"},"In the best case scenario, can we expect that the user doesn't experience any visible effects on page load relating to hiding, replacing, and showing content?"),(0,o.mdx)("p",null,"at.js tries to avoid pre-hiding HTML BODY or other DOM elements for an extended period, but this depends on network conditions and activity setup. at.js provides ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md"},"settings"),' you can use to customize the BODY hiding CSS style, such that instead of blanking the entire HTML BODY, you can pre-hide only some parts of the page. The expectation is that those parts contain DOM elements that have to be "personalized."'),(0,o.mdx)("h2",{id:"what-is-the-sequence-of-events-in-an-average-scenario-where-a-user-qualifies-for-an-activity"},"What is the sequence of events in an average scenario where a user qualifies for an activity?"),(0,o.mdx)("p",null,"The at.js request is an async ",(0,o.mdx)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", so we execute the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The page loads. "),(0,o.mdx)("li",{parentName:"ol"},"at.js pre-hides the HTML BODY. There is a setting to pre-hide a particular container instead of the HTML BODY. "),(0,o.mdx)("li",{parentName:"ol"},"The at.js request fires. "),(0,o.mdx)("li",{parentName:"ol"},"After the Target response is received, Target extracts the CSS selectors. "),(0,o.mdx)("li",{parentName:"ol"},"Using CSS selectors, Target creates STYLE tags to pre-hide the DOM elements that will be customized. "),(0,o.mdx)("li",{parentName:"ol"},"The HTML BODY pre-hiding STYLE is removed. "),(0,o.mdx)("li",{parentName:"ol"},"Target starts polling for DOM elements. "),(0,o.mdx)("li",{parentName:"ol"},"If a DOM element is found, Target applies DOM changes and the element pre-hiding STYLE is removed. "),(0,o.mdx)("li",{parentName:"ol"},"If DOM elements are not found, a global timeout unhides the elements to avoid having a broken page.")),(0,o.mdx)("h2",{id:"how-often-is-the-pages-content-fully-loaded-and-visible-when-atjs-finally-unhides-the-element-the-activity-is-changing"},"How often is the page's content fully loaded and visible when at.js finally unhides the element the activity is changing?"),(0,o.mdx)("p",null,"Considering the above scenario, how often is the page's content fully loaded and visible when at.js finally unhides the element the activity is changing? In other words, the page is fully visible except for the activity's content, which is then revealed slightly after the rest of the content."),(0,o.mdx)("p",null,"at.js doesn't block the page from rendering. A user might notice some blank regions on the page that represent elements that are customized by Target. If the content to be applied doesn't contain many remote assets, such as SCRIPTs or IMGs, everything should render quickly."),(0,o.mdx)("h2",{id:"how-would-a-fully-cached-page-affect-the-above-scenario-would-it-be-more-likely-for-the-activitys-content-to-become-visible-noticeably-after-the-rest-of-the-pages-content-loads"},"How would a fully cached page affect the above scenario? Would it be more likely for the activity's content to become visible noticeably after the rest of the page's content loads?"),(0,o.mdx)("p",null,"If a page is cached on a CDN that is close to user's location, but not near the Target edge, that user might see some delays. Target edges are well distributed across the globe, so this is not an issue most of the time."),(0,o.mdx)("h2",{id:"is-it-possible-for-a-hero-image-to-be-displayed-and-then-swapped-out-after-a-short-delay"},"Is it possible for a hero image to be displayed and then swapped out after a short delay?"),(0,o.mdx)("p",null,"Considering the following scenario:"),(0,o.mdx)("p",null,"The Target timeout is five seconds. A user loads a page that has an activity to customize a hero image. at.js sends the request to determine if there is an activity to apply, but there is no initial response. Assume the user sees the regular content of the hero image, because no response was received from Target regarding whether there is an associated activity. After four seconds, Target does return a response with the activity contents."),(0,o.mdx)("p",null,"At this stage, would it be possible for the alternative version to be shown? So after four seconds, the hero image could be swapped out and the user could notice this image swap?"),(0,o.mdx)("p",null,"Initially, the image hero DOM element is hidden. After a response from Target is received, at.js applies the DOM changes, such as replacing the IMG and displaying the customized hero image."),(0,o.mdx)("h2",{id:"what-html-doctype-does-atjs-require"},"What HTML doctype does at.js require?"),(0,o.mdx)("p",null,"at.js requires the HTML 5 doctype."),(0,o.mdx)("p",null,"This syntax is:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")),(0,o.mdx)("p",null,"The HTML 5 doctype ensures that the page loads in standard mode. When loading in quirks mode, some JS APIs that at.js depends on are disabled. Target disables at.js in quirks mode."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-target-atjs-faq-target-atjs-faq-md-727e29f0a6d5e2a86ba4.js.map