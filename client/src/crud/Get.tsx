import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Types from '../types/types'
import { Http } from '../http/Http'
import { Link } from 'react-router-dom'

export const Get = () => {
  const [getId, setGetId] = useState('')
  const [getTitle, setGetTitle] = useState('')
  const [getResult, setGetResult] = useState<string | null>(null)
  const fortmatResponse = (res: Types | Error | unknown) => {
    return JSON.stringify(res, null, 2)
  }

  const { isLoading: isLoadingFindAll, refetch: refetchFindAll } = useQuery<
    Types[],
    Error
  >(
    'query-tutorials',
    async () => {
      return await Http.findAll()
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setGetResult(fortmatResponse(res))
      },
      onError: (err: Error) => {
        setGetResult(fortmatResponse(err))
      },
    }
  )
  useEffect(() => {
    if (isLoadingFindAll) setGetResult('loading...')
  }, [isLoadingFindAll])
  function getAllData() {
    try {
      refetchFindAll()
    } catch (err) {
      setGetResult(fortmatResponse(err))
    }
  }

  const { isLoading: isLoadingFinfdById, refetch: refetchFindById } = useQuery<
    Types,
    Error
  >(
    'query-tutorial-by-id',
    async () => {
      return await Http.findById(getId)
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        setGetResult(fortmatResponse(res))
      },
      onError: (err: Error) => {
        setGetResult(fortmatResponse(err))
      },
    }
  )
  useEffect(() => {
    if (isLoadingFinfdById) setGetResult('loading...')
  }, [isLoadingFinfdById])
  function getDataById() {
    if (getId) {
      try {
        refetchFindById()
      } catch (err) {
        setGetResult(fortmatResponse(err))
      }
    }
  }

  const { isLoading: isSearchingTutorial, refetch: findTutorialsByTitle } =
    useQuery<Types[], Error>(
      'query-tutorials-by-title', // ["query-tutorials-by-title", getTitle],
      async () => {
        return await Http.findByTitle(getTitle)
      },
      {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
          setGetResult(fortmatResponse(res))
        },
        onError: (err: Error) => {
          setGetResult(fortmatResponse(err))
        },
      }
    )
  useEffect(() => {
    if (isSearchingTutorial) setGetResult('searching...')
  }, [isSearchingTutorial])
  function getDataByTitle() {
    if (getTitle) {
      try {
        findTutorialsByTitle()
      } catch (err) {
        setGetResult(fortmatResponse(err))
      }
    }
  }
  const clearGetOutput = () => {
    setGetResult(null)
  }
  return (
    <div>
      <div>
        <div>React Query Axios Typescript Get</div>
        <div>
          <div>
            ・<Link to={`/post/`}>Post Sample</Link>・
            <Link to={`/put/`}>Put Sample</Link>・
            <Link to={`/delete/`}>delete Sample</Link>
          </div>
          <div>
            <button onClick={getAllData}>Get All</button>
            <div>
              <input
                type="text"
                value={getId}
                onChange={(e) => setGetId(e.target.value)}
                placeholder="Id"
              />
              <button onClick={getDataById}>Get by Id</button>
            </div>
            <div>
              <input
                type="text"
                value={getTitle}
                onChange={(e) => setGetTitle(e.target.value)}
                placeholder="Title"
              />
              <button onClick={getDataByTitle}>Find By Title</button>
            </div>
            <button onClick={clearGetOutput}>Clear</button>
          </div>
          {getResult && (
            <div role="alert">
              <pre>{getResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
