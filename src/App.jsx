import './App.css'
import Country from './components/Country'
import placeArray from './places.json'

const App = () => {
  return (
    <div>
      <h1 className="title">Bucket List : Travel Destinations</h1>
      <main>
        {placeArray.map((place) => (
          <Country country={place} key={place.capital} />
        ))}
      </main>
    </div>
  )
}

export default App
