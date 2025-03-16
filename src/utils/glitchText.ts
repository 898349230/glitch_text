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
    case 'zalgo2':
      return zalgo(text)
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

function zalgo(text: string, intensity = 3) {
  const zalgoCharsAbove = '̍ ̎ ̄ ̅ ̿ ̑ ̆ ̐ ͒ ͗ ͑ ̇ ̈ ̊ ͂ ̓ ̈́ ̋ ̏ ̽ ̉ ͣ ͤ ͥ ͦ ͧ ͨ ͩ ͪ ͫ ͬ ͭ ͮ ͯ ̾ ͛ ͆ ̚';
  const zalgoCharsBelow = '̖ ̗ ̘ ̙ ̜ ̝ ̞ ̟ ̠ ̤ ̥ ̦ ̩ ̪ ̫ ̬ ̭ ̮ ̯ ̰ ̱ ̲ ̳ ̹ ̺ ̻ ̼ ͅ ͇ ͈ ͉ ͍ ͎ ͓ ͔ ͕ ͖ ͙ ͚ ͛';
  const zalgoCharsMiddle = '̕ ̛ ̀ ́ ͘ ̡ ̢ ̧ ̨ ̴ ̵ ̶ ͜ ͝ ͞ ͟ ͠ ͢ ͥ ͧ ͨ ͩ ͪ ͫ ͬ ͭ ͮ ͯ ͘ ͢';

  function randomZalgoChar(arr: string) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  let result = '';
  for (let i = 0; i < text.length; i++) {
      let char = text[i];
      // 上方扭曲字符
      for (let j = 0; j < Math.floor(Math.random() * intensity) + 1; j++) {
          char = randomZalgoChar(zalgoCharsAbove) + char;
      }
      // 中间扭曲字符
      for (let j = 0; j < Math.floor(Math.random() * intensity); j++) {
          char = char + randomZalgoChar(zalgoCharsMiddle);
      }
      // 下方扭曲字符
      for (let j = 0; j < Math.floor(Math.random() * intensity) + 1; j++) {
          char = char + randomZalgoChar(zalgoCharsBelow);
      }
      result += char;
  }
  return result;
}

// 这种方法通过随机替换部分字符为特定范围内的 Unicode 字符来创建"故障"效果。
function randomUnicode(text: string): string {
  return text.split('').map(char => {
    if (Math.random() > 0.7) {
      return String.fromCharCode(0x0300 + Math.floor(Math.random() * 112))
    }
    return char
  }).join('')
}

// 这种方法将文本转换为上下颠倒并反向排列的形式，创造出镜像效果。
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