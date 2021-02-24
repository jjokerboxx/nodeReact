import React, { useState } from 'react';


function Selection(props) {
    const [value, setValue] = useState(0);
    const [data, setData] =useState([{id : '00', age : '13', etc: 'etc'},
                                     {id : '01', age : '15', etc: 'etc'},
                                     {id : '02', age : '18', etc: 'etc'}])

    const mapToComponent = data => {
        // 여기에 person은 걍 넘겨주는 props 아무거나 이름 지어준거
        return data.map((person, i) => {
          return (<Section name={person} age={person.age} key={i}/>);
        });
      };


    

    return (
        <div>
            {mapToComponent(data)}
        </div>
        
    )
}

const Section = (props) => {
    const [contents, setContents] = useState('');

    const onTouch = (e) => {
        fetch('http://localhost:3001/api')
            .then(res => res.json())
            .then(res => setContents(res.selection))
        
    }

    return(
        <div>
            <h3>
                {props.age}
                <p>
                    {contents} 
                </p>
                
            </h3>
            <button onClick={onTouch} >Click</button>
        </div>
    )
}
export default Selection;