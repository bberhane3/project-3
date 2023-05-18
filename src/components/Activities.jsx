const Activities = (props) => {
  let value = Object.values(props.activity)
  return (
    <div>
      <img className="food_pic" src={value[0]} alt="popular activities" />
    </div>
  )
}

export default Activities
