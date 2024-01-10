import './Employee.css'
function Employee ({fName, lName, age, position, hobbies, profilePic}) { 
    console.log(fName);   
    return (
        <div id="employee-card">
            <h1>Employee Component</h1>
            <div>
                <img className='employee-pic' src={profilePic} alt=""/>
                <h1>{fName} {lName}</h1>
                <p>Age: {age}</p>
                <p>position: {position}</p>
                <p>Hobbies</p>
                <ol>
                    {hobbies.map((hobbie) => <li>{hobbie}</li>)}
                </ol>
            </div>
        </div>
    );    
};

export default Employee;