import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {insert_trx, update_trx} from '../redux/action';

const TransactionForm = (props) => {
  const [transaction, setTransaction] = useState({
    accountNumber: '',
    FSC: '',
    name: '',
    amount: '',
  })

  const currentIndex = useSelector(state => state.currentIndex);

  const list = useSelector(state => state.list);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTransaction({...transaction, [e.target.name]:e.target.value})
  }

  useEffect(() => {
    if(currentIndex != -1) {
      const trx = list[currentIndex];
      setTransaction({
        accountNumber: trx.accountNumber || '',
        FSC: trx.FSC || '',
        name: trx.name || '',
        amount: trx.amount || '',
      })
    }
  },[currentIndex])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentIndex === -1) {
      dispatch(insert_trx(transaction))
    }
    else {
      dispatch(update_trx(transaction))
    }
    setTransaction({
      accountNumber: '',
      FSC: '',
      name: '',
      amount: '',
    })
  }

  return (
    <>
      <h1>Financial Transactions</h1>
      <form onSubmit = {handleSubmit}>
        <input type = "text" name = "accountNumber"
              onChange = {handleInputChange}
              value = {transaction.accountNumber}
              placeholder = "Account Number"
              style = {{width: '150px',
                      borderRadius: '5px',
                      height: '20px',
                      fontSize: '15px'}}/><br/>
        <input type = "text" name = "FSC"
              onChange = {handleInputChange}
              value = {transaction.FSC}
              placeholder = "FSC"
              style = {{width: '150px',
                      borderRadius: '5px',
                      height: '20px',
                      fontSize: '15px'}}/><br/>
        <input type = "text" name = "name"
              onChange = {handleInputChange}
              value = {transaction.name}
              placeholder = "A/C Holder Name"
              style = {{width: '150px',
                      borderRadius: '5px',
                      height: '20px',
                      fontSize: '15px'}}/><br/>
        <input type = "text" name = "amount"
              onChange = {handleInputChange}
              value = {transaction.amount}
              placeholder = "Amount"
              style = {{width: '150px',
                      borderRadius: '5px',
                      height: '20px',
                      fontSize: '15px'}}/><br/>
        <input type = 'submit'
                value = {currentIndex === -1 ? 'Submit' : 'Update'}
                style = {{width: '100px',
                      borderRadius: '5px',
                      height: '20px',
                      fontSize: '15px',
                      backgroundColor: 'lightskyblue',
                      height: '30px'}}/>
      </form>
    </>
  )

}

export default TransactionForm