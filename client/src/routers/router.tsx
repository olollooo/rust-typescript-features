import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Get } from '../crud/Get'
import { Post } from '../crud/Post'
import { Put } from '../crud/Put'
import { Delete } from '../crud/Delete'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Get />} />
        <Route path={`/post/`} element={<Post />} />
        <Route path={`/put/`} element={<Put />} />
        <Route path={`/delete/`} element={<Delete />} />
      </Routes>
    </BrowserRouter>
  )
}
