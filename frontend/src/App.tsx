import React, { useState } from 'react'
import Report from './components/Report'
import Header from './components/Header'
import { getReport } from './API'
const App = () => {
  const [report, setReport] = useState('')
  const [isError, setIsError] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = e.currentTarget.elements as any
    const x: HTMLInputElement = elements.x
    const y: HTMLInputElement = elements.y
    const direction: HTMLInputElement = elements.direction
    const roomX: HTMLInputElement = elements.roomX
    const roomY: HTMLInputElement = elements.roomY
    const commands: HTMLInputElement = elements.commands

    const position = {
      x: x.value,
      y: y.value,
      direction: direction.value,
    }

    const grid = {
      x: roomX.value,
      y: roomY.value,
    }

    try {
      const result = await getReport(position, grid, commands.value)
      setReport(result)
      setIsError(false)
    } catch (error: any) {
      const errorMessages = error.response.data.errors
        .map((err: any) => err.msg)
        .join(',\n')

      setIsError(true)
      setReport(errorMessages)
    }

    x.value = ''
    y.value = ''
    direction.value = ''
    roomX.value = ''
    roomY.value = ''
    commands.value = ''
  }

  return (
    <>
      <div className='container bg-light p-3'>
        <Header />
        {report !== '' ? <Report alert={isError} report={report} /> : null}
        <form onSubmit={onSubmit}>
          <div className='text-center mb-3'>
            <h3>Positioning & Commanding Robot</h3>
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='x'
              className='form-control'
              placeholder='X value'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='y'
              className='form-control'
              placeholder='Y value'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='direction'
              className='form-control'
              placeholder='Facing, (N | E | S | W)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='roomX'
              className='form-control'
              placeholder='Room width (Number)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='roomY'
              className='form-control'
              placeholder='Room depth (Number)'
            />
          </div>
          <div className='form-outline mb-4'>
            <input
              type='text'
              name='commands'
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
