export const SET_DEVICE = 'SET_DEVICE';

export function setDevice(isMobile) {
  if (isMobile) {
    document.documentElement.classList.add('mobile');
    document.documentElement.classList.remove('desktop');
  } else {
    document.documentElement.classList.remove('mobile');
    document.documentElement.classList.add('desktop');
  }
  return {
    type: SET_DEVICE,
    isMobile,
  };
}
