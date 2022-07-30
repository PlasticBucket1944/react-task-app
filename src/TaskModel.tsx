import {Task, TaskStauts} from './TaskEntity'; 

// 仮データ
let stubData: Task[] = [];
let task1: Task =
{
  id: '1',
  name: 'task1',
  status: TaskStauts.NOT_EXECUTED,
  createdAt: '2022-07-21',
  updatedAt: '2022-07-21',
};
let task2: Task =
{
  id: '2',
  name: 'task2',
  status: TaskStauts.EXECUTION,
  createdAt: '2022-07-22',
  updatedAt: '2022-07-22',
};
let task3: Task =
{
  id: '3',
  name: 'task3',
  status: TaskStauts.COMPLETE,
  createdAt: '2022-07-23',
  updatedAt: '2022-07-23',
};
stubData.push(task1);
stubData.push(task2);
stubData.push(task3);

// 仮採番ID
let id: number = 3; 

// Taskデータを全件取得
// @return 全タスクデータ
export function getTaskAll(): Task[] {
  let tasks: Task[] = [];

  // サーバーからタスクデータを取得
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${process.env.REACT_APP_SERVER_PATH}/tasks`, false);
  xhr.send(null);
  if(xhr.status === 200) {
    JSON.parse(xhr.response).forEach((fetchTask: Task) => {
      const task: Task =
      {
        id: fetchTask.id,
        name: fetchTask.name,
        status: fetchTask.status,
        createdAt: fetchTask.createdAt,
        updatedAt: fetchTask.updatedAt,
      };
      tasks.push(task);
    });
  } else {
    throw Error('通信に失敗しました。');
  }

  return tasks;
}

// TaskデータをId指定で取得
// @return 引数で指定したタスクデータ
export function getTaskById(id: string): Task {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${process.env.REACT_APP_SERVER_PATH}/tasks/${id}`, false);
  xhr.send(null);

  switch (xhr.status) {
    case 200:
      return JSON.parse(xhr.responseText) as Task;
    case 400:
      throw Error('データが見つかりませんでした。');
    default:
      throw Error('通信に失敗しました。');
  }
}

// Taskを新規作成
// @return true:登録成功 false:登録失敗
export function createTask(name: string): boolean {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${process.env.REACT_APP_SERVER_PATH}/tasks`, false);
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xhr.send('name=' + encodeURIComponent(name));
  if(xhr.status === 201) {
    return true;
  }
  return false;
}

// Taskを更新
export function updateTask(id: string, stauts: TaskStauts): void {
  let found = getTaskById(id);
  if(!found) throw Error('検索に失敗しました。');
  found.status = stauts;
}

// Taskを削除
// @return true:削除成功 false:削除失敗
export function daleteTask(id: string): boolean {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${process.env.REACT_APP_SERVER_PATH}/tasks/${id}`, false);
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xhr.send(null);
  console.log(xhr.status);
  if(xhr.status === 200) {
    return true;
  } 
  return false;
}