import {ChangeEvent, KeyboardEvent, 
  ReactElement, useState} from 'react'
import {Task, TaskStauts} from './TaskEntity'; 
import { getTaskAll } from './TaskModel';

//import './App.css'

function App():ReactElement {
const [tasks, setTasks] = useState<Task[]>([]);

// ロード時イベント
window.addEventListener('load', (event) => {
  setTasks(getTaskAll());
});

// アップデートボタンクリック時イベント
const onClickUpdateButton = ():void => {
  console.log('update');
}

// デリートボタンクリック時イベント
const onClickDeleteButton = ():void => {
  console.log('delete');
}

return (
  <div>
    {/* ヘッダー */}
    <h1 className="bg-primary text-white p-2">Task App</h1>
    {/* メインコンテンツ */}
    <div className="container">
      <h2 className="my-3">todo:ここに空白を入れる</h2>
      <div className="alert alert-primary">
        <form className="row px-2">
          <input
            type="text"
            className="inputText col"
          />
          <input type="submit" value="登録" className="button-submit btn btn-primary col-2" />
        </form>
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
