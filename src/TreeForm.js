import React, { useState } from 'react'
import InputRange from 'react-input-range'
import './index.css';
import 'react-input-range/lib/css/index.css'

const TreeForm = ({initTreeCount}) => {
    const [trees, setTreesCount] = useState(initTreeCount)

    const computeOxygen = (trees) => {
        return trees * 10
    }

    return (
        <div>
        <form className="form">
            <InputRange
                minValue={0}
                maxValue={100}
                value={trees}
                onChange={value => setTreesCount(value)} />
        </form>
        <div>You have generated {computeOxygen(trees)} tons of oxygen</div>
        </div>
    )
}

export default TreeForm