import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import  {useState} from 'react';
import BlogList from './Blog-list';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: <LoremIpsum p={2}/>, author: 'Mario', id:1},
        {title: 'My New Website', body: <LoremIpsum p={2}/>, author: 'Julie', id:2},
        {title: 'My New Website', body: <LoremIpsum p={2}/>, author: 'Alina', id:3}
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="My Blogs!"></BlogList>
            {/* props */}
        </div>
    );
}
 
export default Home;

//hook used to make value reactive
/*{ <button onClick={() => {
        handleClickAgain('Julie')
    }}>Click Me Again</button> }*/
// const handleClickAgain = (name) => {
    //     console.log('Hello ' +name);
    // }    
    // let name = "Pranali";

    // const [noun, setName] = useState('Alice');
    // const [age, setAge] = useState(19);
    // const handleClick = (e) => {
    //     setName('Alin');
    //     setAge(28)
    // }
  
    // return (         
    //     <>
    //     <div className="home">
    //         <h2>Home Page</h2>
    //         <button onClick={handleClick}>Click Me</button>           
    //     </div>
    //     <div className="info">
    //         <p>{noun} is {age} years old</p>
    //     </div>
    //     </>
    //  );    