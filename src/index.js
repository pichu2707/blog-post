import React from 'react';
import ReactDOM from 'react-dom'; 
import profile1 from './images/image-1.jpeg'
import profile2 from './images/image-2.jpeg'  
import profile3 from './images/image-3.jpeg'     
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui-comments'>
            <UserCard>
                <div>
                    Hello I am Sarah, and I am live in Istanbul
                </div>
                    <SingleComment 
                    name='Alex'
                    date='Today 5:00 PM'
                    text="It's  amazing" 
                    pic={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Jack'
                    date='Today 6:00 PM'
                    text='great'
                    pic={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Sarah'
                    date='Today 7:00 PM'
                    text='Very well'
                    pic={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)