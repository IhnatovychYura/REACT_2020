import React, {memo, useState} from 'react';

const MemoComponent = memo(() => {
    let [counter, setCounter] = useState(0);
    console.log('MemoComponent was rendered')

    return (
        <div>
            <h1>Memo</h1>
            Counter: {counter}
            <button onClick={() => setCounter((prev) => prev +1)}> Change counter</button>
        </div>
    )
})

export default MemoComponent