function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"futura", fantasy', color: '#65647C' }}>
        {"Deer Hooves Tread Here"}
      </h1>
      <h2
        style={{
          fontFamily: 'georgia',
          color: '#FD8A8A',
          marginBottom: '1rem'
        }}
      >
        hover your mouse cursor over the digital pushers below
      </h2>
      <h3
        style={{
          fontFamily: 'georgia',
          color: '#FD8A8A',
          fontSize: '1rem',
          marginBottom: '5rem'
        }}
      >
        you can click on them as well
      </h3>
      <button
        style={{
          fontFamily: 'futura',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'futura',
          padding: '1rem',
          fontSize: '2rem',
          background: 'skyblue',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;