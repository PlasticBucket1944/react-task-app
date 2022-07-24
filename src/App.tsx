import {ChangeEvent, KeyboardEvent, 
  ReactElement, useState} from 'react'
import {Task, TaskStauts} from './TaskEntity'; 
import { getTaskAll } from './TaskModel';

//import './App.css'

function App():ReactElement {
const [val, setVal] = useState(0)
const [data,setData] = useState<number[]>([])

const [tasks, setTasks] = useState<Task[]>([]);

// ロード時イベント
window.addEventListener('load', (event) => {
  setTasks(task => getTaskAll());
});

const doChange = (event:ChangeEvent):void=> {
  const ob = event.target as HTMLInputElement
  const re = Number(ob.value)
  setVal(re)
}

const doAction = ():void=> {
  const arr:number[] = []
  for (let item of data)
      arr.push(item)
  arr.push(val)
  setData(arr)
  setVal(0)
}

const doType = (event:KeyboardEvent):void=> {
  if (event.code === 'Enter') {
      doAction()
  }
}

return (
  <div>
    {/* ヘッダー */}
    <h1 className="bg-primary text-white p-2">Task App</h1>
    {/* メインコンテンツ */}
    <div className="container">
      <h2 className="my-3">click button!</h2>
      <div className="alert alert-primary">
        <div className="row px-2">
          <input type="number" className="col" onChange={doChange} onKeyPress={doType} value={val} />
          <button onClick={doAction} className="btn btn-primary col-2">
            Click
          </button>
        </div>
      </div>
      {/* タスク一覧 */}
      <table className="table table-striped">
        <thead><tr><th>タスク名</th><th>状態</th><th>更新</th><th>削除</th></tr></thead>
        <tbody>
        {tasks.map((task)=>{
          return  (
            // タスク列
            <tr key={task.id}>
              {/* タスク名 */}
              <th>
                <input
                  type="text"
                  defaultValue={task.name}
                  // disabled={false}
                  readOnly
                />
              </th>
              {/* タスク状態 */}
              <th>
                <select className="dropdown-task-status" defaultValue={task.status}>
                  <option value="1">未実行</option>
                  <option value="2">実行中</option>
                  <option value="3">完了</option>
                </select>
              </th>
              {/* 更新ボタン */}
              <th>
              </th>
              {/* 削除ボタン */}
              <th>
              </th>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  </div>
)
}

export default App
