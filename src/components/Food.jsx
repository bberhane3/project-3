const Food = (props) => {
  let value = Object.values(props.food)
  return (
    <div>
      <img className="food_pic" src={value[0]} alt="favorite food" />
    </div>
  )
}

export default Food
