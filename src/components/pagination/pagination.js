import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const  Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => setIsOpen(!isOpen);

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle Pagination</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <nav className="pagination-nav">
                            <ul className="flex-container pagination justify-content-center" >
                                {pageNumbers.map(number => {
                                    return (
                                    <li key={number} className="page-item">
                                        <a onClick={() => paginate(number)} className="page-link">
                                            {number}
                                        </a>
                                    </li>

                                    )
                                })}
                            </ul>
                        </nav>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    
    );
}

export default Pagination;