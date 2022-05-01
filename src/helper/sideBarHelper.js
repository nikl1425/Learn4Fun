export const calculateSvgSize = (windowSize) => {
  let size = 0;


  switch (true) {
    case windowSize <= 576:
      size = 25;
      break;
    case windowSize > 576 && windowSize <= 1000:
      size = 30;
      break;
    case windowSize > 1000 && windowSize <= 1200:
      size = 30;
      break;
    default:
      size = 40;
      break;
  }

  return size.toString();
}
