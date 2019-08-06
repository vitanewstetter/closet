const Styles = require('./styles');
const Content = require('./content');
const ArrowSvg = require('./arrow-svg');

module.exports = function Home (props) {
  props = props || {}
  let title = props.title || 'Personal Website'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
  <title>${title}</title>
  ${Styles(props)}
  <!-- Replace this with your own custom font link and edit Styles font-family -->
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,900i&display=swap" rel="stylesheet">
  <!-- End custom font -->
  <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body>
  <div
    class="title types"
  >
    <button class="type__button left">
      ${ArrowSvg()}
    </button>
    ${props.types.map((el, idx) => {
      const className = (idx === 0) ? 'type is-active' : 'type';
      return `<p class="${className}">${el}</p>`
    }).join('')}
    <button class="type__button right">
      ${ArrowSvg()}
    </button>
  </div>
  ${Content(props)}
</body>
</html>
  `
}
