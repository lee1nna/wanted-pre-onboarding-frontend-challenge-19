import { useState } from 'react'
import styles from './AddList.module.css'
import { useAppDispatch } from '../store'
import { addList } from '../store/ListSlice'

const AddList = () => {
    const dispatch = useAppDispatch()
    const [list, setList] = useState<string>('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setList(e.target.value)
    }

    return (
        <div className={styles['add-wrapper']}>
            <input type="text" className="input" onChange={inputHandler}/>
            <button className="button" onClick={() => {dispatch(addList(list))}}>Add</button>
        </div>
    )
}

export default AddList