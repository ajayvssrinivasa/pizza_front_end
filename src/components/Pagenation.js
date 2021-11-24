import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Search from 'react-search'
import ReactPaginate from 'react-paginate';

function Pagenation1() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)


  const getData = async() => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <div key={pd.id}>
                    <h2>{pd.title}</h2>
                    <p>{pd.body}</p>
                </div>)
                setData(postData)
                setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};
const HiItems=(items)=>{
  console.log(items)
}
 useEffect(() => {
   getData()
 }, [offset])

  return (
    <div>
      {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    />
    </div>
  );
}

export default Pagenation1;