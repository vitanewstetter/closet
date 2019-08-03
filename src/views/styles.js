module.exports = function Styles () {
  return `
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  border: 18px solid black;
  font-family: 'Playfair Display', serif, -apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  min-height: 100vh;
}
.types {
  align-items: center;
  border-bottom: 18px solid black;
  display: flex;
  height: 100px;
  position: relative;
  text-transform: uppercase;
}
.type {
  font-size: 50px;
  font-style: italic;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateX(-150%);
}
.type.is-active {
  left: 50%;
  transform: translateX(-50%);
}
</style>
`
}
