import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { Http } from '../http/Http'
import Types from '../types/types'

export const Post = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postDescription, setPostDescription] = useState('')
  const [postResult, setPostResult] = useState<string | null>(null)
  const fortmatResponse = (res: Types | Error | unknown) => {
    return JSON.stringify(res, null, 2)
  }
  const { isLoading: isLoadingiPost, mutate: mutatePost } = useMutation<
    Types,
    Error
  >(
    async () => {
      return await Http.create({
        title: postTitle,
        description: postDescription,
      })
    },
    {
      onSuccess: (res) => {
        setPostResult(fortmatResponse(res))
      },
      onError: (err: Error) => {
        setPostResult(fortmatResponse(err))
      },
    }
  )
  useEffect(() => {
    if (isLoadingiPost) setPostResult('posting...')
  }, [isLoadingiPost])
  function postData() {
    try {
      mutatePost()
    } catch (err) {
      setPostResult(fortmatResponse(err))
    }
  }
  const clearPostOutput = () => {
    setPostResult(null)
  }
  return (
    <div id="app">
      <div>
        <div>React Query Axios Typescript POST</div>
        <div>
          <div>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="text"
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>
          <button onClick={postData}>Post Data</button>
          <button onClick={clearPostOutput}>Clear</button>
          {postResult && (
            <div>
              <pre>{postResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
