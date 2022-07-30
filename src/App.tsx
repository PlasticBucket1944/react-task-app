import React, {ChangeEvent, KeyboardEvent, 
  ReactElement, useState} from 'react'
import {Task, TaskStauts} from './TaskEntity'; 
import { createTask, daleteTask, getTaskAll, updateTask } from './TaskModel';

//import './App.css'

function App():ReactElement {
const [tasks, setTasks] = useState<Task[]>([]);
const [inputText, setInputText] = useState("");

// ロード時イベント
window.addEventListener('load', (event: Event) => {
  setTasks(getTaskAll());
});

// 入力テキスト変更時イベント
const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();

  setInputText(event.target.value);
};

// 登録ボタンクリック時イベント
const onClickRegisterButton = (event: React.FormEvent):void => {
  if(!createTask(inputText)) {
    alert("登録に失敗しました。");
  } 
}

// タスク状態変更時イベント
const onChangeTaskStatus = (id: string, status: string):void => {
  // ミューテート対応の為、新たに配列を作成
  const temp: Task[] = tasks.map((task) => ({ ...task }));
 
  // タスク状態の変更を反映したタスク配列を作成
  const newTasks: Task[] = temp.map((task) => {
    if(task.id === id) {
      task.status = Number(status);
    }
    return task;
  });

  setTasks(newTasks);
}

// 更新ボタンクリック時イベント
const onClickUpdateButton = (task: Task):void => {
  if(!updateTask(task)) {
    alert("更新に失敗しました。");
  }
  window.location.reload();
}

// 削除ボタンクリック時イベント
const onClickDeleteButton = (id: string):void => {
  if(!daleteTask(id))
  {
    alert("削除に失敗しました。");
  }
  window.location.reload();
}

return (
  <div>
    {/* ヘッダー */}
    <h1 className="bg-primary text-white p-2">Task App</h1>
    {/* メインコンテンツ */}
    <div className="container">
      <h2 className="my-3">　　　</h2>
      <div className="alert alert-primary">
        <form className="row px-2" onSubmit={(event) => onClickRegisterButton(event)}>
          <input
            type="text"
            className="inputText col"
            maxLength={40}
            onChange={(event) => onChangeText(event)}
          />
          <input type="submit" value="登録" className="button-submit btn btn-primary col-2" />
        </form>
      </div>


      {/* タスク一覧テーブル */}
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
                <select className="dropdown-task-status" defaultValue={task.status}
                  onChange={ (event) => onChangeTaskStatus(task.id, event.target.value) } >
                  <option value="1">未実行</option>
                  <option value="2">実行中</option>
                  <option value="3">完了</option>
                </select>
              </th>
              {/* 更新ボタン */}
              <th>
                <button type="button" className="btn btn-primary btn-update"
                  onClick={ () => onClickUpdateButton(task) }>更新</button>
              </th>
              {/* 削除ボタン */}
              <th>
                <button type="button" className="btn btn-danger btn-delete"
                  onClick={ () => onClickDeleteButton(task.id) }>削除</button>
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
