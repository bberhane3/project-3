import Poster from './Poster'
import Food from './Food'
import Activities from './Activities'

const Country = (props) => {
  const makeArray = (obj) => {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let arr = []
    for (let i = 0; i < keys.length; i++) {
      arr.push({ [keys[i]]: values[i] })
    }
    return arr
  }
  let food = makeArray(props.country.popular_food_dish)
  let activities = makeArray(props.country.popular_activities)

  return (
    <div className="countries">
      <h1 className="country">{props.country.country}</h1>
      <div className="posters">
        {props.country.poster.map((poster) => (
          <Poster poster={poster} />
        ))}
      </div>
      <h1 className="titles">Popular Food Dishes</h1>
      <div className="food">
        {food.map((item) => (
          <Food food={item} />
        ))}
      </div>
      <h1 className="titles">Popular</h1>
      <div className="activities">
        {activities.map((activity) => (
          <Activities activity={activity} />
        ))}
      </div>
    </div>
  )
}

export default Country
