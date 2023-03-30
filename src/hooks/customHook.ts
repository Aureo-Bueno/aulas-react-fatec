import { useState } from "react";
import { IUser } from "../../types";

export const initialUser: IUser = {
    name: 'Aureo',
    lasName: 'Bueno'
}

export const removeUser: IUser = {
  name: '',
  lasName: ''
}


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
