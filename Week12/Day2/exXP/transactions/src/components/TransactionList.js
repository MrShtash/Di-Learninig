import TransactionForm from "./TransactionForm";
import {useSelector, useDispatch} from 'react-redux';
import {delete_trx, update_index} from '../redux/action';


const TransactionList = (props) => {
  const list = useSelector(state => state.list);

  const dispatch = useDispatch();

  return (
    <>
      <TransactionForm/>
      <h2>Transaction List</h2>
      <table style = {{border: "1px solid #ccc"}}>
        <tbody>
          {
            list.map((item, i) => {
              return (
                <tr key={i}>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  {item.accountNumber}
                </td>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  {item.FSC}
                </td>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  {item.name}
                </td>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  {item.amount}
                </td>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  <button
                    onClick={() => dispatch(update_index(i))}
                    style = {{backgroundColor: 'green'}}>
                      Edit
                  </button>
                </td>
                <td style = {{border: "1px solid #ccc", pading: '5px'}}>
                  <button
                    onClick={() => dispatch(delete_trx(i))}
                    style = {{backgroundColor: 'red'}}>
                      Delete
                  </button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default TransactionList