import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from '../service/authService';
import { useUser } from '../context/UserContext';

export const useLogin = () => {
  const navigate = useNavigate();

  const { user, login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const res = await getUserByEmail(formData.email);

      if (formData.email == '' || formData.pass == '') {
        setError('All fields are required');
        return;
      }

      if (res.length === 0) {
        setError('User not found. Please register');
        setFormData({
          email: '',
          pass: '',
        });
        return;
      }

      const loggedUser = res[0];

      if (loggedUser.password !== formData.pass) {
        setError('Incorrect password');
        setFormData({
          pass: '',
        });
        return;
      }

      login(loggedUser);
      navigate('/home', { replace: true });
    } catch (error) {
      setError('The Server is not responding....');
    }
  };
  return { formData, handleChange, handleSubmit, error };
};
