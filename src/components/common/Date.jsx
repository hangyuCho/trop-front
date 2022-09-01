import './date.css'

const Date = (props) => {
  return (
    <div className="date">
      <div className="date-left">{props.from}</div>
      <div className="date-center"></div>
      <div className="date-right">{props.to}</div>
    </div>
  );
};

export default Date;
