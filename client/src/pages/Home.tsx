import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Link to="ui/login">
        <button>Login Page</button>
      </Link>
    </div>
  );
}

export default Home;
