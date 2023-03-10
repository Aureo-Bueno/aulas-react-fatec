import { useState } from "react"


export const addButton = () => {
    const [add, setAdd] = useState(0);

    const addValue = () => {
        setAdd(add + 1);
    }

    const decreaseValue = () => {
        setAdd(add - 1);
    }

    const resetValue = () => {
        setAdd(0);
    }

    return {
        add,
        addValue,
        decreaseValue,
        resetValue
    }
}
