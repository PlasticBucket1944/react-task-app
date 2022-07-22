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
export function getTaskAll(): Task[] {
  return stubData;
}

// TaskデータをId指定で取得
export function getTaskById(id: string): Task {
  return stubData.find(task => task.id === id) as Task;
}

// Taskを新規作成
export function createTask(name: string): void {
  let task: Task =
  {
    id: String(++id),
    name: name,
    status: TaskStauts.NOT_EXECUTED,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

// Taskを更新
export function updateTask(id: string, stauts: TaskStauts): void {
  let found = getTaskById(id);
  if(!found) throw Error('検索に失敗しました。');
  found.status = stauts;
}

// Taskを削除
export function daleteTask(id: string): void {
  throw Error('仮置きの処理が複雑になりそうなので実装しない');
}