import propTypes from 'prop-types';
import StatisticsItem from '../statistics/StatisticsItem';
import s from '../statistics/statistics.module.css';

function Statistics({ statistics, title }) {

    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
            {statistics.map(item => (
                <StatisticsItem
                    id={item.id}
                    label={item.label}
                    percentage={item.percentage}               
                />
            ))}
            </ul>
        </section>
    )
}


export default Statistics;

Statistics.propTypes = {
   title: propTypes.string.isRequired,
   statistics: propTypes.arrayOf(  
    propTypes.shape({    
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired
    }).isRequired,
   ).isRequired,
};

