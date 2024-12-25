import './App.css';
import Filter from './components/Filter';
import reviews from './components/data'
function App() {
  return (
        <div className='flex flex-col justify-center items-center bg-gray-200  min-h-screen'>
        
            <div className=''>
                <h1 className='font-extrabold text-4xl'>Our Testimonials</h1>
            </div>

            <div className='w-40 mt-1  bg-violet-700 h-1 rounded-sm mb-8'></div>

            <div className='w-[85vw] md:w-[700px] bg-white min-h-[400px] max-h-[500px] rounded-md flex flex-col justify-center items-center
    m-10 p-10 transition-all duration-700 hover:shadow-xl'>
            
            <Filter reviews={reviews}> </Filter>
            

            </div>

        </div>
  );
}

export default App;
