import React, { useState, useEffect } from 'react';
import './App.css';
import axios  from 'axios';
import CovidHeader from './components/covidHeader/covidHeader';
import TableStats from './components/table/table';
import Pagination from './components/pagination/pagination';
import Footer from './components/footer/footer';
import Notice from './components/notice/notice.component';
import { Container, Row, Col } from 'reactstrap';

import originLogo from './origin.png';
import bmmLogo from './logo.png';
import coding from './react_banner.png';



  const App = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [theads] = useState([{ Date  : '', Confirmed: '', Deaths: '', Active: '', Recovered: ''}])

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        // const res = await axios.get('https://api.covid19api.com/total/country/south-africa');
        const res = await axios.get('http://localhost:3001/stats');
        setPosts(res.data.reverse());
        setLoading(false)
      };
     
      fetchPosts();
    }, []);

    //Render Table Data

    //Render Table Header

    var newPosts = [];

    posts.map( function(post) {

      var d = new Date(post.Date);
        function convert(str) {
          var date = new Date(str),
            month = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
          return [day, month, date.getFullYear()].join("-");
        }

          var newData = {
                        "Confirmed": post.Confirmed,
                        "Deaths": post.Deaths,
                        "Recovered": post.Recovered,
                        "Active": post.Active,
                        "Date": convert(d)
                      }
          newPosts.push(newData)
          return newData
    });

    console.log(newPosts)

    const indexOfLastPost = currentPage * postsPerPage;
    console.log("Index of First Post", indexOfLastPost)
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = newPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate =(pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="container App">

        <CovidHeader />


        <TableStats   posts={currentPost} 
                      loading={loading}
                      theads={theads}
        />

        <Pagination postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate}
        />
        <br />
        <Notice />
        <br />
        <Container>
      
          <Row>
            <Col sm="4">

            {/* <img src={originLogo} className="App-logo" alt="logo" /> */}

            </Col>
            <Col sm="4">

            <img src={bmmLogo} className="App-logo" alt="logo" />

            </Col>
            <Col sm="4">

            {/* <img src={coding} className="App-logo" alt="logo" /> */}

            </Col>
          </Row>
        
        </Container>

       <Footer />
      <hr />

        <h4>View Countries affected by SARS-CoV-2 | COVID-19</h4>

        <a  title="Countries Stats" 
            href="https://radlee.github.io/covidstats/" 
            target="__blank">
            Browse and Search
        </a>

      <hr />
 
      </div>

    );
 
}

export default App;