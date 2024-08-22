import React, { useContext} from 'react'
import { UserContext } from './Context 1'


const Context3 = () => {

    const user = useContext(UserContext);

    return (
        <div>

            <h2>{`Hello ${user} again!`}</h2>

        </div>
    )
}

export default Context3;