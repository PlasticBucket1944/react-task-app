// タスクの型定義
export type Task = {
  id: string;
  name: string;
  status: TaskStauts;
  createdAt: string;
  updatedAt: string;
};

// タスクの実行状況
export enum TaskStauts {
  // 未実行
  NOT_EXECUTED = 1,
  // 実行中
  EXECUTION = 2,
  // 完了
  COMPLETE = 3,
}