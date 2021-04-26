import Loader from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => {
  return (
    <Loader
      className={s.loader}
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default Loading;
