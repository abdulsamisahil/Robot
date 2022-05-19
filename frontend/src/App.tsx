import React, { useState } from 'react'
import Report from './components/Report'
import Header from './components/Header'
import { getReport } from './API'
const App = () => {
  const [report, setReport] = useState('')
  const [robotFormData, setRobotFormData] = useState({
    x: '',
    y: '',
    direction: '',
    room_x: '',
    room_y: '',
    commands: '',
  })

  const { x, y, direction, room_x, room_y, commands } = robotFormData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRobotFormData({ ...robotFormData, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const position = { x: x, y: y, direction: direction }
    const grid = { x: room_x, y: room_y }

    const result = await getReport(position, grid, commands)
    setReport(result)
  }
  return (
    <>
      <div className='container bg-light'>
        <Header />
        <Report report={report} />
        <form onSubmit={onSubmit}>
          <div className='text-center mb-3'>
            <h3>Positioning & Commanding Robot</h3>
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              onChange={onChange}
              name='x'
              value={x}
              className='form-control'
              placeholder='X value'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              onChange={onChange}
              name='y'
              value={y}
              className='form-control'
              placeholder='Y value'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              onChange={onChange}
              name='direction'
              value={direction}
              className='form-control'
              placeholder='Facing, (N | E | S | W)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='room_x'
              onChange={onChange}
              value={room_x}
              className='form-control'
              placeholder='Room width (Number)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='room_y'
              onChange={onChange}
              value={room_y}
              className='form-control'
              placeholder='Room depth (Number)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              onChange={onChange}
              name='commands'
              value={commands}
              className='form-control'
              placeholder='Commands, (R | F | L)'
            />
          </div>
          <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-dark btn-block mb-3'>
              See Report
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
