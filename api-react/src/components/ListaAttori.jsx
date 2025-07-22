import React, { useState, useEffect } from "react";

function ListaAttori() {
    const [attori, setAttori] = useState([]);
    const [attrici, setAttrici] = useState([]);
    const [allActors, setAllActors] = useState([]);

    useEffect(() => {
        fetch("https://lanciweb.github.io/demo/api/actresses/")
            .then(response => response.json())
            .then(data => {
                setAttori(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <section>
                <h2>Lista Attori </h2>
                <div className="container">
                    <div className="row">
                        {attori.map((attore) => (
                            <div className="col">
                                <h3>{attore.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <h2>Lista Attrici</h2>
            </section>
        </div>
    );
}

export default ListaAttori;


// [{attori}, ecc]
// [{attrici}, ecc]

// [...attori, ...attrici]