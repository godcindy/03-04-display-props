

function UserProfile(props) {
    const { age, name } = props;

  const element = <div>{`age: ${age}, name:${name}`}</div>

  return (
<div>
  <h1>Hello, {element} </h1>;

  </div>

  )

}

export default UserProfile;
