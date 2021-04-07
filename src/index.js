import React from 'react';
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import {Provider} from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="9d1439ee-fc22-4a19-81bb-6e508807f5c8" language="en-US">
        <Provider>
         <App />
    </Provider>,
    </SpeechProvider>,
    document.getElementById('root')
   
)