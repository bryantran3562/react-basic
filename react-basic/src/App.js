import './App.css';
// import DataFetching from './components/step10-http/DataFetching';
// import SingleDataFetching from './components/step10-http/SingleDataFetching';
//import ComponentC from './components/step11-useContext/ComponentC';
// import UseStateArray from './components/step8-use-state/UseStateArray';
// import UseEffectHook from './components/step9-use-effect/UseEffectHook';
// import UseEffectHookConditional from './components/step9-use-effect/UseEffectHookConditional';
// import UseEffectOnlyOnce from './components/step9-use-effect/UseEffectOnlyOnce';



//###########################################################################
// BT - To call a functional component:
// a. import Name_of_function from './components/Name_of_your_js_file'
// b. <Name_of_function />
// ##########################################################################

// import Greet from './components/step1-function-component/Greet';
// import PassingParams from './components/step2-props-passing-params/PassingParams';
// import EventHandling from './components/step3-event/EventHandling';
// import ParentComponent from './components/step4-child-call-parent/ParentComponent';
// import ListRender from './components/step6-list-rendering/ListRender';
// import StylingSheets from './components/step7-styling-css/StylingSheets';
// import InlineStyling from './components/step7-styling-css/InlineStyling';
// import StylingCssModule from './components/step7-styling-css/StylingCssModule';
// import UseStateHook from './components/step8-use-state/UseStateHook';
// import UseStateObject from './components/step8-use-state/UseStateObject';

//#####################################################
// BT - The useContext hook.
//      Step1: Define and export the below context.
//#####################################################

import React from 'react';

//#############################################################
// BT - Step3: Router - included the import statement below.
//#############################################################

import { Routes, Route } from 'react-router-dom'


// import FetchingDataUsingState from './components/step12-use-state-fetching-data/FetchingDataUsingState';
// import UseReducer from './components/step13-reducer/UseReducer';
import UseReducerFetchingData from './components/step14-use-reducer-fetching-data/UseReducerFetchingData';

export const UserContext = React.createContext()

// BT - You can many useContext as you want.

export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* BT - You call a function and pass a variable to it */}
      {/* <PassingParams name1="Bryan Tran" age="60">
        {/* BT - You can also pass the text as a children too. 
                 In the child component: {props.children}
        */}
        {/* <h2>This is a children</h2> */}
      {/* </PassingParams> */} 
      {/* <EventHandling /> */}
      {/* <ParentComponent /> */}
      {/* <ListRender /> */}
      {/* <StylingSheets color={true}/> */}
      {/* <InlineStyling /> */}
      {/* <StylingCssModule /> */}
      {/* <UseStateHook /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHookConditional /> */}
      {/* <UseEffectOnlyOnce /> */}
      {/* <DataFetching /> */}
      {/* <SingleDataFetching /> */}

      {/* BT - Step2: Use provider to provide a value that you want to pass down to your children */}
      {/* <UserContext.Provider value='testing'>
        <ChannelContext.Provider value='second value'>
          <ComponentC />
          </ChannelContext.Provider>  
      </UserContext.Provider> */}

      {/* <FetchingDataUsingState /> */}

      {/* <UseReducer /> */}

      <UseReducerFetchingData />
    </div>
  );
}

export default App;
