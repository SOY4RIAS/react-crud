import React, { useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalState'
import AddNoteButton from '../../components/AddNoteButton'

const ViewNote = () => {
  const router = useRouter()
  const { id } = router.query
  const { notes } = useContext(GlobalContext)
  const note = notes.find((note) => note.id === Number(id))

  return (
    <div className="p-4">
      <Head>
        <title>View Note</title>
      </Head>

      {note ? (
        <Fragment>
          <h1>{note.title}</h1>
          <article>{note.content}</article>
        </Fragment>
      ) : (
        <Fragment>
          <p className="text-xl mb-4">Note not found!</p>
          <AddNoteButton />
        </Fragment>
      )}
    </div>
  )
}

export default ViewNote