import React from 'react'

export default function Menu() {
  return (
    <div className='menu-container'>
        <div>
          <h3><a href='https://moon-struck.net'>moon-struck.net</a></h3>
          <a href="mailto:alexandrialeemcpherson@gmail.com">Email me!</a>
        </div>
        <div className='menu'>
          <div>
            <a href='/?title=arrow'>ARROW</a>
          </div>
          <div>
            <a href='/?title=akatsukizukuyo'>暁月夜</a>
          </div>
          <div>
            <a href='/?title=setsugekka'>雪月花</a>
          </div>
        </div>
    </div>
  )
}
