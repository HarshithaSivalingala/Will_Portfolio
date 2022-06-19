import './index.css'

const AnimatedLetters = ({strArray }) => {
  return (
    <>
      {strArray.map((char, i) => (
        <div key={char + i} id="text">
          <h1>
            {char}
            </h1>
        </div>
      ))}
      </>
  )
}

export default AnimatedLetters