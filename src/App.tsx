import React from "react"
import Logo from "./logo"
import logoLong from "./assets/logo.png"

export default function App() {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0)
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    )
  }

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*")
  }

  return (
    <main className='text-sm flex flex-col gap-4 items-center justify-center p-4'>
      <header className='flex items-center justify-center gap-2'>
        <img src={logoLong} className='w-6' /> <h2>Rectangle Creator</h2>
        <Logo className='w-6' />
      </header>
      <section className='flex gap-4 items-center justify-center'>
        <label htmlFor='input' className='text-gray-950'>
          Count
        </label>
        <input
          className='border px-2 py-1 outline-none focus-visible:border-blue-400 rounded border-gray-950 '
          type='number'
          id='input'
          ref={inputRef}
        />
      </section>
      <footer className='flex gap-4 text-sm mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white rounded-md px-3.5 py-2'
          onClick={onCreate}
        >
          Create
        </button>
        <button
          onClick={onCancel}
          className='border hover:border-blue-500 hover:text-blue-500  border-gray-950 rounded-md px-3.5 py-2'
        >
          Cancel
        </button>
      </footer>
    </main>
  )
}
