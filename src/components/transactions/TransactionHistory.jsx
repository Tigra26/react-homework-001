import propTypes from 'prop-types';
import s from '../transactions/transactionHistory.module.css';

function TransactionHistory ({items}) {
    return (
    <table class={s.transactionHistory}>
        <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
        </thead>
        <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}    
        </tbody>
    </table>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            type: propTypes.string.isRequired,
            amount: propTypes.number.isRequired,
            currency: propTypes.string.isRequired
        }).isRequired
    ).isRequired

}

  