import './App.css'

function App() {
  const name = "Lucas";
  const url = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="

  function sum(a, b){
    return a+b;
  }
    return (
      <>
        <div className='App'>
          <h1>Olá React</h1>
          <h2>Bem-vindo {name}</h2>
          <p>Soma: {sum(1, 2)}</p>
          <img src={url} alt="Minha imagem" />
        </div>
      </>
    )
}

export default App
