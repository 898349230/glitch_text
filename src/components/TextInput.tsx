interface TextInputProps {
  value: string
  onChange: (text: string) => void
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="space-y-3">
      <label htmlFor="input" className="block text-lg font-medium text-gray-700 dark:text-gray-200">
        input text
      </label>
      <textarea
        id="input"
        className="w-full h-32 p-4 text-lg border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 transition-all"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="input your text..."
      />
    </div>
  )
}