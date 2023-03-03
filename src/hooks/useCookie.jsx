import Cookies from 'universal-cookie';

const useCookie = () => {
  const cookies = new Cookies();

  const getCookie = (key, options={}) => {
    return cookies.get(key, options);
  }

  const setCookie = (key, value, options={}) => {
    cookies.set(key, value, options);
  }

  const removeCookie = (key, options={}) => {
    cookies.remove(key, options);
  }

  return { getCookie, setCookie, removeCookie };
}

export default useCookie;