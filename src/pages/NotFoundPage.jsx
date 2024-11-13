import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const idTimeout = setTimeout(()=>{
      navigate('/', {replace: true})
    }, 3000)
    return () => {
      clearTimeout(idTimeout)
    };
  }, [navigate]);
  return (
    <section>
      <h1>Not found</h1>
      <p>Ви будете перенаправлені на головну сторінку через 3 секунди</p>
    </section>
  );
};

export default NotFoundPage;
