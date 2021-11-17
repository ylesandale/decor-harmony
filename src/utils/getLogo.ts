export const getLogo = () => {
  const randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber > 0.2 && randomNumber < 0.4) {
    return '/images/HeaderLogo2.png';
  } else if (randomNumber > 0.4 && randomNumber < 0.6) {
    return '/images/HeaderLogo3.png';
  } else if (randomNumber > 0.6 && randomNumber < 0.8) {
    return '/images/HeaderLogo4.png';
  } else if (randomNumber > 0.8) {
    return '/images/HeaderLogo5.png';
  } else {
    return '/images/HeaderLogo1.png';
  }
};
