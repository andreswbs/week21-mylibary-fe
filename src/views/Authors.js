import {useState} from 'react'

export default function Authors( {authors = [], addAuthor} ) {
    const [newName, setNewName] = useState('')
    const [newBirthYear, setNewBirthYear] = useState('')
    const rows = authors.map((element, index) => {
        return (
            <div className="tableRow" key={index}>
                <div className="tableCell2">{element.name}</div>
                <div className="tableCell1">{element.birth_year}</div>
            </div>
        )
    })

    function handleAddingAuthor() {
        console.log("Will add new author")
        console.log(newName, newBirthYear )
        addAuthor({
            name: newName,
            birthYear:  newBirthYear
        })
    }

    return (
        <div>
            <h1>My favorite authors</h1>
            <div className="tableContainer">
                {rows}
                <div className="tableCell2">
                    <input placeholder="name" value={newName} onChange={({target})=> setNewName(target.value)}  />
                </div>
                <div className="tableCell2">
                    <input placeholder="birth year" value={newBirthYear} onChange={({target})=> setNewBirthYear(target.value)}  />
                </div>
                <div className="tableCell1">
                    <button onClick={handleAddingAuthor}>Add Author</button>
                </div>

            </div>

        </div>
    )
}