// app.js
<h1>hello</h1>
const App = () => {
    // Define your data
    const data = [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 1, name: 'MR MAN', age: 65, email: 'Man@example.com' },
        { id: 1, name: 'Jim bou', age: 50, email: 'jimjohn@example.com' },
        { id: 1, name: 'Fom Kom', age: 25, email: 'fomn@example.com' },
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 1, name: 'Jim bou', age: 50, email: 'jimjohn@example.com' },
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 1, name: 'MR MAN', age: 65, email: 'Man@example.com' },
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
  
    ];


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <DataRow key={row.id} data={row} />
                ))}
            </tbody>
        </table>
    );
};


const DataRow = ({ data }) => {
   

    const handleEdit = (e, field) => {
        
        console.log(`Edited ${field}: ${e.target.innerText}`);
    };

    return (
        <tr>
            <td>{data.id}</td>
            <td contentEditable onBlur={(e) => handleEdit(e, 'name')}>{data.name}</td>
            <td contentEditable onBlur={(e) => handleEdit(e, 'age')}>{data.age}</td>
            <td contentEditable onBlur={(e) => handleEdit(e, 'email')}>{data.email}</td>
        </tr>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
