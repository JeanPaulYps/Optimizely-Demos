import React from 'react';
import {
  createInstance,
  OptimizelyProvider,
  useDecision
} from '@optimizely/react-sdk';

const optimizelyClient = createInstance({ sdkKey:'Go8H5uiwXPqiwvd7SdbMQ' });

function Pre(props) {
  return <pre style={{ margin: 0 }}>{props.children}</pre>
}

const userIds = [];
while (userIds.length < 10) {
  // to get rapid demo results, generate an array of random users. Each user always sees the same variation unless you reconfigure the flag rule.
  userIds.push((Math.floor(Math.random() * 999999) + 100000).toString())
}

function App() {

  return (
    <OptimizelyProvider
        optimizely={optimizelyClient}
        // Generally React SDK runs for one client at a time i.e for one user throughout the lifecycle.
        // You can provide the user Id here once and the SDK will memoize and reuse it throughout the application lifecycle.
        // For this example, we are simulating 10 different users so we will ignore this and pass override User IDs to the useDecision hook for demonstration purpose.
        user={{ id: 'default_user' }}
      >
        <pre>Welcome to our Quickstart Guide!</pre>
          <>
            {userIds.map((userId) => <Decision key={userId} userId={userId}  />)}
            <br />
          </>
    </OptimizelyProvider>
  )
}

function Decision({ userId, optimizely }) {
  // Generally React SDK runs for one client at a time i.e for one user throughout the lifecycle.
  // You can provide the user Id once while wrapping the app in the Provider component and the SDK will memoize and reuse it throughout the application lifecycle.
  // For this example, we are simulating 10 different users so we will ignore this and pass override User IDs to the useDecision hook for demonstration purpose.
  // This override will not be needed for normal react sdk use cases.
  const [decision, clientReady] = useDecision('sort_method', {}, {overrideUserId: userId});

  // Don't render the component if SDK client is not ready yet.
  if (!clientReady) {
    return ''
  }

  const variationKey = decision.variationKey;


  // get a dynamic configuration variable
  // "sort_method" corresponds to a variable key in your Optimizely project
  const sortMethod = decision.variables['sort_method'];
  const numeroVersion = decision.variables.numero_version;
  const submitToOptimizely = ()=> {
    optimizelyClient.track('Click_on_button');
  }
  
  return (    
    <Pre>
      {`\nFlag ${decision.enabled ? 'on' : 'off'}. User number ${userId} saw flag variation: ${variationKey} and got products sorted by: ${sortMethod} config variable as part of flag rule: ${decision.ruleKey}`}
      <button onClick={submitToOptimizely}>Click here</button>
      {console.log(numeroVersion)}
    </Pre>    
  );
}

export default App;
