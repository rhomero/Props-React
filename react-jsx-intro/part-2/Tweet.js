const Tweet = ({username, name, date, message}) => 
(
    <div className="tweet">
      <a className="name" href="">{name}</a>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p className="message">{message}</p>
    </div>
)