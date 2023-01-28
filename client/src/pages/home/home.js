import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    return navigate(`/registration-form?type=${type}`);
  };

  return (
    <>
      <div className="background">
        <div className="title">
          <h1>Welcome to Task#2</h1>
        </div>
        <div class="buttons">
          <button
            value="individual"
            onClick={(e) => handleNavigation(e.target.value)}
            className="individual"
          >
            Individual
          </button>
          <button
            value="business"
            onClick={(e) => handleNavigation(e.target.value)}
            className="business"
          >
            Business
          </button>
        </div>
      </div>
    </>
  );
}
