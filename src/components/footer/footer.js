import React, { Component } from 'react';

export default class Footer extends Component {

    render() {

        // JavaScript for Scroll to Top 
        var mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        return (
            <React.Fragment>
                
                    <div className="row">
                        <div className="twelve columns">        
                            <div    class="fb-like" 
                                    data-href="https://radlee.github.io/covidsa" 
                                    data-width="" 
                                    data-layout="box_count" 
                                    data-action="recommend" 
                                    data-size="large" 
                                    data-share="true">
                            </div>

                        </div>

                           

                        <br/>
                         
                        <button  onClick={() => topFunction()} id="myBtn" title="Go to top">Top</button>  
                    </div>
         
            </React.Fragment>
        );
      }
};