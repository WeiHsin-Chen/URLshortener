function generateShortURL() {
  const number = '0123456789'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let allItems = []
  allItems = allItems.concat([...number], [...lowercase], [...uppercase])
  let randomItems = ''

  for (let i = 1; i <= 5; i++) {
    const randomItem = Math.floor(Math.random() * allItems.length)
    randomItems += allItems[randomItem]
    allItems.splice(randomItem, 1)
  }
  return randomItems
}

module.exports = generateShortURL