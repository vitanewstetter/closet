
module.exports = function Content (props) {
  props = props || {}
  return `
<section
  class="item-grid"
>
  ${props.items.map((el) => {
    // console.log(el.fields.image.fields);
    if (el.fields.image.fields) {
      const url = el.fields.image.fields.file.url;
      return `<img class="item" src=${url}>`
    }
  }).join('')}
</section>
  `
}
