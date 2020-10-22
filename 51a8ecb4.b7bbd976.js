(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(74)),o={slug:"/SplashScreenLoadingData",title:"Splash screen & loading data"},c={unversionedId:"3_Guides/3_2_SplashScreenLoadingData",id:"3_Guides/3_2_SplashScreenLoadingData",isDocsHomePage:!1,title:"Splash screen & loading data",description:"\ud83d\udea7 It's a Work In Progress section \ud83d\udea7",source:"@site/docs/3_Guides/3_2_SplashScreenLoadingData.md",slug:"/SplashScreenLoadingData",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_2_SplashScreenLoadingData.md",version:"current",sidebar:"docs",previous:{title:"Theme",permalink:"/react-native-boilerplate/docs/Theme"},next:{title:"Add a store",permalink:"/react-native-boilerplate/docs/AddAStore"}},l=[{value:"How the navigation is build \u2753",id:"how-the-navigation-is-build-",children:[]},{value:"How to load data before app open \u2753",id:"how-to-load-data-before-app-open-",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83d\udea7 It's a Work In Progress section \ud83d\udea7"),Object(r.b)("p",null,"In many applications, you need to load data from API before displaying any content.\nTo do that, we built a solid navigation based on a splash screen to load data before the content shows, and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/ram-bundles-inline-requires#inline-requires"}),"inline require")," to improve performance."),Object(r.b)("h2",{id:"how-the-navigation-is-build-"},"How the navigation is build \u2753"),Object(r.b)("p",null,"The answer is :"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Like it's recommended in the React Navigation V5 documentation \ud83e\udd13")),Object(r.b)("p",null,"Like everywhere else, the entry point of the navigation is in the root file ",Object(r.b)("inlineCode",{parentName:"p"},"src/App.js")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => (\n  <Provider store={store}>\n    <PersistGate loading={null} persistor={persistor}>\n      <SafeAreaView style={Layout.fill}>\n        <NavigationContainer>\n          <StatusBar barStyle="dark-content" />\n          <ApplicationNavigator />\n        </NavigationContainer>\n      </SafeAreaView>\n    </PersistGate>\n  </Provider>\n)\n')),Object(r.b)("p",null,"What is new here is into the ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationNavigator")," component :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Stack = createStackNavigator()\n\nlet MainNavigator\n\n// @refresh reset\nconst ApplicationNavigator = () => {\n  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)\n\n  const applicationIsLoading = useSelector(\n    (state) => state.startup.initialize.loading,\n  )\n\n  useEffect(() => {\n    if (MainNavigator == null && !applicationIsLoading) {\n      MainNavigator = require('@/Navigators/Main').default\n      setIsApplicationLoaded(true)\n    }\n  }, [applicationIsLoading])\n\n  return (\n    <Stack.Navigator headerMode={'none'}>\n      <Stack.Screen name=\"Startup\" component={IndexStartupContainer} />\n      {isApplicationLoaded && (\n        <Stack.Screen name=\"Main\" component={MainNavigator} />\n      )}\n    </Stack.Navigator>\n  )\n}\n")),Object(r.b)("p",null,"So the root navigator is a stack with two screens : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the splash screen (",Object(r.b)("inlineCode",{parentName:"li"},"IndexStartupContainer"),"),"),Object(r.b)("li",{parentName:"ul"},"a second navigator (",Object(r.b)("inlineCode",{parentName:"li"},"MainNavigator"),"). ")),Object(r.b)("p",null,"The main goal of the ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationNavigator")," is to only have one screen (the ",Object(r.b)("inlineCode",{parentName:"p"},"IndexStartupContainer"),") to load.\nAnd, when the application finish loading, then fetch and display the ",Object(r.b)("inlineCode",{parentName:"p"},"MainNavigator"),".\nIn other words, when ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationNavigator")," is mounted, it only can display the ",Object(r.b)("inlineCode",{parentName:"p"},"IndexStartupContainer")," because the ",Object(r.b)("inlineCode",{parentName:"p"},"MainNavigator")," isn't loaded and imported yet.\nIn the ",Object(r.b)("inlineCode",{parentName:"p"},"StartupContainer"),", the redux action which is used to load data on init application is trigger and when the action is finish, the state ",Object(r.b)("inlineCode",{parentName:"p"},"state.startup.initialize.loading")," turns ",Object(r.b)("inlineCode",{parentName:"p"},"true"),".\nwhen this state is true, in the useEffect the ",Object(r.b)("inlineCode",{parentName:"p"},"MainNavigator")," navigator is imported , the navigation navigate and reset to a screen of the ",Object(r.b)("inlineCode",{parentName:"p"},"MainNavigator"),"."),Object(r.b)("p",null,"To conclude, all new screens have to be added to ",Object(r.b)("inlineCode",{parentName:"p"},"MainNavigator"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"ApplicationNavigator")," increase startup performance thanks to inline require and provides a splash screen to load your data."),Object(r.b)("h2",{id:"how-to-load-data-before-app-open-"},"How to load data before app open \u2753"),Object(r.b)("p",null,"To have a great separation of concerns, all API call are make into Services. In the above section, it said that in ",Object(r.b)("inlineCode",{parentName:"p"},"IndexStartupContainer"),", a redux action is triggered. This action is ",Object(r.b)("inlineCode",{parentName:"p"},"InitializeStartupAction")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"useEffect(() => {\n  dispatch(InitializeStartupAction())\n}, [dispatch])\n")),Object(r.b)("p",null,"In redux, triggering an action lead to an associated reducer and in most cases the action pass trough a middleware.\nAll the logic can be found at ",Object(r.b)("inlineCode",{parentName:"p"},"Stores/Startup/Initialize.js"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { createSlice } from '@reduxjs/toolkit'\nimport { buildAction, buildReducers } from '@/Store/builder'\nimport initializeStartupService from '@/Services/User/FetchOne'\n\nconst name = 'startup'\n\nconst initialState = {\n  loading: true,\n  error: false,\n}\n\nexport const InitializeStartupAction = buildAction(\n  name,\n  initializeStartupService,\n)\n\nconst { pending, fulfilled, rejected } = buildReducers(initialState, {\n  itemKey: null,\n})\n\nconst initialize = createSlice({\n  name,\n  initialState,\n  extraReducers: (builder) => {\n    builder\n      .addCase(InitializeStartupAction.pending, pending)\n      .addCase(InitializeStartupAction.fulfilled, fulfilled)\n      .addCase(InitializeStartupAction.rejected, rejected)\n  },\n})\nexport default initialize.reducer\n")),Object(r.b)("p",null,"All stores are based on redux-toolkit to simplify the process of API calls by using the ",Object(r.b)("inlineCode",{parentName:"p"},"createAsyncThunk")," function (hidden by the ",Object(r.b)("inlineCode",{parentName:"p"},"buildAction")," action which is a store builder function)\nSo when the action pass through the middleware thunk, the service ",Object(r.b)("inlineCode",{parentName:"p"},"initializeStartupService")," is launched."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default async () => {\n  //Simulation of an async function delay\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(), 3000)\n  })\n}\n")),Object(r.b)("p",null,"So you can replace the fake call simulated with the Promise by real api calls like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default async () => {\n  const response = await api.get(`users/${userId}`)\n    return response.data\n}\n")))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);