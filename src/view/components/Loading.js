import React from 'react'
import { Typography, Modal, CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { changeLoading } from '../../store/actions/loading.action'

export default function Loadion() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loadingReducer)

  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch( changeLoading({open: false}) )}
      className='d-flex justify-content-center align-items-center h-100'
    >
      <div className='bg-white d-flex align-items-center rounded-lg p-3 outline-none'>
        <CircularProgress size={20} className='m-2'/>
        <Typography variant='subtitle1' >
          {loading.msg}
        </Typography>
      </div>
    </Modal>
  )
}
