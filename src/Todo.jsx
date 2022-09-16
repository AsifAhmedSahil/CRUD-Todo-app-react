import React from 'react'
import {FaRegTrashAlt} from "react-icons/fa"
const style = {
    li:`flex justify-between p-4 bg-slate-200 my-2 capitalize `,
    liCompleted:`flex justify-between p-4 bg-slate-400 my-2 capitalize `,
    row:`flex`,
    text:`ml-2 cursor-pointer`,
    textCompleate:`ml-2 cursor-pointer line-through`,
    button:`cursor-pointer flex items-center`
}
const Todo = ({todo}) => {
  return (
    <li className={style.li}>

        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.text}>{todo}</p>

        </div>
        <button><FaRegTrashAlt/></button>
        
    </li>
  )
}

export default Todo