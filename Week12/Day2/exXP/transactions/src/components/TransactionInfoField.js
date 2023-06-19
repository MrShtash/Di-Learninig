import {connect} from 'react-redux';
import {update_transaction, update_current_id, delete_transaction} from '../redux/action';

const TransactionList = (props) => {
// ~~~~
    const handleEdit = (id) => {
    const transaction = props.list_transactions.find((item) => item.id === id);
    props.update_current_id(id);
    document.getElementsByName('accountNumber')[0].value = transaction.accountNumber;
    document.getElementsByName('FSC')[0].value = transaction.FSC;
    document.getElementsByName('name')[0].value = transaction.name;
    document.getElementsByName('amount')[0].value = transaction.amount;
  };


// ~~~~

    const handleDelete = (id) => {
        props.delete_transaction(id);
    };
// ~~~~
    return(
        <>
            {props.list_transactions.length !== 0 && 
                props.list_transactions.map((item, index)=>
                <div key={index}>
                    <p>{item.accountNumber}</p>
                    <p>{item.FSC}</p>
                    <p>{item.name}</p>
                    <p>{item.amount}</p>
                    <button onClick={() => handleEdit(item.id)} style={{width: '60px', borderRadius: '5px', height: '20px', fontSize: '15px', backgroundColor: 'lightgreen'}}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} style={{width: '60px', borderRadius: '5px', height: '20px', fontSize: '15px', backgroundColor: 'red'}}>Delete</button>
                </div>)}
                {props.list_transactions.length == 0 && <h1>No transaction yet</h1>}
        </>
    )
}


// ~~~~
const mapStateToProps = (state) => {
  return {
    list_transactions: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update_current_id: (id) => dispatch(update_current_id(id)),
    delete_transaction: (id) => dispatch(delete_transaction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
// ~~~~


// const mapDispatchToProps = (state) => {
//     return {
//         list_transactions: state.list,
//     }
// }
// export default connect(mapDispatchToProps)(TransactionList)