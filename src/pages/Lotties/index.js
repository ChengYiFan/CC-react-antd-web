import Lottie from 'react-lottie';
import * as animationData from '../../../animationData/data.json'

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}
