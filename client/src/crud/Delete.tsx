import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { Http } from '../http/Http'
import Types from '../types/types'

export const Delete = () => {
  const [deleteId, setDeleteId] = useState('')
  const [deleteResult, setDeleteResult] = useState<string | null>(null)
  const fortmatResponse = (res: Types | Error | unknown) => {
    return JSON.stringify(res, null, 2)
  }

  const { isLoading: isLoadingDelete, mutate: mutateDelete } = useMutation<
    Types,
    Error
  >(
    async () => {
      return await Http.deleteById(deleteId)
    },
    {
      onSuccess: (res) => {
        setDeleteResult(fortmatResponse(res))
      },
      onError: (err: Error) => {
        setDeleteResult(fortmatResponse(err))
      },
    }
  )
  useEffect(() => {
    if (isLoadingDelete) setDeleteResult('deleting...')
  }, [isLoadingDelete])
  function deleteDataById() {
    if (deleteId) {
      try {
        mutateDelete()
      } catch (err) {
        setDeleteResult(fortmatResponse(err))
      }
    }
  }
  const clearDeleteOutput = () => {
    setDeleteResult(null)
  }
  return (
    <div id="app">
      <div>
        <div>React Query Axios Typescript DELETE</div>
        <div>
          <div>
            <input
              type="text"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              placeholder="Id"
            />
            <div>
              <button onClick={deleteDataById}>Delete by Id</button>
              <button onClick={clearDeleteOutput}>Clear</button>
            </div>
          </div>
          {deleteResult && (
            <div role="alert">
              <pre>{deleteResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
