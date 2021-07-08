(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5058:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},Highlight:function(){return d},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},s="Markdown Features",c={unversionedId:"tutorial-basics/markdown-features",id:"tutorial-basics/markdown-features",isDocsHomePage:!1,title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/docs/tutorial-basics/markdown-features",editUrl:"https://github.com/krossjs/docs/edit/main/docs/tutorial-basics/markdown-features.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/docs/tutorial-basics/deploy-your-site"}},p=[{value:"Front Matter",id:"front-matter",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images",children:[]},{value:"Code Blocks",id:"code-blocks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"MDX and React Components",id:"mdx-and-react-components",children:[]}],d=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){alert("You clicked the color "+n+" with label "+t)}},t)},u={toc:p,Highlight:d};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,o.kt)("p",null,"Docusaurus supports ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,o.kt)("strong",{parentName:"p"},"additional features"),"."),(0,o.kt)("h2",{id:"front-matter"},"Front Matter"),(0,o.kt)("p",null,"Markdown documents have metadata at the top called ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial-basics/create-a-page"},"Create a page"),"."),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Regular Markdown images are supported."),(0,o.kt)("p",null,"Add an image at ",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/logo.png")," and display it in Markdown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/logo.png)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus logo",src:n(1812).Z})),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"My tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use this awesome feature option"))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Take care")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This action is dangerous"))),(0,o.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,o.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,o.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(d,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}m.isMDXComponent=!0},1812:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACZCAQAAAClbk84AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBwcCITeSDKC6AAAWV0lEQVR42u2de5AlV33fP+d09+nXfczsImSt0QtSWMYyT1mQiiE2ASOjwgYHRxRlkMB2AFOJXXlgQAEsImyDMSQRRAiLOCVjEAI7UJEMWICpFQ/jtQSG4mHJFspKRgJpNTP3zr39Pr/8MXfv3jtzZ3fm7uzMiu5P13TfPtOn+/T5nnefB9QRxWN5K7fT4//xYZ6Pv9cOatg9/jlfpURG2xJXEe21kxp2hwP8zVj4tW3IK/faUQ27w2snYv3R7Sss7rWzGk49mr/YIL2wwjP22mF74RV1o8U5M0zb/OheO2z3qZ/4Hu4MU0W41w7bfeonfsOYRvwa04hfYxrxa0wjfo1xT/4WDacUNTq6BISEBATAER4kO9lbN+LvPQ4+AQE+/mgf0qJDlw5turTp0CHCYPDwMAirPMQX+ASHSOd/cCP+qUTjYzCY0dHHJ6ZLhw6dsazx6D/H9mYc3zfjTB7H0/k1Psnb+CYyn/Ma8edD4402Mz7G47jaoU2HLhEhwSheB/iEmB0tZXV5CU/mN/j8fPI34q9H4eLi4o2OLi4BXSK6LIz2HdpEhFNbgDN1l93iAt7LL/PNeazWSXyNg0O0Sdx7Dgfo0KJFTDTeYiJCHBRM/O2etACCVVaLFgcHVznKMpTcG7viAl7Hq0m2f+PdfY1ThUKPN2e0j2nRoj3x1yKmxQLPIp5xj4o1WXfPR0RZJUoUGkc5ONpRTukkXh7moW1LV3fdRX/B7xo/C7KwiKqWjVXbjd3cfrv6sHNzOzvaA2mJS/ibebztdEejUBN7TUhMi3gk79q+NZZ6bR/jjq4+tu3Wu4oSZORYpXCUQidu5hdBFdmObusFs+Av+EHhp2EelW3bouO03Y7fCn1XixYtY4crpfWkuwURlEKl5buPvHmxNABYruYq7HYdupfiH01Cjx0NMTEh8SjpXZO2TWdi38aMEvC1bS2u7waiACWglEKhlMqdzCv8MpCYlu44HdP1Y+UnYRoVrapNR3W9jteNYt8VbZ1Rwq1xtKO0Vkf9XkY7EQTUqItBXmVlkVWZHcpArzo9t296flpkSVa0/J9Xj28Pi+f3D+4f3eMvuIzV7b7Qqcvz1dTRIcInIsYnHAl8tFTcoT2qz/oThSxntN8dRIEaOVZU6eQmNxLaULd0y+t4HTdIgyQsWkVbOiy4XbMQdMLAdZRjXHHExVGudrWrtaZN+5isa8Vw0WisFFVeFrlNbcJQD/Sqt+qtenmWJUk+KAdVnxXdd5dNP+hFpVvqyq+kkpJKVapUla60BASgeF/v1sHZrZeUB4+6/3yivRDfwSMkxBAS4hMQj2uwxyo+IQYHD4M7qhq5u920rCpVuIUnfhWqUMc6Nm03KP1hmEVFx3ZY0Atm0XTjluto1/O0iyeu8pSrPcdoFc3u5GkrW1ZlYTPpk+hEr3oDL9HFMEuSfFj2q1WWnJ6zbHphLy6cypRuaQtKCkpd6NKptGxy580DvnBX+/Z7z249ZVHlspbwH5inB/L84huexKVczD5cfHxcDD4eBn9XZa1U6ZRu5YmRQIUq8mIvUCbxkzBvFR0W1IK7zywEC7HB1Z7rWV97GGUcT/nKNZiNfiuVVGVZ2kJyeirTqTPwEqdIimyYJNVq1edhp++ueEvRcpDr0ikoJJeCXBU614UqnYnYv1P+vY4HBTxR1Uh8b54MfF7H7OcNXM6jdupVZmB14VSOeNaoQBsduqHjVd7Qz1tJzAIdtc90zf7WgjJixIgvRgLl4+PjOapFa/puUkpVVpWU5GRqqJYY6twWwyIbpkm1alfUsl7xeuZI3PcLSsmkkExylZKTk5Fr4pm1hN3KmE4B84nf5h28fC67oipdaeuKi1Ge9nXgGHEHfhbnUdWly6JZ9BajhcCVoPJLY0Prq1j7TqgDx3PpTNzLSiWlldJWqnBLlenc6TtFVQyLNCtWy1Xp0XceMj2zFPZNbosyLXObSaJSlbqZk7ilK7Nj6Kz04IeQeQRUvJiXrrNpdaXEEQcXV3na00a5qZeEeVS2pMuCsz/omn2RUX4ZZr6NqoBYB05sYu07qqNAQIEVK1akyiylLv1CFbpwsnyYfn85K/rlgB4994jpmaVwqPMiK7JyWGUkJHrgpl5iCg9POuMSNKNCOqOvYQ0TzCP+Aq8gAOTM4bOTc8LFMNJeGWR+2SojiVXsxF7sR8YEKlAgymJFwCKFVaVTxaUuxSZllg0eWBnIqvTVsrdsloNekFV5nhVpObCJDNXAGbhDMwxKXwyICDCuDqnjuv70b784DZhH/MfyVIDzBn9WPaGDEiti3cqzlU3KPM/TrCf3S18ve31vKVg1aZZlSZ5UAztgoPrewFsN0qCKJRIRRCxyrLHL3aTUerRptWEHmUf8i/BByRUrZyy+4cF77KrT81ZNP0w9G9vQikWkQlSlRFVKNO7MglIj5p4zj/jno8HlZ6IPHfnvj5FJCVXTLeyRxDxi7UeDsgc6dylpYu8jmHnEVwBKlJqzA0nDaUKTTNeYRvwa04hfYxrxa0wjfo1pxK8xjfg1phG/xjTi15hdHLTxVH4CgIxPs3Kc687gAr4+dcXjuXjmV6DPMeB5U/0ujvAFehuua/NM9k+cZ9xKyLOn7nkfX5455lHzYzxlqrvON/kG/4ozJkxSvsT3Zo6YOsBPT32mfIDP8xR+bMLE8lW+s/1e13vG9QjiF3dVr7x3xqRmm25vFysiIt+XCza9xshz5aCsykH5FXnU2PTfSikbsXKJXCgPTZmlcov8jJiJO3ryTLlZkqmrvi9PkudJMWXWlz+WC0Wvc8+Z8jr57sjdR/l9acltUyaV/J28Urrr7LbkJXL7Opd/Rtpyzbr3OCxvkgPb8EcE0fb994j8baoHI5PBzDnGTsBplOwrzuH3+QjPJOaZ/C9u4onbvofP8/lz/pDHjWL1+byTj3PpFjrxtLiCm/mtibkYDb/A/+F3Oe+E3541T+RabuRZ44RUcxH/mz/mqVvo4nc2v8Mn+OU9mA7stBmrF/BcruJJo9BouYcP8Q9z3WmR17LAr5Lj8BZevo1uA+fyu/S4fnT2WD6wjR6qhks4j5/jXgDavIenb9mu5iLexy/wxR320xNxWoivOJf/zMvGfSl73MgfcteGXNTywES+LAzJuWeidKD4UQygaI0kb4+Oq9w6ka+usILizydi5T6ehQM4E/1O3FF6ITw4NR7iYYTvcfeEyaNG/UpDvJGJHt9nhSMTV96P5ciU3RaPBsDbgy6Gp4H4AZfwFp44ivMFd/B7fHpm4WvIFXx54jxB+JcTMTvis1w48xn3czn5+EwoOMzLJ/7/U9y6aQJdcCU3TpznFFwxcbXDH/Drm77dB3n9xFlFyu/xzgmTy/ijPevStMfiK87jt3kJXQCEH/B+ruWBTeYaEJINY5IGE7/tpqVmIZsQ/6jJMXKOR7rhqZPjoR0ySgDKGe4uNtjNpp6cUKA3sXuq2VPxA17IlTxhFOcz/pKr+SrFXjppDiw3jeZGWJ1K4rfGIX4TgII7d93leyC+w1n0+QHn8kZePM7n7+Rd3Hjc+j9ozpyq0fyAikdPJMDH8tydRLF/6qk9Vnj0VO39Lr64aZrTnrKb8hDdqXEiCR/Ys+C+B+IvcAP3czkv4/JRnO/zYd7JP5ww4Qu5Zqos8Aru50YWxueKA4BwHwepdtCLrhzFzjWu4z1cw0UTJhkf43oOz3T/i3n2xNmXeBW/OVXasNzGf+Mbe9LMsycx/zF4GEIUINzBW/n0liaV05w1cSaEGM6ZaruDe7mBD3LnDnhmxjItQHHGVHveIoqzOH/q2jfyQv4HH2V5dF7xEIICuqPyzBp3o9m/zu7jeA7X80d875T6+mz/3HOOcN+owLQT9PkaD+xIPPouL+Vmhlu6VnMh7+H6cbtAn1dz3ZZLAI/hTfwZP75jfrBV9iDmW3osUY0EV/wcP8m1XMcPTmhTyCaSc6HCMpyqH4c8gT/lIG/ncycdAEpu4w5exH/kn01VxnIgnaplGDzAcBEdHhq57e/5d9zE63nGVBUyBfIpu2tDlBx+ggN8e7ckGD9711nh1dzF3XyUp/LTGOAs3sJzeBsHTzCdZMqbp+Yc+xopr5wo5Pm8i/MxPIcet5387KTAgD/lc1w4JeDdpLxpohlY8xounWG35K+4g6dNFQ2PkPABPjNh8rP8pzrV8wu+zneAQ1zGq3gtP4LC4Vk8iT/h3dxznBhb8td8YZ3ZpEdG9Ee/diI38zl7dJ/bNyTgfz3x2+H5G+w6nD362vj3/NO6/32Lb02c7Wfv2MM8X3iIt/MiPjWKo11ewy1cscmUFrvP4zjIIQ7xleO0321Gmxs5xCEO8e69fo3jsMcFvpKv8FJex30I4HAB13ADF+/4dBdqPFvq2nRAaoPJLK85OrFQMDH519rUX3qDyfrnxSO78YYr1Qns7h6nQdv+Mu/li7yJn8cAEb/IxVzL+7dQANw6B7hpIjv5J67kXN48EcQWjjMVh+KSqUX3PssnuYyfmvj/vzjOk5/AuybO7uR6nsEvTZhccKq8dQucBuJDxe1czkt5Peew1lTzFi7lv3LrSbd9Ha1CxlP58p0EnMGlM15epmoTa8FF8fSpz7MJt/LcqYaao9hxM8+x+5zHv5+44rPcwJOnTNY/bTc5Der5a6xwHS/gI6NPJi4X8ztzdOaYxvIHfHwbk9IucR0fH5/dzRv4zpY/t1i+xn8ZF+76XMlt2wi693A1t5+8J26T00Z8sHydX+VVfJuCb/FGLuOOk7yj8Lf8Cq/g0BYakTI+zYv5D9w3Nkm4lkt5B/efMAAIh7mKF/Ch8dfBilt4Eb+1pd55S7yfS3nnjL6Hp5pdTPY/M6rFD47T8jXgg3yJp/HFqQrSHVyNAnIOH/cJBddxJgDfGSe7Az7C53nRVMPwEfr8I1dPhfw7+b8bvF+4myv52LpOol+g4BPcM+XqW/j2BpmP8D/5FC9c17yb8xXeOmFS8Xm+/Aj6kjlnB05Ejbbt2dqOTbXJlWrdttFsa3edbVdt2e52n3xqO3DuaoFv/u4KW7Up2zDfumtkR+2ejD/sLKdRnt+w2zTi15hG/BrTiF9jGvFrTCN+jZlb/NOlutIwP/OIv4qAOL10/851kW3YA+Zp5LkXi1NxaOnfRDevPuxWYimpqNbWUdBNVvJIYR7x/44Cx6o/CX4pur1Ml7MqsUMGquf23RW/7yVFnibpsBzYVenT8/pezx/6Zbi2joIVi6VSVlnVBJS9ZR7xv8lhHg9fXnz5wy8rzrQdt+V1gwOBo5Qo0aIc7dNRgFKiRFlVKWttUmVllpXDaiir9Nxlb8X0zEBleZKm5cAObJ+B0/dWzdCvIqtEBCuCRbBKECVNQNlh5hH/QT7Gb+NY/an9ny1dcZSjXO0oXTipSeMitF1aap/X9h4VdVyTh6lftqqQtmp5UXSGHwYaxdqE3coqQyysDbKs1NpWljYt0qIYlEO7St952O2ZZX/FZEWWZ+WgTOyQoe67ids3eYgja8sRTnxNaeby3wrziF9yHc/jaYAqvImPkQYztQASgOBrV4kjGhdPudpoT5zUTcM0LmNZUG2933TMo+PIBlmQB1UkocROqDtRGHge4yVyFAgOvkhlLRUVhS5VoQupekWapYkd2J701JLpeUf8fpjaPE/yzKZ2yJDETdyBl/virTlqYl/jYDLfV717+Q2u4aIt5NgKxzqsHzk3axnBSqE9R1xxMMpTgeNrL3MHfhoVcbVAR+3zFs2+qB15VZiaKqgCCQh15MR+0NZ67WFjhFIca6xUUlKQ60LnOlfFapmmw6RatauyzLJZ8Y6EK2FGXqRFXqWSyVBlOnMSk66NxPihrtLOJ75wiH/NFbyAc4nxd2RwrCNORTU9Ut6ZueKO1Z7WruuKwajAiZxAzMAbhllUtO2i7qr9/oK3rxW5xprSVIEYCXSgFjzf9VozeoYLpVApK6WUkqlCZTp1E1UMyiRJ02K1GsjDqucse0vBw3HmFGVe5lVuc0lUrjInd1Mj7iMxo5n3e75wH1fzXs4iwiecWDi1O+7v7OFjMJjRcaf6DrjWtes7Zs1a8LBSaOVqs7bcoo5URFiZoZ/GWavqSFctuov+YtgNDUY8MWLEwydW+xzjaHeTtYEKWSuX6EJSlalUJWpQpWmepFmS921flnXPWTLLQS/KvbIqyqLKbUlGoXJdOJlr51r9cj2hMFkIniuBOjlBllja5D8Kg08wsfnE61bY7dDCxx2vsGvwcOdbGHQmjoQV1fphW50Z5ZJKV27lWV98iXSo2yrWUWqSII2Ltu1KR+8zC2Yxjny38qyLp11tcFXLWXQ8RysgmDnWpJTKVmVZ2FwSMj3UCSs6GWRJmg3zge3bFbXiLJsVfznKTGnLqrSlFFKqQhW61IUrzmzfaBVPbsPhRI6+y0MnmFxkJqeqJ4+Qkc3sk6imfhkMITHBaB+MAkdnaoVtM7G69tE1tncOhbEmXzeAEo6OAJ1cDlxZJ3crv/KJJXLabttrqzD10yiLy47tqK5eNN1gIfIdp3KtY11c1/Uc1dJd7Rzz6/FSr+Ou3kIheVUUZW5TSdRQrzqrXp8kz5IsG+bDqmf7aln3zIrpBWckryl+/Ecq+9HhuIPgPdvopDxm9/vty9SvlHRDEFlbQ09N/AqIiIin9m3atOnQpkWHNjFmaijMjg2HkcmjqUy+fth2TDTtaIUqdermpgyqiLbT0l3T9jrip0ESFXHZlRYLbsfthu3IcxyrrSMOjtG+q3y9oNVkbA+PrsQ+WkwSQbUd4HMrn1wYO+0b60PuVjgtBm3M8O3pPCyfkYboNV9GjX5pQmJiYloT+zYtWrRpj37HGDqnYDTYekd7MwvBLvFaC4dCo5RWWnTupCYPqsi2VUt3vQW/G8TWT8IsKltVm7buuC2/GwbGEWW1aNEIQ/nE0lXRytF5GxP+cp4pDh6BZdRtvZ1Go3DQo98OB/g4j51x7SEemgg0ZiJYHT3uHmtLjKJFo5XGUY52rDN0s6AIq1gK9b3Ow3FxLAgf5BfHk4Jsg9Mx5u8cQjVjcp7ZneTfx03jzMIhGmcnLdp0aNGitSHzcdel9jsVmRRK9LoBXA7tTQYwL/GOE8xktQk/3OJvh3zDhHnTKFycdYVOny4RXRZoE9OlS5sWISEhEQEhEeEok5ksN+4kq1zNrXtR1asTQrGFgTVqaty3h4chGrWAdMZbi4CQAJ9wXBWer3D6j7xtYpTYNmnE31mEfAtS6FED2OS+ta4NZK0VxMfHjI4+hmONOn3u5hZumDFF8ZZpxN8L7Lo5WGej8QnGwq81mbVo08XjMIf57mj2p7lpxD99sSTzNN1snaaDRI1pxK8xjfg1phG/xjTi15hG/BrTiF9jGvFrTCN+jWnErzGN+DWmEb/GNOLXmEb8GtOIX2Ma8WtMI36NacSvMY34NaYRv8Y04teYRvwa04hfYxrxa0wjfo1pxK8xjfg1phG/xjTi15hG/BrTiF9jGvFrTCN+jWnErzGN+DWmEb/GNOLXmEb8GtOIX2Ma8WtMI36NacSvMY34NaYRv8Y04teYRvwa04hfYxrxa0wjfo1pxK8xjfg1phG/xjTi15hG/BrTiF9jGvFrTCN+jWnErzGN+DWmEb/G/H/yi6RaZG1jrwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNy0wN1QwNjozMzo1NS0wNDowMD2gJloAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMDdUMDY6MzM6NTUtMDQ6MDBM/Z7mAAAAAElFTkSuQmCC"}}]);