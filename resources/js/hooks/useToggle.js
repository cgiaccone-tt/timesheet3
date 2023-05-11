import useLocalStorage from './useLocalStorage';

function useToggle(key = null, initialState = true) {

  console.log(key);
  const [visible, setVisible] = useLocalStorage(key, initialState);

  function toggle() {
    setVisible(prevVisible => !prevVisible);
  }

  return [visible, toggle];
}

export default useToggle;
