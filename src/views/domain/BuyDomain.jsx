import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { SlBasket } from "react-icons/sl";
import { MdBlock } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const BuyDomain = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDomains, setFilteredDomains] = useState([]);
    const [suggestionsDomain, setSuggestionsDomain] = useState([]);
    const [isSearched, setSearched] = useState(false);

    const domains = [
        { 
            domain: 'example.com', 
            prize: 2000 , 
            status:true,
            condition:"1st yr only with 2 yr term"
        },
        { 
            domain: 'mywebsite.com', 
            prize: 3000, 
            status:false,
            condition:"Buy it now price"
        },
        { 
            domain: 'cooldomain.net', 
            prize: 3500,
            status:true ,
            condition:"Buy it now price"
        },
        { 
            domain: 'bestdomain.org', 
            prize: 4500 ,
            status:true,
            condition:"1st yr only with 3 yr term"
        },
        { 
            domain: 'domainsearch.io', 
            prize: 2500,
            status:false ,
            condition:"1st yr only with 2 yr term"
        },
        { 
            domain: 'yourname.com', 
            prize: 5500, 
            status:true,
            condition:"Buy it now price"
        },
        { 
            domain: 'webdevs.net', 
            prize: 6500 ,
            status:false,
            condition:"1st yr only with 2 yr term"
        },
        { 
            domain: 'webdevs.com', 
            prize: 6500 ,
            status:false,
            condition:"1st yr only with 3 yr term"
        },
        { 
            domain: 'webdevs.org', 
            prize: 6500 ,
            status:false,
            condition:"1st yr only with 2 yr term"
        },
        { 
            domain: 'technologyhub.com', 
            prize: 6500, 
            status:true,
            condition:"Buy it now price"
        },
        { 
            domain: 'digihost.in', 
            prize: 1500, 
            status:true,
            condition:"1st yr only with 2 yr term"
        },
        { 
            domain: 'digihost.com', 
            prize: 1500, 
            status:false,
            condition:"Buy it now price"
        },
        { 
            domain: 'digihost.org', 
            prize: 9500, 
            status:true,
            condition:"1st yr only with 3 yr term"
        },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // Filtering based on current search term
        const availableDomains = domains.filter(domainObj =>
            domainObj.status === true && domainObj.domain.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const soldDomains = domains.filter(domainObj =>
            domainObj.status === false && domainObj.domain.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDomains({ available: availableDomains, sold: soldDomains });
        setSearched(true); // Mark as searched
        setSuggestionsDomain([]); // Clear suggestions after search
    };




    const handleInputChange = (e) => {
        const value = e.target.value; // Get current input value
        setSearchTerm(value); // Update search term

        if (value !== "") {
            const suggestions = domains.filter(domainObj =>
                domainObj.status === true && domainObj.domain.toLowerCase().includes(value.toLowerCase()) // Use current value
            );
            setSuggestionsDomain(suggestions); // Update suggestions
        } else {
            setSuggestionsDomain([]); // Clear suggestions if input is empty
        }
        setSearched(false);
        setFilteredDomains({ available: [], sold: [] });
    };

    return (
        <div className="buy-domain">
            <div className="card">
                <div className='searchbox'>
                    <Form onSubmit={handleSearch} className='d-flex gap-3 w-100 search-form'>
                        <Form.Group controlId="formDomainSearch" className='serch'>
                            <Form.Control
                                type="text"
                                placeholder="Enter Domain Name"
                                value={searchTerm}
                                required
                                onChange={handleInputChange} // Correctly handle input changes
                            />
                            <i className="feather icon-search search-icon" />
                        </Form.Group>
                        <Button type="submit" >Search Domain</Button>
                    </Form>
                </div>
                <div className='domain-container'>
                    {/* Show suggestions while typing (available domains only) */}
                    {searchTerm && !isSearched && suggestionsDomain.length > 0 && (
                        suggestionsDomain.map((domainObj, index) => (
                            <div className='item' key={index}>
                                {domainObj.domain}
                            </div>
                        ))
                    )}
                    {/* Show filtered sold domains after search */}
                    {isSearched && filteredDomains.sold.length > 0 && (
                        <div className='sold'>
                            {filteredDomains.sold.map((domainObj, index) => (
                                <div className="item sold" key={index}>
                                    <div className="site">
                                    <MdBlock /> {domainObj.domain} is taken
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Show filtered available domains after search */}
                    {isSearched && filteredDomains.available.length > 0 && (
                        <div className='avalible'>
                            <h4 className={filteredDomains.sold.length> 0 ? "" : "d-none"}>Available Domains</h4>
                            {filteredDomains.available.map((domainObj, index) => (
                                <div className="item" key={index}>
                                    <div className="site">
                                        {domainObj.domain}
                                    </div>
                                    <div className="prize">
                                        <div className="condition-box">
                                            <span> ₹{domainObj.prize}/yr</span>
                                            <p>{domainObj.condition}</p>
                                        </div>
                                        <Button className='buy-btn'>Buy Now</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    

                    {/* Message for no results found */}
                    {isSearched && filteredDomains.available.length === 0 && filteredDomains.sold.length === 0 && (
                        <div className='item'>No domains found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuyDomain;
