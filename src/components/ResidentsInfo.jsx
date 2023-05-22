const ResidentsInfo = ( { residentData } ) => {
    return (
        <div className="resident-card">
            <h3>{ residentData.name }</h3>
            <img src={ residentData.image } alt="" />
            <p><b> Status: { residentData.status }</b></p>
            <p><b> Origin Name: { residentData.origin.name }</b></p>
            <p><b> Episodes Appears: { (residentData.episode).length }</b></p>
        </div>
    )    
};

export default ResidentsInfo;
