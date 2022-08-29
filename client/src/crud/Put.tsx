import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { Http } from '../http/Http'
import Types from '../types/types'

export const Put = () => {
  const [putId, setPutId] = useState('')
  const [putTitle, setPutTitle] = useState('')
  const [putDescription, setPutDescription] = useState('')
  const [putResult, setPutResult] = useState<string | null>(null)
  const fortmatResponse = (res: Types | Error | unknown) => {
    return JSON.stringify(res, null, 2)
  }
  const { isLoading: isLoadingPut, mutate: mutatePut } = useMutation<
    Types,
    Error
  >(
    async () => {
      return await Http.update(putId, {
        title: putTitle,
        description: putDescription,
      })
    },
    {
      onSuccess: (res) => {
        setPutResult(fortmatResponse(res))
      },
      onError: (err: Error) => {
        setPutResult(fortmatResponse(err))
      },
    }
  )
  useEffect(() => {
    if (isLoadingPut) setPutResult('updating...')
  }, [isLoadingPut])
  function putData() {
    if (putId) {
      try {
        mutatePut()
      } catch (err) {
        setPutResult(fortmatResponse(err))
      }
    }
  }
  const clearPutOutput = () => {
    setPutResult(null)
  }
  return (
    <div>
      <div>
        <div>React Query Axios Typescript PUT</div>
        <div>
          <div>
            <input
              type="text"
              value={putId}
              onChange={(e) => setPutId(e.target.value)}
              placeholder="Id"
            />
          </div>
          <div>
            <input
              type="text"
              value={putTitle}
              onChange={(e) => setPutTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setPutDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <button onClick={putData}>Update Data</button>
          <button onClick={clearPutOutput}>Clear</button>
          {putResult && (
            <div role="alert">
              <pre>{putResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
