import React, { useState, useEffect } from "react";


function ListaAttori() {
    const [attori, setAttori] = useState([]);
    const [attrici, setAttrici] = useState([]);
    const [allActors, setAllActors] = useState([]);

    // CHIAMATA PER ATTORI
    useEffect(() => {
        fetch("https://lanciweb.github.io/demo/api/actors/")
            .then(response => response.json())
            .then(data => {
                setAttori(data);
                console.log("Attori:", data);
            });
    }, []);

    // CHIAMATA PER ATTRICI
    useEffect(() => {
        fetch("https://lanciweb.github.io/demo/api/actresses/")
            .then(response => response.json())
            .then(data => {
                setAttrici(data);
                console.log("Attrici:", data);
            });
    }, []);

    useEffect(() => {
        if (attori.length > 0 && attrici.length > 0) {
            const unione = [...attori, ...attrici];
            setAllActors(unione);
        }
    }, [attori, attrici]);

    return (
        <div className="container py-4">
            <h2 className="mb-4">Lista Attori e Attrici Insieme</h2>
            <div className="row">
                {allActors.map(persona => (
                    <div key={persona.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={persona.image}
                                className="card-img-top"
                                alt={persona.name}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{persona.name}</h5>
                                <p><strong>Anno di nascita:</strong> {persona.dob}</p>
                                <p><strong>Nazionalità:</strong> {persona.nationality}</p>
                                <p><strong>Biografia:</strong> {persona.biography}</p>
                                <p><strong>Riconoscimenti:</strong> {persona.awards}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    // <div className="container py-4">
    //     {/* SEZIONE ATTORI */}
    //     <section className="mb-5">
    //         <h2 className="mb-4">Lista Attori</h2>
    //         <div className="row">
    //             {attori.map(attore => (
    //                 <div key={attore.id} className="col-md-4 mb-4">
    //                     <div className="card h-100 shadow-sm">
    //                         <img
    //                             src={attore.image}
    //                             className="card-img-top"
    //                             alt={attore.name}
    //                             style={{ height: "250px", objectFit: "cover" }}
    //                         />
    //                         <div className="card-body">
    //                             <h5 className="card-title">{attore.name}</h5>
    //                             <p><strong>Anno di nascita:</strong> {attore.dob}</p>
    //                             <p><strong>Nazionalità:</strong> {attore.nationality}</p>
    //                             <p><strong>Biografia:</strong> {attore.biography}</p>
    //                             <p><strong>Riconoscimenti:</strong> {attore.awards}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </section>

    {/* SEZIONE ATTRICI
            <section>
                <h2 className="mb-4">Lista Attrici</h2>
                <div className="row">
                    {attrici.map(attrice => (
                        <div key={attrice.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={attrice.image}
                                    className="card-img-top"
                                    alt={attrice.name}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{attrice.name}</h5>
                                    <p><strong>Anno di nascita:</strong> {attrice.dob}</p>
                                    <p><strong>Nazionalità:</strong> {attrice.nationality}</p>
                                    <p><strong>Biografia:</strong> {attrice.biography}</p>
                                    <p><strong>Riconoscimenti:</strong> {attrice.awards}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    ); */}
}

export default ListaAttori;
// [{attori}, ecc]
// [{attrici}, ecc]

// [...attori, ...attrici]