import {ChangeEvent, KeyboardEvent, 
  ReactElement, useState} from 'react'
import './App.css'

function App():ReactElement {
const [val, setVal] = useState(0)
const [data,setData] = useState<number[]>([])

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
  if (event.code == 'Enter') {
      doAction()
  }
}

let total = 0
return (
  <div>
      <h1 className="bg-primary text-white p-2">React sample</h1>
      <div className="container">
      <h2 className="my-3">click button!</h2>
      <div className="alert alert-primary">
          <div className="row px-2">
              <input type="number" className="col"
                  onChange={doChange} onKeyPress={doType} value={val} />
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
      </div>
  </div>
)
}

export default App
