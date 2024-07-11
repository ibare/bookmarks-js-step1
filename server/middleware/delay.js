const delay = (min, max) => (req, res, next) => {
  const delay = Math.floor(Math.random() * max) + min
  setTimeout(next, delay)
}

export default delay
