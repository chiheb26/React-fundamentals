import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce','Clark','Diana']
    const persons = [
        {
            id : 1,
            name : 'Bruce',
            age: 30,
            skill: 'React'
        },            
        {
            id : 2,
            name : 'Clark',
            age: 25,
            skill: 'Angular'
        },            
        {
            id : 3,
            name : 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const PersonList =  persons.map(p=>(<Person key={p.id} person={p} />))
    const NameList =  names.map((name,index)=>(<h2 key={index}>{name}</h2>))
  return (
    <div>
        {NameList}
    </div>
  )
}

export default NameList