const App = () => {
  return (
    <>
      <div className='container bg-light'>
        <div className='d-flex'>
          <header>
            <h1 className='text-danger'>Devoteam</h1>
          </header>
        </div>
        <div className='tab-content mt-5'>
          <div className='tab-pane fade show active'>
            <input
              className='form-control mb-5'
              type='text'
              placeholder='Report'
              id='report'
              disabled
            />
            <form>
              <div className='text-center mb-3'>
                <h3>Create Robot and Input Commands</h3>
              </div>

              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='position.x'
                  name='position.x'
                  className='form-control'
                  placeholder='Type the robot starting position x value here...'
                />
              </div>

              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='position.y'
                  name='position.y'
                  className='form-control'
                  placeholder='Type the robot starting position y value here...'
                />
              </div>

              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='position.direction'
                  name='position.direction'
                  className='form-control'
                  placeholder='Type the robot facing direction from the starting position (N, E, S, W)'
                />
              </div>
              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='grid.x'
                  name='grid.x'
                  className='form-control'
                  placeholder='Room width here, should be number...'
                />
              </div>
              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='grid.y'
                  name='grid.y'
                  className='form-control'
                  placeholder='Room depth here, should be number...'
                />
              </div>
              <div className='form-outline mb-4'>
                <input
                  type='text'
                  id='commands'
                  name='commands'
                  className='form-control'
                  placeholder='Commands here (L for left, R for right and F for forward)'
                />
              </div>
              <div className='d-grid gap-2'>
                <button type='submit' className='btn btn-dark btn-block mb-3'>
                  See Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
