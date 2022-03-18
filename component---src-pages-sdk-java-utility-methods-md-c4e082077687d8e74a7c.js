(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1466],{78133:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return m}});var o,s=n(22122),r=n(19756),i=(n(15007),n(64983)),a=n(99536),u=["components"],c={},l=(o="CodeBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),d={_frontmatter:c},p=a.Z;function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.mdx)(p,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"utility-methods"},"Utility Methods"),(0,i.mdx)("p",null,"These helper methods are reusable across controllers and can be moved to a separate utility class."),(0,i.mdx)(l,{slots:"heading, code",repeat:"1",languages:"JAVA",mdxType:"CodeBlock"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'public class TargetRequestUtils {\n\n    public static Context getContext(HttpServletRequest request) {\n        Context context = new Context()\n                .channel(ChannelType.WEB)\n                .timeOffsetInMinutes(330.0)\n                .address(getAddress(request));\n        return context;\n    }\n\n    public static Address getAddress(HttpServletRequest request) {\n        Address address = new Address()\n                .referringUrl(request.getHeader("referer"))\n                .url(request.getRequestURL().toString());\n        return address;\n    }\n\n    public static List<TargetCookie> getTargetCookies(Cookie[] cookies) {\n        if (cookies == null) {\n            return Collections.emptyList();\n        }\n        return Arrays.stream(cookies)\n                .filter(Objects::nonNull)\n                .filter(cookie -> CookieUtils.getTargetCookieNames().contains(cookie.getName()))\n                .map(cookie -> new TargetCookie(cookie.getName(), cookie.getValue(), cookie.getMaxAge()))\n                .collect(Collectors.toList());\n    }\n\n    public static HttpServletResponse setCookies(List<TargetCookie> targetCookies,\n                                                  HttpServletResponse response) {\n        targetCookies\n                .stream()\n                .map(targetCookie -> new Cookie(targetCookie.getName(), targetCookie.getValue()))\n                .forEach(cookie -> {\n                    cookie.setPath("/");\n                    response.addCookie(cookie);\n                });\n        return response;\n    }\n\n    public static List<MboxRequest> getMboxRequests(String... name) {\n        List<MboxRequest> mboxRequests = new ArrayList<>();\n        for (int i = 0; i < name.length; i++) {\n            mboxRequests.add(new MboxRequest().name(name[i]).index(i));\n        }\n        return mboxRequests;\n    }\n\n    public static PrefetchRequest getPrefetchRequest() {\n        PrefetchRequest prefetchRequest = new PrefetchRequest();\n        ViewRequest viewRequest = new ViewRequest();\n        prefetchRequest.setViews(Arrays.asList(viewRequest));\n        return prefetchRequest;\n    }\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-java-utility-methods-md-c4e082077687d8e74a7c.js.map