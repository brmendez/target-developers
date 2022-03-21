(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8065],{68663:function(t,e,n){"use strict";n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return x}});var a,l=n(22122),r=n(19756),d=(n(15007),n(64983)),m=n(99536),i=["components"],o={},p=(a="CodeBlock",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}),N={_frontmatter:o},u=m.Z;function x(t){var e=t.components,n=(0,r.Z)(t,i);return(0,d.mdx)(u,(0,l.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"initialize-sdk"},"Initialize SDK"),(0,d.mdx)("p",null,"Description\nUse the ",(0,d.mdx)("inlineCode",{parentName:"p"},"create")," method in order to initialize the Python SDK and instantiate the Target Client to make calls to Adobe Target for experiments and personalized experiences."),(0,d.mdx)("h2",{id:"method"},"Method"),(0,d.mdx)(p,{slots:"heading, code",repeat:"1",languages:"python",mdxType:"CodeBlock"}),(0,d.mdx)("h3",{id:"create"},"create"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},"TargetClient.create(options)\n")),(0,d.mdx)("h2",{id:"parameters"},"Parameters"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"options")," has the following structure:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"client"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Adobe Target client ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"organization_id"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Experience Cloud Organization ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"timeout"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"3000"),(0,d.mdx)("td",{parentName:"tr",align:null},"Timeout in milliseconds")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"server_domain"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"client.tt.omtrdc.net")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"secure"),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"true"),(0,d.mdx)("td",{parentName:"tr",align:null},"Unset to enforce HTTP scheme")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"logger"),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"INFO logger"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"target_location_hint"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Target location hint")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"property_token"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"Target Property Token. If specified here, all get_offers calls will use this value.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"decisioning_method"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"server-side"),(0,d.mdx)("td",{parentName:"tr",align:null},"Determines which decisioning method to use (",(0,d.mdx)("a",{parentName:"td",href:"../../sdk-guides/on-device-decisioning/index.md"},"on-device"),", server-side, hybrid)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"polling_interval"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"300000 (5 minutes)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Polling interval for the ",(0,d.mdx)("a",{parentName:"td",href:"../../sdk-guides/on-device-decisioning/rule-artifact/index.md"},"on-device decisioning rule artifact")," (in ms)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"artifact_location"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"A fully qualified url to the ",(0,d.mdx)("a",{parentName:"td",href:"../../sdk-guides/on-device-decisioning/rule-artifact/index.md"},"on-device decisioning rule artifact"),". Overrides internally determined location.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"artifact_payload"),(0,d.mdx)("td",{parentName:"tr",align:null},"object"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"The JSON payload of the ",(0,d.mdx)("a",{parentName:"td",href:"../../sdk-guides/on-device-decisioning/rule-artifact/index.md"},"on-device decisioning rule artifact"),". If specified, it is used instead of requesting one from a URL.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"​​"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"../sdk-events.md"},"events")),(0,d.mdx)("td",{parentName:"tr",align:null},"dict <str, callable>"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"environment_id"),(0,d.mdx)("td",{parentName:"tr",align:null},"int"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"production"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Target environment ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"environment_name"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"production"),(0,d.mdx)("td",{parentName:"tr",align:null},"The Target environment name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"cdn_environment"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"production"),(0,d.mdx)("td",{parentName:"tr",align:null},"The CDN environment name")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"telemetry_enabled"),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"True"),(0,d.mdx)("td",{parentName:"tr",align:null},"If set to False, telemetry data will not be sent to Adobe")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"version"),(0,d.mdx)("td",{parentName:"tr",align:null},"str"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"None"),(0,d.mdx)("td",{parentName:"tr",align:null},"The version number of this sdk")))),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)(p,{slots:"heading, code",repeat:"1",languages:"python",mdxType:"CodeBlock"}),(0,d.mdx)("h3",{id:"python"},"Python"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-python"},'from target_python_sdk import TargetClient\n\ndef client_ready_callback(ready_event):\n    # make calls to Adobe Target\n\nclient_options = {\n    "client": "acmeclient",\n    "organization_id": "1234567890@AdobeOrg",\n    "events": {\n        "client_ready": client_ready_callback\n    }\n}\ntarget_client = TargetClient.create(client_options)\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-python-initialize-sdk-md-4f762706c4bb2b9cd480.js.map