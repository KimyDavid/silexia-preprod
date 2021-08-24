import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {FiMenu} from 'react-icons/fi'
import DropdownAccount from './dropdown-account'

const Navbar = () => {
  const {config} = useSelector(
    state => ({
      config: state.config
    }),
    shallowEqual
  )
  let {collapsed} = {...config}
  const dispatch = useDispatch()
  return (
    <div className="navbar navbar-1 border-b">
      <div className="navbar-inner w-full flex items-center justify-start">
        <button
          onClick={() =>
            dispatch({
              type: 'SET_CONFIG_KEY',
              key: 'collapsed',
              value: !collapsed
            })
          }
          className="mx-4">
          <FiMenu size={20} />
        </button>

        <div className="ml-auto"></div>

        <DropdownAccount />
      </div>
    </div>
  )
}

export default Navbar
