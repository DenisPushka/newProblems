export function upload(selector, options = {}) {
  const input = document.getElementById('avatar')
  const customInput = document.getElementById('customInput')

  if (options.accept) {
    input.setAttribute('accept', options.accept.join(','))
  }

  const triggerInput = () => input.click()

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return
    }

    const files = Array.from(event.target.files)

    files.forEach((file) => {
      console.log(file)
    })
  }

  customInput.addEventListener('click', triggerInput)
  input.addEventListener('change', changeHandler)
}
