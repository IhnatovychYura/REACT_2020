import React, {useEffect} from 'react';

const HooksTwoComponent = () => {

    //////////// ========= useEffect ======= ////////////////
    // Подібно до componentWillUnMount
    useEffect(() => {
        console.log('mount');
        const interval = setInterval(() => console.log('log from interval'), 1000);

        return () => {
            console.log('unmount')
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            This component was created to show how WillUnmount works in FUNC COMP
        </div>
    )
}

export default HooksTwoComponent