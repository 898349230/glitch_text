// Zalgo 文字生成
const zalgoCharacters = [
  '\u0300', '\u0301', '\u0302', '\u0303', // 上方字符
  '\u0316', '\u0317', '\u0318', '\u0319', // 下方字符
  '\u0320', '\u0321', '\u0322', '\u0323', // 中间字符
]

export function generateGlitchText(text: string, style: string): string {
  switch (style) {
    case 'zalgo':
      return zalgoify(text)
    case 'random':
      return randomUnicode(text)
    case 'mirror':
      return mirror(text)
    default:
      return text
  }
}

function zalgoify(text: string): string {
  return text.split('').map(char => {
    const numMarks = Math.floor(Math.random() * 5) + 1
    const marks = Array(numMarks)
      .fill(0)
      .map(() => zalgoCharacters[Math.floor(Math.random() * zalgoCharacters.length)])
      .join('')
    return char + marks
  }).join('')
}

function randomUnicode(text: string): string {
  return text.split('').map(char => {
    if (Math.random() > 0.7) {
      return String.fromCharCode(0x0300 + Math.floor(Math.random() * 112))
    }
    return char
  }).join('')
}

function mirror(text: string): string {
  const mirrorChars: { [key: string]: string } = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ',
    'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
    'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o',
    'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
    'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ',
    'z': 'z'
  }
  
  return text.toLowerCase().split('').map(char => 
    mirrorChars[char] || char
  ).reverse().join('')
}