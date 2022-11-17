import React from 'react'
import ReactDOM from 'react-dom/client'

// change this line for test the different components
// for example import App from './components/props/App';

import App from './components/rendering_components/App';

// **************************************************

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
.render(<App />)
