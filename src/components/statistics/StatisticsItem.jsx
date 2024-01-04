import propTypes from 'prop-types';
import s from '../statistics/statisticsItem.module.css';

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}


function StatisticsItem ({label, percentage}) {
  const randomBackgroundColor = generateRandomColor();
   return ( <li className={s.item} style={{ backgroundColor: randomBackgroundColor }}>        
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
)};

export default StatisticsItem;

StatisticsItem.propTypes = {    
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired 

};




