export function upload(selector, options = {}) {
  const input = document.getElementById('avatar')
  const customInput = document.getElementById('customInput')
  const preview = document.createElement('div')

  preview.classList.add('preview')

  if (options.accept) {
    input.setAttribute('accept', options.accept.join(','))
  }

  input.insertAdjacentElement('afterend', preview)
  const triggerInput = () => input.click()

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return
    }

    const files = Array.from(event.target.files)

    preview.innerHTML = ' '
    files.forEach((file) => {
      if (!file.type.match('image')) return

      const reader = new FileReader()

      reader.onload = (ev) => {
        const src = ev.target.result
        input.insertAdjacentHTML(
          'afterend',
          `<div class="preview-image">
            <img src="${src}" alt="${file.name}"/>
         </div>`
        )
      }

      reader.readAsDataURL(file)
    })
  }

  customInput.addEventListener('click', triggerInput)
  input.addEventListener('change', changeHandler)
}
