const nameMaxLength = 6;
const Person = ({hobbies, name, age}) =>
{
    const voteText = age >= 18 ? "Please go vote!" : "You must be 18";
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return(
    <div>
        <p>Learn some information about this person</p>
      <ul>
        <li>Name: {name.slice(0, nameMaxLength)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
    )
}