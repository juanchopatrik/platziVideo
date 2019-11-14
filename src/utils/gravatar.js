import md5 from 'md5';

//recibe como parametro el email
const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  //eliminamos todo espacio y lo convertirmos a minusculas
  const formattedEmail = (email).trim().toLowerCase();
  //volvemos todo binario
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;
