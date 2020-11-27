import {useState, useEffect} from 'react';
import Meteorites from './Meteorites'
import Pagination from './Pagination';

const App = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  
  useEffect(() => {
    const itemsPerPage = 100;
    const offset = (currentPage - 1) * itemsPerPage;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = '00:00:00';
    const dateTime = date+'T'+time;

    const getMeteorites = async () => {
      const response = await fetch(`https://data.nasa.gov/resource/y77d-th95.json?$where=year%20between%20%271900-01-10T00:00:00%27%20and%20%27${dateTime}%27&$order=mass&$limit=${itemsPerPage}&$offset=${offset}`);
      const data = await response.json();
      setCurrentItems(data);

    }
    const getTotalPages = async () => {
      const res = await fetch (`https://data.nasa.gov/resource/y77d-th95.json?$where=year%20between%20%271900-01-10T00:00:00%27%20and%20%27${dateTime}%27&$select=count%28*%29`)
      const total = await res.json();
      const number = parseInt(total[0].count)
      const pages = Math.ceil(number/itemsPerPage)
      setTotalPages(pages)
    }
      getMeteorites();
      getTotalPages();
    }, [currentPage]); 
  
  const nextPage = (e) => {
      setCurrentPage(currentPage + 1)
  }

  const previousPage = (e) => {
    setCurrentPage(currentPage -1)
  }

  const firstPage = (e) => {
  setCurrentPage(1)
  }

  const lastPage = (e) => {
  setCurrentPage(totalPages)
  }

  return (
    <div className="App">
      <h1>METEORITE LANDINGS</h1>
       <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        firstPage={firstPage}
        lastPage={lastPage}
        currentPage={currentPage}
        totalPages={totalPages}
        />
      <div className="meteorites">
        {currentItems.map(currentItem => (
        <Meteorites
        key={currentItem.id}
        name={currentItem.name}
        recclass={currentItem.recclass}
        mass={currentItem.mass}
        year={currentItem.year}
        fall={currentItem.fall}
        lat={currentItem.reclat ? currentItem.reclat : "0.000000"}
        long={currentItem.reclong ? currentItem.reclong : "0.000000"}
        />
        ))}
      </div>
    </div>
  )
}

export default App;