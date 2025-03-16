'use client'
import '../styles/globals.css'
import TextInput from '../components/TextInput'
import GlitchOutput from '../components/GlitchOutput'
import GlitchOptions from '../components/GlitchOptions'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  const [style, setStyle] = useState('zalgo')
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Glitch Text Generator
        </h1>
        {/* <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          将普通文本转换为独特的故障艺术效果
        </p> */}
        <div className="space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <GlitchOptions style={style} onStyleChange={setStyle} />
          <TextInput value={text} onChange={setText} />
          <GlitchOutput text={text} style={style} />
        </div>
      </div>
    </main>
  )
}