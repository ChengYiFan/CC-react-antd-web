// import Clock from '@/components/Clock';
import WithTimer from '@/components/WithTimer';
const edit = (props) => {
  return (
    <div>
      editor
      <div>{props.time.toLocaleTimeString()}</div>
    </div>
  );
}

export default WithTimer(edit);
