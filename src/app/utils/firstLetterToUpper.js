export default function firstLetterToUpper(word) {
  const firstLetter = word[0]
  return firstLetter.toUpperCase() + word.slice(1)
}
