import { useState,useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3002/navigation`);
        const json = await res.json();
        setResult(json);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <BrowserRouter>
                {result.map((value) => (
                    <Link to={value.link}>{value.title}</Link>
                ))}
            </BrowserRouter>
        </>
    );
}

export default Navbar;