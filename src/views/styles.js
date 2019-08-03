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
button {
  border: none;
  outline: none;
}
.types {
  align-items: center;
  border-bottom: 18px solid black;
  display: flex;
  height: 100px;
  justify-content: space-between;
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
.type__button {
  background: rgb(189,255,2);
  height: 100%;
  width: 120px;
}
.type__button.left {
  background: linear-gradient(90deg, rgba(189,255,2,1) 0%, rgba(189,255,2,0) 100%);
}
.type__button.right {
  background: linear-gradient(90deg, rgba(189,255,2,0) 0%, rgba(189,255,2,1) 100%);
}
</style>
`
}
