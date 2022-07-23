import {ChangeEvent, KeyboardEvent, 
  ReactElement, useState} from 'react'
import {Task, TaskStauts} from './TaskEntity'; 
import { getTaskAll } from './TaskModel';

//import './App.css'

function App():ReactElement {
const [val, setVal] = useState(0)
const [data,setData] = useState<number[]>([])

const [tasks, setTasks] = useState<Task[]>([]);

const loadEvent = () => {
  const hoge: Task[] = getTaskAll();
  setTasks(hoge);
  console.log(tasks);
}
window.addEventListener('load', (event) => {
  setTasks(task => getTaskAll());
  console.log(tasks);
});
//window.addEventListener('load', loadEvent);


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
  console.log(tasks)
  if (event.code === 'Enter') {
      doAction()
  }
}

let total = 0
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
      <table className="table">
        <thead><tr><th>value</th><th>total</th></tr></thead>
        <tbody>
        {data.map((v,k)=>{
          total += v
          return <tr key={k}><td>{v}</td><td>{total}</td></tr>
        })}
        </tbody>
      </table>

      <div className="row">
        {/* <!-- カラム01 --> */}
        {/* <!-- カードの枠：card --> */}
        <div className="card mb-3" style={{maxWidth: '540px'}}>
          {/* <!-- ガターを削除 --> */}
          <div className="row g-0">
            {/* <!-- mdブレイクポイントで水平に --> */}
            <div className="col-md-8">
              {/* <!-- カードの本文 --> */}
              <div className="card-body">
                <h4 className="card-title">勉強する</h4>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        {/* <!-- カラム02 --> */}
        {/* <!-- カードの枠：card --> */}
        <div className="card mb-3" style={{maxWidth: '540px'}}>
          {/* <!-- ガターを削除 --> */}
          <div className="row g-0">
            {/* <!-- mdブレイクポイントで水平に --> */}
            <div className="col-md-8">
              {/* <!-- カードの本文 --> */}
              <div className="card-body">
                <h4 className="card-title">毎日歩く</h4>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>

        {/* <!-- カラム02 --> */}
        {/* <!-- カードの枠：card --> */}
        <div className="card mb-3" style={{maxWidth: '540px'}}>
          {/* <!-- ガターを削除 --> */}
          <div className="row g-0">
            {/* <!-- mdブレイクポイントで水平に --> */}
            <div className="col-md-8">
              {/* <!-- カードの本文 --> */}
              <div className="card-body">
                <h4 className="card-title">リラックスする</h4>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {tasks.map((task) => (
          <div>
            {task.id}
            {task.name}
            {task.status}
          </div>
        ))}
      </div>

    </div>
  </div>
)
}

export default App
