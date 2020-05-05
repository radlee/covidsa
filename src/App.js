import React, { useState, useEffect } from 'react';
import logo from './origin.png';
import './App.css';
import axios  from 'axios';
import CovidHeader from './components/covidHeader/covidHeader';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';


  const App = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://api.covid19api.com/total/country/south-africa');
        setPosts(res.data.reverse());
        setLoading(false)
      }

      fetchPosts();
    }, []);

    console.log(posts)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate =(pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="App">

        <CovidHeader />

        <a  className="logo_link" 
            href="https://radlee.github.io/origin-about" 
            rel="logo_link"
        >
          <img src={logo} alt="logo" height="60px"/>
        </a>
        
        <Table  posts={currentPost} 
                loading={loading} />

        <Pagination postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate}
        />
       
        <div  class="fb-like" 
              data-href="https://radlee.github.io/covidsa" 
              data-width="" 
              data-layout="box_count" 
              data-action="recommend" 
              data-size="large" 
              data-share="true">

        </div>
        <br/>
        <hr />

      </div>
    );
 
}

export default App;