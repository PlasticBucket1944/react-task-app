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

// アップデートボタンクリック時イベント
const onClickUpdateButton = ():void => {
  console.log('update');
}

// デリートボタンクリック時イベント
const onClickDeleteButton = ():void => {
  console.log('delete');
}

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
      <h2 className="my-3">todo:ここに空白を入れる</h2>
      <div className="alert alert-primary">
        <div className="row px-2">
          <input type="string" className="col"/>
          <button onClick={doAction} className="btn btn-primary col-2">
            登録
          </button>
        </div>
      </div>

      {/* <form>
        <input
          type="text"
          className="inputText"
        />
        <input type="submit" value="作成" className="submitButton" />
      </form> */}



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
                <button type="button" className="btn btn-primary btn-update"
                  onClick={ () => onClickUpdateButton() }>更新</button>
              </th>
              {/* 削除ボタン */}
              <th>
                <button type="button" className="btn btn-danger btn-delete"
                  onClick={ () => onClickDeleteButton() }>削除</button>
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
