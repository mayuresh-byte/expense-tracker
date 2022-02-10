import React, { useState } from 'react'

const Home = () => {

    const [ShowForm, setShowForm] = useState(false);
    const [Amt, setAmt] = useState("");
    const [Desc, setDesc] = useState("");
    const [TransType, setTransType] = useState("");
    const [Balance, setBalance] = useState(0);
    const [Income, setIncome] = useState("");
    const [Exp, setExp] = useState("");
    const [History, setHistory] = useState([]);

    console.log(History);

    const AddHistory = (elemarr) => {
        // const TempHistory = [tempHistory];
        setHistory([...History, elemarr]);

    }


    const AddTransaction = () => {

        if (TransType === "Income") {
            let newBal = Balance + Amt;
            newBal = Number(newBal)
            setBalance(newBal);
            let newIncome = Income + Amt;
            newIncome = Number(newIncome)
            setIncome(newIncome);

            let tempHistory = [Desc, Amt]
            AddHistory(tempHistory);
            setDesc("");
            setShowForm(false);

        }
        else {
            if (Balance <= 0) {
                alert("Your dont have enough fund to continue the transaction...You can add money by clicking on add momey button")
            }
            else {
                let newBal = Balance - Amt;
                newBal = Number(newBal);
                if (newBal < 0) {
                    alert("Your dont have enough fund to continue the transaction...You can add money by clicking on add momey button")
                }
                else {
                    setBalance(newBal);
                    let newExp = Exp + Amt;
                    newExp = Number(newExp)
                    setExp(newExp);
                    let tempHistory = [Desc, Amt]
                    AddHistory(tempHistory);
                    setDesc("");
                    setShowForm(false);
                }

            }

        }


    }

    const Amount = (e) => {
        setAmt(Number(e.target.value));
    }

    const Description = (e) => {
        setDesc(e.target.value);
    }




    const FormAdd = () => {
        return (

            <>
                <div className="mb-3">
                    <span className='mx-3'>Amount:</span>
                    <input type="number" name="amt" id="amt" onChange={Amount} />
                </div>
                <div className="mb-3">
                    <span className='mx-3'>Transaction Description: </span>
                    <input type="text" name='desc' id='desc' value={Desc} onChange={Description} />
                </div>
                <div className="mb-3 form-check">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setTransType("Income")} />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Income
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setTransType("Expense")} />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Expense
                        </label>

                    </div>
                </div>
                <button type="submit" onClick={AddTransaction} className="btn btn-success mx-auto">Submit</button>
            </>

        );
    }

    return (
        <div className="card text-center border-primary my-4 col-8 mx-auto">
            <div className="container my-2">
                <button type="button" onClick={() => setShowForm(true)} className="btn btn-outline-success pull-left mx-auto p">Add</button>
            </div>

            <div className="container col-8">
                {ShowForm ? FormAdd() : null}
            </div>

            <div className="row md-n5 my-3 col-6  mx-auto">
                <div className="col px-md-5"><div className="p-2 border bg-light">Balance : {Balance} </div></div>
            </div>


            <div className="row md-n5 my-3 col-8  mx-auto">
                <div className="col px-md-5"><div className="p-2 border bg-light">Income : {Income} </div></div>
                <div className="col px-md-5"><div className="p-2 border bg-light">Expense : {Exp}</div></div>
            </div>

            <div className="card-body">
                <h5 className="card-title">Transaction History</h5>
                <table className="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">T.No</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {History.map((elem) =>
                            <tr>
                                <th scope="row">1</th>
                                <td>{elem[0]}</td>
                                <td>{elem[1]}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home