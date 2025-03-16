import { generateGlitchText } from '../utils/glitchText'
import { useState, useEffect } from 'react'

interface GlitchOutputProps {
  text: string
  style: string
}

export default function GlitchOutput({ text, style }: GlitchOutputProps) {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const glitchedText = generateGlitchText(text, style)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(glitchedText)
        } else {
          const textArea = document.createElement('textarea')
          textArea.value = glitchedText
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('复制失败:', err)
      }
    }
  }

  return (
    <div className="space-y-4">
      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl min-h-[100px] break-all text-lg dark:text-gray-100 shadow-inner">
        {glitchedText || '转换后的文本将显示在这里...'}
      </div>
      
      {isClient && (
        <button
          onClick={copyToClipboard}
          className={`w-full py-3 rounded-xl transition-all ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200 dark:shadow-purple-900/30'
          }`}
        >
          {copied ? '复制成功！' : '复制文本'}
        </button>
      )}
    </div>
  )
}