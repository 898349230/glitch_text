interface GlitchOptionsProps {
  style: string
  onStyleChange: (style: string) => void
}

export default function GlitchOptions({ style, onStyleChange }: GlitchOptionsProps) {
  const styles = [
    { id: 'zalgo', name: 'Zalgo' },
    // { id: 'zalgo2', name: 'Zalgo2' },
    { id: 'random', name: 'Unicode Radom' },
    { id: 'mirror', name: 'Char mirror' },
  ]

  return (
    <div className="space-y-3">
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
        Choose Generate Style
      </label>
      <div className="flex flex-wrap gap-3">
        {styles.map((s) => (
          <button
            key={s.id}
            className={`px-6 py-3 rounded-xl transition-all ${
              style === s.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 dark:shadow-purple-900/30'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
            }`}
            onClick={() => onStyleChange(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}