import React from 'react';

const App = React.memo(()=>{

    const [a,...ret]=[
        1,
        2,
    ]

    return (
        <div>
            hello world 3
        </div>
    )
})

export default App;