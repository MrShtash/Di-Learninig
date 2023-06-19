import {connect} from 'react-redux'
import {insert_transaction} from '../redux/action';
import {useState} from 'react';

const TransactionForm = (props) => {
  const [infotransaction, setTransaction] = useState(
    {
      accountNumber: '',
      FSC: '',
      name: '',
      amount: '',
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const formData = new FormData(from);
    const all_data = Object.fromEntries(formData.entries())
    console.log("all_data", all_data);
    setTransaction(all_data);
    props.insert_data(all_data); //dispatch the action
  }

  return (
    <>
        <h1>Financial Transactions</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="accountNumber" placeholder="Account Number" style={{width: '150px', borderRadius: '5px', height: '20px', fontSize: '15px'}}/>
        </div>
        <div>
            <input type="text" name="FSC" placeholder="FSC" style={{width: '150px', borderRadius: '5px', height: '20px', fontSize: '15px'}}/>
        </div>
        <div>
            <input type="text" name="name" placeholder="A/C Holder Name" style={{width: '150px', borderRadius: '5px', height: '20px', fontSize: '15px'}}/>
        </div>
        <div>
            <input type="text" name="amount" placeholder="Amount" style={{width: '150px', borderRadius: '5px', height: '20px', fontSize: '15px'}}/>
        </div>
        <button type="submit" style={{width: '100px', borderRadius: '5px', height: '20px', fontSize: '15px', backgroundColor: 'lightskyblue'}}>Submit</button>
        </form>
    </>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    insert_data: (new_transaction) => dispatch(insert_transaction(new_transaction))
  }
}

export default connect(null, mapDispatchToProps)(TransactionForm);